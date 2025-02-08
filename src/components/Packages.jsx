import { useState } from "react";
// import { packages } from "./package/Packages.astro";
import { getLangFromUrl, useTranslations } from "src/i18n/utils";

export default function PackagesPage({ URL }) {
  const lang = getLangFromUrl(URL);
  const t = useTranslations(lang);
  const packages = [
    {
      id: 1,
      name: t("packages.inicial"),
      description: t("packages.inicialdesc"),
      price: 675,
      month: t("packages.inicialmonths"),
      popular: false,
      services: [
        {
          title: t("packages.inicial.service1"),
          description: t("packages.inicial.service1desc"),
        },
        {
          title: t("packages.inicial.service2"),
          description: t("packages.inicial.service2desc"),
        },
        {
          title: t("packages.inicial.service3"),
          description: t("packages.inicial.service3desc"),
        },
        {
          title: t("packages.inicial.service4"),
          description: t("packages.inicial.service4desc"),
        },
      ],
    },
    {
      id: 2,
      name: t("packages.pro"),
      description: t("packages.prodesc"),
      price: 995,
      month: t("packages.promonths"),
      popular: true,
      services: [
        {
          title: t("packages.pro.service1"),
          description: t("packages.pro.service1desc"),
        },
        {
          title: t("packages.pro.service2"),
          description: t("packages.pro.service2desc"),
        },
        {
          title: t("packages.pro.service3"),
          description: t("packages.pro.service3desc"),
        },
        {
          title: t("packages.pro.service4"),
          description: t("packages.pro.service4desc"),
        },
      ],
    },
    {
      id: 3,
      name: t("packages.empresa"),
      description: t("packages.empresadesc"),
      price: 1185,
      month: t("packages.empresamonths"),
      popular: false,
      services: [
        {
          title: t("packages.empresa.service1"),
          description: t("packages.empresa.service1desc"),
        },
        {
          title: t("packages.empresa.service2"),
          description: t("packages.empresa.service2desc"),
        },
        {
          title: t("packages.empresa.service3"),
          description: t("packages.empresa.service3desc"),
        },
        {
          title: t("packages.empresa.service4"),
          description: t("packages.empresa.service4desc"),
        },
      ],
    },
    {
      id: 4,
      name: t("packages.personalizado"),
      description: t("packages.personalizadodesc"),
      price: 1555,
      month: t("packages.personalizadomonths"),
      popular: false,
      services: [
        {
          title: t("packages.personalizado.service1"),
          description: t("packages.personalizado.service1desc"),
        },
        {
          title: t("packages.personalizado.service2"),
          description: t("packages.personalizado.service2desc"),
        },
        {
          title: t("packages.personalizado.service3"),
          description: t("packages.personalizado.service3desc"),
        },
        {
          title: t("packages.personalizado.service4"),
          description: t("packages.personalizado.service4desc"),
        },
      ],
    },
  ];

  const [selectedItems, setSelectedItems] = useState({});

  const handleSelect = (item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item.id]: item,
    }));
  };

  const renderCards = () => {
    return packages.map((item) => (
      <div
        key={item.id}
        onClick={() => handleSelect(item)}
        className={`group relative bg-gradient-to-br from-[#861453] via-purple-900 to-[#1a0933] p-1 rounded-2xl shadow-2xl hover:shadow-[0_10px_40px_rgba(134,20,83,0.3)] transition-all duration-500 cursor-pointer ${
          selectedItems[item.id]
            ? "scale-105 -translate-y-2"
            : "hover:-translate-y-2"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-lg rounded-xl p-8 h-full flex flex-col">
          {item.popular && (
            <div className="absolute top-0 right-4 -translate-y-1/2 bg-gradient-to-r from-[#861453] to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
              {t("packages.popular")}
            </div>
          )}

          <div className="mb-8">
            <h1 className="text-xl font-extrabold bg-gradient-to-r from-[#861453] to-purple-600 bg-clip-text text-transparent mb-4">
              {item.name}
            </h1>
            <p className="text-gray-600 mb-6 text-wrap">{item.description}</p>
          </div>

          {item.services && (
            <div className="mb-8 flex-1">
              <h3 className="text-sm font-semibold text-[#861453] mb-4 uppercase tracking-wide">
                {t("packages.servincl")}
              </h3>
              <ul className="space-y-3">
                {item.services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 text-sm"
                  >
                    <svg
                      className="w-5 h-5 text-[#861453] mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">{service.title}</p>
                      <p className="text-gray-500 text-xs">
                        {service.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto">
            <div className="mb-6">
              <p className="text-4xl font-bold text-gray-900 mb-1">
                <span className="text-2xl align-top">$</span>
                {item.price}
                <span className="text-lg text-gray-500 font-normal">
                  {item.month}
                </span>
              </p>
            </div>
            <a href={t("calendar.api")}>
              <div
                className={`w-full bg-gradient-to-r text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 ${
                  selectedItems[item.id]
                    ? "from-purple-600 to-[#861453] scale-100 shadow-xl"
                    : "from-[#861453] to-purple-600"
                }`}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                {selectedItems[item.id]
                  ? t("packages.selected")
                  : t("packages.select")}
              </div>
            </a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section class="bg-[#F4F4FF] flex p-16 flex-col scroll-mt-20" id="package">
      <h1 class="text-[#861453] text-3xl font-bold  mb-4 text-center">
        {t("packages.paquetes")}
      </h1>
      <h2 class="text-[#861453] font-bold text-3xl md:text-4xl mb-16 text-center">
        {t("packages.ecommerce")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {renderCards()}
      </div>
    </section>
  );
}
