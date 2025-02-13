import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLangFromUrl, useTranslations } from "src/i18n/utils";

function Navbar({ URL }) {
  const lang = getLangFromUrl(URL);
  const t = useTranslations(lang);

  const [activeLink, setActiveLink] = useState("");
  const [textClass, setTextClass] = useState("text-white");
  const [bgClass, setBgClass] = useState("bg-transparent");
  const [border, setBorder] = useState("border-transparent");
  const [logoSrc, setLogoSrc] = useState("/logo.webp");
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();
  const navItems = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#portfolio", label: t("nav.portfolio") },
    { href: "#service", label: t("nav.service") },
    { href: "#team", label: t("nav.team") },
    // { href: "#testimonial", label: "Testimonio" },
    // { href: "#blog", label: "Blog" },
    { href: "#contact", label: t("nav.contact") },
  ];

  const [language, setLanguage] = useState("es");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLanguage(window.location.pathname.startsWith("/en") ? "en" : "es");
    }
  }, []);

  const toggleLanguage = () => {
    if (typeof window !== "undefined") {
      const newPath = language === "en" ? "/" : "/en/";
      window.location.pathname = newPath;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 400) {
        setTextClass("text-black");
        setBgClass("bg-white");
        setBorder("border-gray-300");
        setLogoSrc("/LogoNav.webp");
      } else {
        setTextClass("text-white");
        setBgClass("bg-transparent");
        setBorder("border-transparent");
        setLogoSrc(""); // No mostrar ninguna imagen
      }

      // Actualizar el enlace activo
      const sections = document.querySelectorAll("section");
      let foundActiveLink = false;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          !foundActiveLink &&
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          const id = section.getAttribute("id");
          if (id) {
            setActiveLink(`#${id}`);
            foundActiveLink = true;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar una vez al montar para establecer el estado inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed flex h-20 md:h-16 w-full items-center justify-between border ${border} z-40 ${bgClass}`}
    >
      <div className="md:pl-14 pl-4">
        {logoSrc && <img src={logoSrc} alt="logo" title="logo" />}{" "}
        {/* Renderizar solo si logoSrc no está vacío */}
      </div>
      <div className="pr-8 flex md:space-x-4">
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 ${textClass}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className={`transition-colors ${textClass} duration-300 hover:text-blue-400 font-semibold ${
                activeLink === item.href ? "text-blue-500 font-bold" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className={`px-4 py-1 rounded-lg transition-colors duration-300 font-semibold ${
              language === "en"
                ? "bg-blue-600 text-white"
                : "bg-blue-600 text-white"
            }`}
          >
            {language === "en" ? "Español" : "English"}
          </button>
        </div>
      </div>
      <AnimatePresence mode="popLayout">
        {menuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 border border-gray-300"
          >
            <div className="flex flex-col p-4 space-y-4">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-black">
                  Ecommetrica
                </h1>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="self-end mb-1"
                >
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  className={`block py-2 text-black hover:bg-gray-200 ${
                    activeLink === item.href ? "text-blue-500 font-bold" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                onClick={() => (window.location.pathname = "/")}
                className={`px-0 py-0 rounded-lg transition-colors duration-300 cursor-pointer ${
                  URL.pathname === "/"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Español
              </a>
              <a
                onClick={() => (window.location.pathname = "/en")}
                className={`px-0 py-0 rounded-lg transition-colors duration-300 cursor-pointer ${
                  URL.pathname === "/en/"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                English
              </a>
              {/* <button className="block w-full py-2 text-white bg-black">
                
              </button> */}
              <footer className="text-gray-500 absolute bottom-10">
                <h1>&copy; {year} Ecommetrica</h1>
              </footer>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
