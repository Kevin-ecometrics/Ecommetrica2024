import { useState, useEffect } from "react";
import axios from "axios";
import { getLangFromUrl, useTranslations } from "src/i18n/utils";

function Calendar({ URL }) {
  const lang = getLangFromUrl(URL);
  const t = useTranslations(lang);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    time: "",
    code: "",
    type: "",
    email: "", // Nuevo campo de correo electrónico
  });
  const [showModal, setShowModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [promoMessage, setPromoMessage] = useState("");

  const fetchReservations = async () => {
    try {
      const response = await axios.get("https://ecommetrica.com/asesorias");
      setReservations(response.data);
    } catch (error) {
      console.error(t("calendar.fetchError"), error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = date.toDateString() === selectedDate.toDateString();
      const isToday = date.toDateString() === new Date().toDateString();

      days.push(
        <div
          key={day}
          className={`day flex justify-center items-center h-12 rounded-md cursor-pointer ${
            isSelected
              ? "bg-blue-500 text-white"
              : isToday
              ? "bg-[#C2155C] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => {
            setSelectedDate(date);
            setShowForm(true);
          }}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "code" && value === "ecommetrica-2025") {
      setPromoMessage(t("calendar.validCode"));
    } else {
      setPromoMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirm = async () => {
    try {
      const dateTime = new Date(selectedDate);
      const [hours, minutes] = formData.time.split(":");
      dateTime.setHours(hours, minutes);

      await axios.post("https://ecommetrica.com/asesorias", {
        ...formData,
        time: dateTime.toISOString(),
        date: selectedDate.toISOString().split("T")[0],
      });

      setConfirmed(true);
      setFormData({
        time: "",
        code: "",
        type: "",
        email: "", // Restablecer el campo de correo electrónico
      });

      await fetchReservations();
    } catch (error) {
      console.error(t("calendar.confirmationError"), error);
      setError(true);
    } finally {
      setShowModal(false);
    }
  };

  const renderTimeOptions = () => {
    const times = [];
    for (let hour = 8; hour <= 16; hour++) {
      const time = `${hour}:00`;
      const isReserved = reservations.some(
        (reservation) =>
          new Date(reservation.time).toDateString() ===
            selectedDate.toDateString() &&
          new Date(reservation.time).getHours() === hour
      );
      times.push(
        <option key={time} value={time} disabled={isReserved}>
          {time} {isReserved ? `(${t("calendar.reserved")})` : ""}
        </option>
      );
    }
    return times;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString(lang, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg bg-white mb-12 mt-12">
      <div className="header flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {t("calendar.previous")}
        </button>
        <h2 className="text-xl font-bold">
          {currentDate.toLocaleString(lang, { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {t("calendar.next")}
        </button>
      </div>
      <div className="days-of-week grid grid-cols-7 text-center font-bold mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-of-week">
            {day}
          </div>
        ))}
      </div>
      <div className="days-grid grid grid-cols-7 gap-2">{renderDays()}</div>
      {showForm && (
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">
            {t("calendar.scheduleConsultation")} {formatDate(selectedDate)}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">{t("calendar.time")}:</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="" disabled>
                  {t("calendar.selectTime")}
                </option>
                {renderTimeOptions()}
              </select>
            </div>

            <div>
              <label className="block mb-1">
                {t("calendar.consultationType")}:
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="" disabled>
                  {t("calendar.selectOption")}
                </option>
                <option value="Me interesa un paquete">
                  {t("calendar.packageInterest")}
                </option>
                <option value="Consultoría de Marketing">
                  {t("calendar.marketingConsulting")}
                </option>
                <option value="Estrategia de Redes Sociales">
                  {t("calendar.socialMediaStrategy")}
                </option>
                <option value="Optimización SEO">
                  {t("calendar.seoOptimization")}
                </option>
                <option value="Publicidad Digital">
                  {t("calendar.digitalAdvertising")}
                </option>
                <option value="Otro">{t("calendar.other")}</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">{t("calendar.promoCode")}:</label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                placeholder={t("calendar.enterPromoCode")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {promoMessage && (
                <p className="text-green-500 mt-2">{promoMessage}</p>
              )}
            </div>
            <div>
              <label className="block mb-1">{t("calendar.email")}:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t("calendar.enterEmail")}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              {t("calendar.schedule")}
            </button>
          </form>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">
              {t("calendar.consultationConfirmation")}
            </h3>
            <p className="mb-2">
              <strong>{t("calendar.selectedDay")}:</strong>{" "}
              {formatDate(selectedDate)}
            </p>
            <p className="mb-2">
              <strong>{t("calendar.time")}:</strong> {formData.time}
            </p>
            <p className="mb-2">
              <strong>{t("calendar.promoCodePlaceholder")}:</strong>{" "}
              {formData.code || "N/A"}
            </p>
            <p className="mb-2">
              <strong>{t("calendar.consultationTypePlaceholder")}:</strong>{" "}
              {formData.type}
            </p>
            <p className="mb-2">
              <strong>{t("calendar.emailPlaceholder")}:</strong>{" "}
              {formData.email}
            </p>
            {promoMessage && (
              <p className="text-green-500 mt-2">{promoMessage}</p>
            )}
            <p className="mb-4">
              <strong>{t("calendar.location")}:</strong>
              <a
                href="https://maps.app.goo.gl/MQFyMxdECgqJJ65p7"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                {" "}
                Calle Ignacio Zaragoza, Gustavo Madero 8169-306, 22000 Tijuana,
                B.C.{" "}
              </a>
            </p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                {t("calendar.cancel")}
              </button>
              <button
                onClick={handleConfirm}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                {t("calendar.confirm")}
              </button>
            </div>
          </div>
        </div>
      )}
      {confirmed && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">
              {t("calendar.consultationConfirmed")}
            </h3>
            <p>{t("calendar.consultationSuccess")}</p>
            {promoMessage && (
              <p className="text-green-500 mt-2">{promoMessage}</p>
            )}
            <button
              onClick={() => setConfirmed(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              {t("calendar.close")}
            </button>
          </div>
        </div>
      )}
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">{t("calendar.error")}</h3>
            <p>{t("calendar.consultationError")}</p>
            <button
              onClick={() => setError(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              {t("calendar.close")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
