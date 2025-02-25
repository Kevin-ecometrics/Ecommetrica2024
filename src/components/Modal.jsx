import React, { useState } from "react";
import axios from "axios";
import { getLangFromUrl, useTranslations } from "src/i18n/utils";

function Modal({ isOpen, onClose, onSubmit, URL }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const lang = getLangFromUrl(URL);
  const t = useTranslations(lang);

  if (!isOpen) return null;

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(String(phone));
  };

  const validateBusinessType = (businessType) => {
    return businessType.length > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = t("modal.emailError");
    }

    if (!validatePhone(phone)) {
      newErrors.phone = t("modal.phoneError");
    }

    if (!validateBusinessType(businessType)) {
      newErrors.businessType = t("modal.businessTypeError");
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post("https://ecommetrica.com/api/saveData", {
        email,
        phone,
        businessType,
      });
      onSubmit(e);
    } catch (error) {
      console.error("Error al guardar los datos", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white p-8 rounded-lg w-96 relative">
        <div
          className="absolute top-[-20px] right-[-20px] w-20 h-20 flex hover:bg-opacity-95 items-center justify-center cursor-pointer text-4xl bg-[#861453] text-white rounded-full"
          onClick={onClose}
        >
          !
        </div>

        <h2 className="text-2xl font-bold mb-4 text-black">
          {t("modal.title")}
        </h2>
        <h4 className="text-xl mb-4 text-black">{t("modal.subtitle")} </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {/* <label className="block text-gray-700">
              {t("modal.emailLabel")}
            </label> */}
            <input
              type="email"
              placeholder={t("modal.emailLabel")}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black border-b-[#B8B7B7] px-4 py-2 focus:outline-none border"
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700">
              {t("modal.phoneLabel")}
            </label> */}
            <input
              type="tel"
              placeholder={t("modal.phoneLabel")}
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full text-black border-b-[#B8B7B7] px-4 py-2 focus:outline-none border"
              pattern="\d{10}"
              maxLength="10"
              inputMode="numeric"
              required
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700">
              {t("modal.businessTypeLabel")}
            </label> */}
            <input
              type="text"
              placeholder={t("modal.businessTypeLabel")}
              name="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full text-black border-b-[#B8B7B7] px-4 py-2 focus:outline-none border"
              required
            />
            {errors.businessType && (
              <p className="text-red-500">{errors.businessType}</p>
            )}
          </div>
          <div className="flex justify-center">
            {/* <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
              disabled={isSubmitting}
            >
              {t("modal.cancelButton")}
            </button> */}
            <button
              type="submit"
              className="bg-white border-2 font-bold w-full hover:bg-[#861453] hover:text-white text-black border-[#861453] py-2 rounded-lg 
                transform transition duration-500 ease-in-out
              "
              disabled={isSubmitting}
            >
              {isSubmitting
                ? t("modal.submittingButton")
                : t("modal.submitButton")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
