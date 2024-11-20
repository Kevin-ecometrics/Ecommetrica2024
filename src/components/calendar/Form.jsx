import React, { useState } from "react";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    time: "",
    duration: "",
    code: "",
  });

  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];

    // Añadir días vacíos al principio
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    // Añadir días del mes
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
              ? "bg-green-500 text-white"
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Formulario enviado:", formData);
  };

  const renderTimeOptions = () => {
    const times = [];
    for (let hour = 8; hour <= 16; hour++) {
      times.push(`${hour}:00`);
      times.push(`${hour}:30`);
    }
    return times;
  };
  const renderDurationOptions = () => {
    const durations = [];
    const selectedHour = parseInt(formData.time.split(":")[0], 10);
    const selectedMinutes = formData.time.split(":")[1];

    if (
      selectedHour < 16 ||
      (selectedHour === 16 && selectedMinutes === "00")
    ) {
      durations.push("1 hora");
    }
    if (
      selectedHour < 15 ||
      (selectedHour === 15 && selectedMinutes === "00")
    ) {
      durations.push("2 horas");
    }
    if (
      selectedHour < 14 ||
      (selectedHour === 14 && selectedMinutes === "00")
    ) {
      durations.push("3 horas");
    }
    if (formData.code === "ecommetrica-2025") {
      durations.unshift("30 minutos (gratis)");
    }
    return durations;
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg bg-white mb-12 mt-12">
      <div className="header flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Anterior
        </button>
        <h2 className="text-xl font-bold">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Siguiente
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
            Agendar Asesoría para {selectedDate.toDateString()}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Hora:</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="" selected disabled>
                  Selecciona una hora
                </option>
                {renderTimeOptions().map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1">Código (opcional):</label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                placeholder="Ingresa un código promocional"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1">Duración:</label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="" selected disabled>
                  Selecciona la duración
                </option>
                {renderDurationOptions().map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Agendar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Calendar;
