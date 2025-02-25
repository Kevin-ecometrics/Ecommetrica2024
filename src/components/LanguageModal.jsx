import { useEffect, useState } from "react";

const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

const translations = {
  en: {
    question: "How would you like to read our website?",
    welcome: "Welcome to",
    hoverText: "In English, please",
  },
  es: {
    question: "¿Cómo te gustaría leer nuestra web?",
    welcome: "Bienvenido a",
    hoverText: "¡En Español, por favor!",
  },
};

const LanguageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("es");
  const [isLoading, setIsLoading] = useState(true);
  const [showTransitionScreen, setShowTransitionScreen] = useState(false);
  const [hoveredLang, setHoveredLang] = useState(null);

  useEffect(() => {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    const countryCode = locale.split("-")[1] || "US";
    const spanishSpeakingCountries = [
      "MX",
      "ES",
      "AR",
      "CL",
      "CO",
      "PE",
      "VE",
      "EC",
      "GT",
      "CU",
      "DO",
      "BO",
      "HN",
      "PY",
      "SV",
      "NI",
      "CR",
      "PA",
      "UY",
      "GQ",
    ];
    const defaultLanguage = spanishSpeakingCountries.includes(countryCode)
      ? "es"
      : "en";
    setLanguage(defaultLanguage);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;

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
    } else {
      setLanguage(savedLang);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  const selectLanguage = (lang) => {
    setShowTransitionScreen(true);

    setTimeout(() => {
      const now = Date.now();
      localStorage.setItem("language", lang);
      localStorage.setItem("language_timestamp", now);
      setLanguage(lang);
      setIsOpen(false);
      document.body.style.overflow = "";
      window.location.pathname = lang === "en" ? "/en/" : "/";
    }, 1500);
  };

  if (isLoading) return null;

  return (
    <>
      {showTransitionScreen ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[url('/WelcomeBackground.png')] bg-cover bg-center text-black">
          <p className="text-4xl font-bold mb-8">
            {translations[language].welcome}
          </p>
          <img src="/WelcomeLogo.png" alt="Logo de Bienvenida" title="Logo" />
        </div>
      ) : isOpen ? (
        <div className="fixed inset-0 z-50 bg-[url('/LanguageBackground.png')] bg-cover flex flex-col items-center justify-center p-4 text-white">
          <p className="text-3xl font-semibold text-center">
            {translations[language].question}
          </p>
          <div className="flex space-x-12 mt-12 relative">
            <div className="flex flex-col items-center">
              <button
                onMouseEnter={() => setHoveredLang("es")}
                onMouseLeave={() => setHoveredLang(null)}
                onClick={() => selectLanguage("es")}
              >
                <img src="/Bandera_MX.png" alt="Español" title="Español" />
              </button>
              {hoveredLang === "es" && (
                <p className="mt-2 text-lg">{translations.es.hoverText}</p>
              )}
            </div>
            <div className="flex flex-col items-center">
              <button
                onMouseEnter={() => setHoveredLang("en")}
                onMouseLeave={() => setHoveredLang(null)}
                onClick={() => selectLanguage("en")}
              >
                <img src="/Bandera_US.png" alt="Inglés" title="Inglés" />
              </button>
              {hoveredLang === "en" && (
                <p className="mt-2 text-lg">{translations.en.hoverText}</p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default LanguageModal;
