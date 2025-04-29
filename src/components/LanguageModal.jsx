import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

const translations = {
  en: {
    title: "Welcome to",
    subtitle: "Please select your preferred language",
    english: "English",
    spanish: "Spanish",
    continue: "Continue",
    selected: "Selected",
    loading: "Loading...",
  },
  es: {
    title: "Bienvenido a",
    subtitle: "Selecciona tu idioma preferido",
    english: "Inglés",
    spanish: "Español",
    continue: "Continuar",
    selected: "Seleccionado",
    loading: "Cargando...",
  },
};

const LanguageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("es"); // Español por defecto
  const [isLoading, setIsLoading] = useState(true);
  const [showTransitionScreen, setShowTransitionScreen] = useState(false);
  const [hoveredLang, setHoveredLang] = useState(null);
  const [selectedLang, setSelectedLang] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Obtener textos según el idioma actual
  const t = translations[currentLanguage];

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

    // Establecer español como predeterminado independientemente del país
    setCurrentLanguage("es");
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
      // Si hay un idioma guardado, actualizar el estado
      setCurrentLanguage(savedLang);
    }
  }, [isLoading]);

  const selectLanguage = (lang) => {
    setSelectedLang(lang);
    // Cambiar inmediatamente el idioma del modal
    setCurrentLanguage(lang);
  };

  const confirmSelection = () => {
    if (!selectedLang || isTransitioning) return;

    setIsTransitioning(true);
    setShowTransitionScreen(true);

    setTimeout(() => {
      const now = Date.now();
      localStorage.setItem("language", selectedLang);
      localStorage.setItem("language_timestamp", now);

      // Mostrar contenido y ocultar modal (igual que antes)
      const mainContent = document.getElementById("main-content");
      const modalContainer = document.getElementById(
        "language-modal-container"
      );
      if (mainContent) mainContent.classList.remove("hidden-content");
      if (modalContainer) modalContainer.style.display = "none";
      document.body.style.overflow = "";

      // Redirección simplificada solo para rutas raíz
      const currentPath = window.location.pathname;
      const targetPath = selectedLang === "en" ? "/en/" : "/";

      if (
        (selectedLang === "en" && currentPath !== "/en/") ||
        (selectedLang === "es" && currentPath === "/en/")
      ) {
        window.location.pathname = targetPath;
      } else {
        window.location.reload();
      }
    }, 2000);
  };
  if (isLoading)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <p className="text-[#33244C] text-xl">{t.loading}</p>
      </div>
    );

  return (
    <>
      <AnimatePresence>
        {showTransitionScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{
              backgroundImage: "url('/WelcomeBackground.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl font-bold mb-6 text-[#33244C]"
            >
              {t.title}
            </motion.h1>
            <motion.img
              src="/WelcomeLogo.png"
              alt="Logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-8 mx-auto max-h-32"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl text-white/90"
            >
              {t.continue}...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && !showTransitionScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{
              backgroundImage: "url('/LanguageBackground.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              className="w-full max-w-md bg-[#861453]/90 rounded-2xl p-8 border-2 border-white/20 shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-center mb-2 text-white">
                {t.title}
              </h2>
              <p className="text-lg text-center mb-8 text-white/80">
                {t.subtitle}
              </p>

              <div className="mb-8">
                <LanguageOption
                  lang="es"
                  flag="/Bandera_MX.png"
                  label={t.spanish}
                  isSelected={selectedLang === "es"}
                  onSelect={selectLanguage}
                  onHover={setHoveredLang}
                  hoverText={
                    hoveredLang === "es" ? translations.es.spanish : null
                  }
                />

                <LanguageOption
                  lang="en"
                  flag="/Bandera_US.png"
                  label={t.english}
                  isSelected={selectedLang === "en"}
                  onSelect={selectLanguage}
                  onHover={setHoveredLang}
                  hoverText={
                    hoveredLang === "en" ? translations.en.english : null
                  }
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={confirmSelection}
                disabled={!selectedLang || isTransitioning}
                className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-all ${
                  selectedLang
                    ? "bg-white hover:bg-white/90 text-[#861453] shadow-lg"
                    : "bg-white/20 cursor-not-allowed text-white/50 border border-white/20"
                }`}
              >
                {isTransitioning ? (
                  <span className="inline-flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#861453]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t.continue}
                  </span>
                ) : (
                  t.continue
                )}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Componente LanguageOption (sin cambios)
const LanguageOption = ({
  lang,
  flag,
  label,
  isSelected,
  onSelect,
  onHover,
  hoverText,
}) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => onSelect(lang)}
    onMouseEnter={() => onHover(lang)}
    onMouseLeave={() => onHover(null)}
    className={`w-full p-4 mb-4 rounded-xl transition-all duration-300 flex items-center ${
      isSelected
        ? "bg-white/10 border-2 border-white shadow-lg"
        : "bg-transparent border-2 border-white/30 hover:border-white/50"
    }`}
  >
    <img
      src={flag}
      alt={label}
      className="object-cover rounded-md mr-4 shadow-md"
    />
    <div className="text-left">
      <p className="font-semibold text-lg text-white">{label}</p>
      {(isSelected || hoverText) && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="text-sm text-white/80 mt-1"
        >
          {isSelected ? translations[lang].selected : hoverText}
        </motion.p>
      )}
    </div>
    {isSelected && (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="ml-auto w-6 h-6 bg-white rounded-full flex items-center justify-center"
      >
        <svg
          className="w-4 h-4 text-[#861453]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </motion.div>
    )}
  </motion.button>
);

export default LanguageModal;
