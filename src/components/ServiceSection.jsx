import React, { useState } from "react";
import { getLangFromUrl, useTranslations } from "src/i18n/utils";
import { motion, AnimatePresence } from "framer-motion";

function ServiceSection({ services, URL }) {
  const lang = getLangFromUrl(URL);
  const t = useTranslations(lang);
  const [selectedService, setSelectedService] = useState(null);

  const getIcon = (service) => {
    switch (service.name.trim()) {
      case t("service.video"):
        return (
          <svg
            className="w-7 h-7 text-[#861453]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        );
      case t("service.brand"):
        return (
          <svg
            className="w-7 h-7 text-[#861453]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        );
      case t("service.writing"):
        return (
          <svg
            className="w-7 h-7 text-[#861453]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        );
      case t("service.web"):
        return (
          <svg
            className="w-7 h-7 text-[#861453]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        );
      case t("service.webapp"):
        return (
          <svg
            className="w-7 h-7 text-[#861453]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
        );
      case t("service.desing"):
        return (
          <svg
            className="w-7 h-7 text-[#861453]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>
        );
      case t("service.ecommerce"):
        return (
          <svg
            className="w-7 h-7 text-[#861453]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        );
      case t("service.planning"):
        return (
          <svg
            className="w-7 h-7 text-[#861453]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-7 h-7 text-[#861453]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
            />
          </svg>
        );
    }
  };

  return (
    <div>
      <div>
        <section
          className="md:p-16 px-8 md:mb-32 bg-custom-bg relative"
          id="service"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 p-4">
              <h1 className="text-[#861453] text-2xl font-bold mb-4">
                {t("service.readyTitle")}
              </h1>
              <h2 className="text-5xl text-[#515151] font-bold mb-8">
                {t("service.ourServices")}
              </h2>
              <p className="mb-8">{t("service.description")}</p>
            </div>
            {services.map((service, index) => (
              <div
                className="group mb-8 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden transform hover:-translate-y-1.5 border-2 border-transparent  cursor-pointer service-card"
                key={index}
                onClick={() => {
                  setSelectedService(service);
                }}
              >
                <section className="flex items-center justify-start">
                  <div className="w-14 h-14 items-center  rounded-xl">
                    {getIcon(service)}
                  </div>

                  <h2 className="text-3xl mb-6 font-bold text-gray-900 tracking-tight">
                    {service.name}
                  </h2>
                </section>

                <p className="text-gray-600 text-lg leading-relaxed mb-6 px-14">
                  {service.description}
                </p>

                {/* Separador con gradiente personalizado */}
                <div className="w-16 h-1 bg-gradient-to-r from-[#861453] via-purple-900 to-[#1a0933] mb-6 rounded-full ml-14" />
              </div>
            ))}

            <div className="col-span-1 p-4 text-center font-bold">
              <h1 className="text-2xl font-bold mb-4">
                {t("service.anyQuestions")}
              </h1>
              <h2 className="text-2xl mb-4">{t("service.loveToAnswer")}</h2>
              <button className="px-4 py-2 text-black border border-[#861453] rounded hover:bg-[#861453] hover:text-white">
                <a className="flex items-center gap-4" href="#contact">
                  <h1>{t("service.ask")}</h1>
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5427 1.11621H2.45808C1.59779 1.11621 0.900391 1.71876 0.900391 2.46204V10.537C0.900391 11.2803 1.59779 11.8829 2.45808 11.8829H15.5427C16.403 11.8829 17.1004 11.2803 17.1004 10.537V2.46204C17.1004 1.71876 16.403 1.11621 15.5427 1.11621Z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3.6377 3.8877L8.7002 8.04395L13.7627 3.8877"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </section>
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full"
              >
                <img src="/bannerService.png" alt="test" />
                <h2 className="text-3xl font-bold mt-4">
                  {selectedService.name}
                </h2>
                <p className="mt-4">{selectedService.descriptionModal}</p>
                <button
                  className="mt-6 px-4 py-2 bg-[#861453] hover:bg-opacity-80 text-white rounded"
                  onClick={() => setSelectedService(null)}
                >
                  Cerrar
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute w-96 h-52 left-[-100px] bg-[#861453] animate-div hidden xl:block"></div>
      </div>
    </div>
  );
}

export default ServiceSection;
