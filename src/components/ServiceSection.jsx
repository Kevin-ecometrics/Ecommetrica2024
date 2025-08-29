import React, { useState, useCallback, useMemo } from "react";
import { getLangFromUrl, useTranslations } from "src/i18n/utils";
import { motion, AnimatePresence } from "framer-motion";

// Componente separado para los iconos
const ServiceIcon = ({ serviceName, t }) => {
  const iconProps = {
    className: "w-7 h-7 text-[#861453]",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
  };

  const iconMap = {
    [t("service.video")]: (
      <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    ),
    [t("service.brand")]: (
      <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    ),
    [t("service.writing")]: (
      <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    ),
    [t("service.web")]: (
      <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    ),
    [t("service.webapp")]: (
      <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    ),
    [t("service.desing")]: (
      <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
    ),
    [t("service.ecommerce")]: (
      <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    ),
    [t("service.planning")]: (
      <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    ),
    default: (
      <path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
    ),
  };

  const pathElement = iconMap[serviceName.trim()] || iconMap.default;

  return (
    <svg {...iconProps} aria-hidden="true">
      {pathElement}
    </svg>
  );
};

// Componente para la tarjeta de servicio
const ServiceCard = ({ service, index, onClick, t }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: -6,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      className="group mb-8 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden border-2 border-transparent cursor-pointer service-card focus:outline-none focus:ring-2 focus:ring-[#861453] focus:ring-offset-2"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalles de ${service.name}`}
    >
      {/* Efecto de gradiente animado en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#861453]/5 via-purple-900/5 to-[#1a0933]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      <header className="flex items-center gap-4 relative z-10">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#861453]/10 to-purple-900/10 group-hover:from-[#861453]/20 group-hover:to-purple-900/20 transition-all duration-300">
          <ServiceIcon serviceName={service.name} t={t} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-[#861453] transition-colors duration-300">
          {service.name}
        </h3>
      </header>

      <p className="text-gray-600 text-lg leading-relaxed mt-6 mb-6 relative z-10">
        {service.description}
      </p>

      {/* Separador mejorado */}
      <div className="w-16 h-1 bg-gradient-to-r from-[#861453] via-purple-900 to-[#1a0933] mb-6 rounded-full group-hover:w-20 transition-all duration-300" />

      {/* Indicador visual de interacción */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          className="w-5 h-5 text-[#861453]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </motion.div>
  );
};

// Componente para el modal mejorado
const ServiceModal = ({ service, onClose, t }) => {
  // Manejador de teclado para cerrar modal
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Prevenir scroll del body

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header del modal */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 id="modal-title" className="text-3xl font-bold text-gray-900">
              {service.name}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#861453]"
              aria-label="Cerrar modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Contenido del modal */}
        <div className="p-6">
          {service.image && (
            <div className="relative overflow-hidden rounded-xl mb-6">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 md:h-96 object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}

          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              {service.descriptionModal || service.description}
            </p>
          </div>

          {/* Acciones del modal */}
          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg"
            >
              {t("common.cancel") || "Cancelar"}
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-[#861453] to-purple-900 hover:from-[#861453]/90 hover:to-purple-900/90 text-white rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#861453] focus:ring-offset-2"
            >
              {t("common.close") || "Cerrar"}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

function ServiceSection({ services = [], URL }) {
  const lang = getLangFromUrl(URL);
  const t = useTranslations(lang);
  const [selectedService, setSelectedService] = useState(null);

  // Optimizar el manejo de selección de servicio
  const handleServiceSelect = useCallback((service) => {
    setSelectedService(service);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  // Memoizar el contenido para evitar re-renders innecesarios
  const memoizedServices = useMemo(() => services, [services]);

  // Variantes de animación para el contenedor
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="relative">
      <section
        className="md:p-16 px-8 md:mb-32 bg-custom-bg relative overflow-hidden"
        id="service"
        aria-labelledby="services-heading"
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header Section */}
          <motion.div
            className="col-span-1 p-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1
              id="services-heading"
              className="text-[#861453] text-2xl font-bold mb-4"
            >
              {t("service.readyTitle")}
            </h1>
            <h2 className="text-5xl text-[#515151] font-bold mb-8 leading-tight">
              {t("service.ourServices")}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t("service.description")}
            </p>
          </motion.div>

          {/* Service Cards */}
          {memoizedServices.map((service, index) => (
            <ServiceCard
              key={`${service.name}-${index}`}
              service={service}
              index={index}
              onClick={() => handleServiceSelect(service)}
              t={t}
            />
          ))}

          {/* CTA Section */}
          <motion.div
            className="col-span-1 p-4 text-center font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t("service.anyQuestions")}
            </h3>
            <p className="text-2xl mb-4 text-gray-700">
              {t("service.loveToAnswer")}
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-4 px-4 py-2 text-black border border-[#861453] rounded hover:bg-[#861453] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#861453] focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t("service.ask")}</span>
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M15.5427 1.11621H2.45808C1.59779 1.11621 0.900391 1.71876 0.900391 2.46204V10.537C0.900391 11.2803 1.59779 11.8829 2.45808 11.8829H15.5427C16.403 11.8829 17.1004 11.2803 17.1004 10.537V2.46204C17.1004 1.71876 16.403 1.11621 15.5427 1.11621Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.6377 3.8877L8.7002 8.04395L13.7627 3.8877"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={handleCloseModal}
            t={t}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ServiceSection;
