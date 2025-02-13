import { useEffect, useState } from "react";
import { HiX, HiCheck } from "react-icons/hi";

const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

// Textos traducidos
const translations = {
  en: {
    title: "Select your language",
    saveMessage: "Your preference will be saved for 24 hours",
    select: "Select",
    languages: {
      en: "English",
      es: "Spanish",
    },
  },
  es: {
    title: "Selecciona tu idioma",
    saveMessage: "Tu preferencia se guardará por 24 horas",
    select: "Seleccionar",
    languages: {
      en: "Inglés",
      es: "Español",
    },
  },
};

// Función para obtener el país basado en el locale del navegador
const getCountry = () => {
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  return locale.split("-")[1] || "US"; // Fallback a "US" si no se puede detectar
};

const LanguageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("es");
  const [isLoading, setIsLoading] = useState(true);

  // Lista de códigos de países de habla hispana
  const spanishSpeakingCountries = [
    "MX", // México
    "ES", // España
    "AR", // Argentina
    "CL", // Chile
    "CO", // Colombia
    "PE", // Perú
    "VE", // Venezuela
    "EC", // Ecuador
    "GT", // Guatemala
    "CU", // Cuba
    "DO", // República Dominicana
    "BO", // Bolivia
    "HN", // Honduras
    "PY", // Paraguay
    "SV", // El Salvador
    "NI", // Nicaragua
    "CR", // Costa Rica
    "PA", // Panamá
    "UY", // Uruguay
    "GQ", // Guinea Ecuatorial
  ];

  // Determinar el idioma basado en el país
  useEffect(() => {
    const countryCode = getCountry();
    const defaultLanguage = spanishSpeakingCountries.includes(countryCode)
      ? "es"
      : "en";
    setLanguage(defaultLanguage);
    setIsLoading(false);
  }, []);

  // Lógica para mostrar el modal
  useEffect(() => {
    if (isLoading) return; // Esperar a que se cargue el país

    const savedLang = localStorage.getItem("language");
    const savedTimestamp = localStorage.getItem("language_timestamp");
    const now = Date.now();

    if (
      !savedLang ||
      !savedTimestamp ||
      now - savedTimestamp > EXPIRATION_TIME
    ) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
      document.documentElement.style.position = "fixed";
    } else {
      setLanguage(savedLang);
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.position = "";
    };
  }, [isLoading]);

  const selectLanguage = (lang) => {
    const now = Date.now();
    localStorage.setItem("language", lang);
    localStorage.setItem("language_timestamp", now);
    setLanguage(lang);
    closeModal();
    window.location.pathname = lang === "en" ? "/en" : "/";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
    document.documentElement.style.position = "";
  };

  if (!isOpen || isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">
            {translations[language].title}
          </h2>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-gray-100 rounded-full transition-all
            hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Close"
          >
            <HiX className="w-7 h-7 text-gray-600 hover:text-gray-700 transition-colors" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 gap-3">
          <LanguageButton
            lang="en"
            label={translations[language].languages.en}
            selected={language === "en"}
            onSelect={selectLanguage}
            currentLanguage={language}
          />
          <LanguageButton
            lang="es"
            label={translations[language].languages.es}
            selected={language === "es"}
            onSelect={selectLanguage}
            currentLanguage={language}
          />
        </div>

        <div className="p-4 bg-gray-50 text-center text-sm text-gray-500">
          {translations[language].saveMessage}
        </div>
      </div>
    </div>
  );
};

const LanguageButton = ({
  lang,
  label,
  selected,
  onSelect,
  currentLanguage,
}) => {
  return (
    <button
      onClick={() => onSelect(lang)}
      className={`group relative flex w-full items-center justify-between p-5 rounded-xl border-2 transition-all
        duration-200 ${
          selected
            ? "border-blue-500 bg-blue-50/50 hover:bg-blue-50"
            : "border-gray-200 hover:border-blue-300 hover:bg-gray-50/50"
        }
        hover:scale-[1.02] active:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-300`}
      aria-selected={selected}
    >
      <div className="flex items-center space-x-3">
        <span
          className={`text-lg font-semibold ${
            selected ? "text-blue-700" : "text-gray-700"
          }`}
        >
          {label}
        </span>
      </div>

      {selected && (
        <div className="flex items-center space-x-2">
          <HiCheck className="w-5 h-5 text-blue-500 animate-in fade-in" />
          <span className="h-3 w-3 bg-blue-500 rounded-full animate-pulse" />
        </div>
      )}

      {!selected && (
        <div className="absolute inset-0 flex items-center justify-end pr-4">
          <span className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            {translations[currentLanguage].select}
          </span>
        </div>
      )}
    </button>
  );
};

export default LanguageModal;
