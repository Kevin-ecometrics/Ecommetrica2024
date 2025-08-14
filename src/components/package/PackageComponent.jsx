import { useState, useEffect } from "react";

const translations = {
  en: {
    selectPlan: "Get This Plan",
    includedServices: "Included Services",
    mainFeatures: "Key Features",
    availableAddons: "Extra Services",
    quantity: "Quantity",
    orderSummary: "Order Summary",
    total: "Total",
    continueToPayment: "Generate Service Ticket",
    otherPackages: "Explore Other Plans",
    included: "Included",
    notIncluded: "Not Included",
    generateTicket: "Generate Service Ticket",
    ticketGenerated: "Ticket Generated!",
    downloadTicket: "Download Ticket",
    popularBadge: "Most Popular",
    includes: "Includes",
    duration: "Duration",
  },
  es: {
    selectPlan: "Seleccionar Plan",
    includedServices: "Servicios Incluidos",
    mainFeatures: "Características Principales",
    availableAddons: "Servicios Adicionales",
    quantity: "Cantidad",
    orderSummary: "Resumen del Pedido",
    total: "Total",
    continueToPayment: "Generar Ticket de Servicio",
    otherPackages: "Explorar Otros Planes",
    included: "Incluido",
    notIncluded: "No Incluido",
    generateTicket: "Generar Ticket de Servicio",
    ticketGenerated: "¡Ticket Generado!",
    downloadTicket: "Descargar Ticket",
    popularBadge: "Más Popular",
    includes: "Incluye",
    duration: "Duración",
  },
};

const packageRoutes = {
  en: [
    { id: "Initial-Plan", name: "Starter" },
    { id: "Pro-Plan", name: "Professional", popular: true },
    { id: "Business", name: "Business" },
    { id: "Custom", name: "Enterprise" },
  ],
  es: [
    { id: "Plan-Inicial", name: "Plan Inicial" },
    { id: "Plan-Pro", name: "Plan Pro", popular: true },
    { id: "Empresa", name: "Empresa" },
    { id: "Personalizado", name: "Personalizado" },
  ],
};

// Datos completos de los paquetes
const packagesData = {
  // Paquetes en inglés
  "Initial-Plan": {
    title: "Starter Plan",
    description: "For newcomers",
    price: 675,
    duration: "3 months",
    includes: "Basic Package",
    includedServices: [
      "Basic Website - Landing page in React/Astro or Shopify template",
      "Initial SEO - Basic search engine optimization",
      "Social Media Setup - Creation and optimization of main social profiles",
      "Google Analytics & Facebook Pixel - Traffic analysis tools setup",
    ],
    features: [
      "1 month technical support",
      "Basic documentation",
      "2 revisions included",
      "Email support",
    ],
  },
  "Pro-Plan": {
    title: "Professional Plan",
    description: "For small businesses and entrepreneurs",
    price: 995,
    duration: "4 months",
    includes: "Includes Basic Package plus:",
    includedServices: [
      "Ecommerce with Shopify - Professional store setup",
      "Advanced SEO - Technical optimization and content strategy",
      "Advanced Website - React/Astro landing page with advanced development",
      "Posts & Reels Design - Optimized visual content for social media",
    ],
    features: [
      "3 months technical support",
      "Comprehensive documentation",
      "4 revisions included",
      "Priority email support",
    ],
    popular: true,
  },
  Business: {
    title: "Business Plan",
    description: "For small businesses with ambitions",
    price: 1185,
    duration: "6 months",
    includes: "Includes Professional Package plus:",
    includedServices: [
      "Custom Web Development - Tailored React/Astro website",
      "Social Media Strategy - Monthly content planning and analytics",
      "Digital Advertising - Google/Facebook/Instagram ads with advanced targeting",
      "Branding & Graphic Design - Visual identity in Figma/Photoshop/Illustrator",
    ],
    features: [
      "6 months premium support",
      "Premium documentation",
      "6 revisions included",
      "24/7 chat support",
    ],
  },
  Custom: {
    title: "Enterprise Plan",
    description: "For large companies and corporations",
    price: 1555,
    duration: "8 months",
    includes: "Includes Business Package plus:",
    includedServices: [
      "Strategic Consulting - Personalized digital expansion advice",
      "Marketing Automation - Omnichannel positioning strategies",
      "Audiovisual Production - Professional video recording and editing",
      "App Development - Custom web/mobile apps for internal processes",
    ],
    features: [
      "12 months VIP support",
      "Custom documentation",
      "Unlimited revisions",
      "Dedicated account manager",
    ],
  },
  // Paquetes en español
  "Plan-Inicial": {
    title: "Plan Inicial",
    description: "Para los recién llegados",
    price: 675,
    duration: "3 meses",
    includes: "Paquete Básico",
    includedServices: [
      "Sitio Web Básico - Landing page en React/Astro o template en Shopify",
      "SEO Inicial - Optimización básica en motores de búsqueda",
      "Configuración de Redes Sociales - Creación y optimización de perfiles principales",
      "Google Analytics & Facebook Pixel - Configuración de herramientas de análisis",
    ],
    features: [
      "1 mes de soporte técnico",
      "Documentación básica",
      "2 revisiones incluidas",
      "Soporte por email",
    ],
  },
  "Plan-Pro": {
    title: "Plan Pro",
    description: "Para pequeñas empresas y emprendedores",
    price: 995,
    duration: "4 meses",
    includes: "Incluye Paquete Básico más:",
    includedServices: [
      "Ecommerce con Shopify - Configuración de tienda con diseño profesional",
      "SEO Avanzado - Optimización técnica y estrategia de contenido",
      "Sitio Web Avanzado - Landing page en React/Astro con desarrollo avanzado",
      "Diseño de Posts & Reels - Contenido visual optimizado para redes",
    ],
    features: [
      "3 meses de soporte técnico",
      "Documentación completa",
      "4 revisiones incluidas",
      "Soporte prioritario por email",
    ],
    popular: true,
  },
  Empresa: {
    title: "Empresa",
    description: "Para empresas pequeñas con ambiciones",
    price: 1185,
    duration: "6 meses",
    includes: "Incluye Paquete Pro más:",
    includedServices: [
      "Desarrollo Web Personalizado - Sitio web a medida en React/Astro",
      "Estrategia en Redes Sociales - Gestión de contenido con planificación mensual",
      "Publicidad Digital - Campañas en Google Ads, Facebook e Instagram",
      "Branding & Diseño Gráfico - Identidad visual en Figma, Photoshop e Illustrator",
    ],
    features: [
      "6 meses de soporte premium",
      "Documentación premium",
      "6 revisiones incluidas",
      "Soporte por chat 24/7",
    ],
  },
  Personalizado: {
    title: "Personalizado",
    description: "Para empresas grandes y corporativos",
    price: 1555,
    duration: "8 meses",
    includes: "Incluye Paquete Empresa más:",
    includedServices: [
      "Consultoría Estratégica - Asesoramiento para expansión digital",
      "Automatización de Marketing - Estrategias omnicanal",
      "Producción Audiovisual - Videograbación y edición profesional",
      "Desarrollo de Apps - Aplicaciones web/móviles personalizadas",
    ],
    features: [
      "12 meses de soporte VIP",
      "Documentación personalizada",
      "Revisiones ilimitadas",
      "Gestor de cuenta dedicado",
    ],
  },
};

// Categorías de servicios adicionales
const addonCategories = [
  {
    id: "design",
    name: { en: "Design", es: "Diseño" },
    items: [
      {
        id: "premium-design",
        name: { en: "Premium Design", es: "Diseño Premium" },
        price: 150,
        description: {
          en: "Enhanced visual design package with custom graphics",
          es: "Paquete de diseño visual mejorado con gráficos personalizados",
        },
      },
      {
        id: "custom-illustrations",
        name: {
          en: "Custom Illustrations",
          es: "Ilustraciones Personalizadas",
        },
        price: 200,
        description: {
          en: "5 custom illustrations for your website",
          es: "5 ilustraciones personalizadas para tu sitio web",
        },
      },
    ],
  },
  {
    id: "development",
    name: { en: "Development", es: "Desarrollo" },
    items: [
      {
        id: "extra-page",
        name: { en: "Additional Page", es: "Página Adicional" },
        price: 75,
        description: {
          en: "Add one more page to your website",
          es: "Añadir una página más a tu sitio web",
        },
      },
      {
        id: "contact-form",
        name: { en: "Contact Form", es: "Formulario de Contacto" },
        price: 100,
        description: {
          en: "Integrated contact form with email notifications",
          es: "Formulario de contacto con notificaciones por email",
        },
      },
    ],
  },
  {
    id: "seo",
    name: { en: "SEO", es: "SEO" },
    items: [
      {
        id: "advanced-seo",
        name: { en: "Advanced SEO", es: "SEO Avanzado" },
        price: 300,
        description: {
          en: "Comprehensive SEO strategy for better rankings",
          es: "Estrategia SEO integral para mejores rankings",
        },
      },
      {
        id: "content-optimization",
        name: { en: "Content Optimization", es: "Optimización de Contenido" },
        price: 250,
        description: {
          en: "Optimize your website content for search engines",
          es: "Optimiza el contenido de tu sitio web para motores de búsqueda",
        },
      },
    ],
  },
  {
    id: "marketing",
    name: { en: "Marketing", es: "Marketing" },
    items: [
      {
        id: "email-campaign",
        name: { en: "Email Campaign", es: "Campaña de Email" },
        price: 180,
        description: {
          en: "Create and manage email marketing campaigns",
          es: "Crear y gestionar campañas de email marketing",
        },
      },
      {
        id: "social-media-ads",
        name: { en: "Social Media Ads", es: "Anuncios en Redes Sociales" },
        price: 220,
        description: {
          en: "Run targeted ads on social media platforms",
          es: "Ejecutar anuncios dirigidos en plataformas de redes sociales",
        },
      },
    ],
  },
  {
    id: "analytics",
    name: { en: "Analytics", es: "Analítica" },
    items: [
      {
        id: "traffic-analysis",
        name: { en: "Traffic Analysis", es: "Análisis de Tráfico" },
        price: 120,
        description: {
          en: "Detailed analysis of website traffic and user behavior",
          es: "Análisis detallado del tráfico del sitio web y el comportamiento del usuario",
        },
      },
      {
        id: "conversion-tracking",
        name: { en: "Conversion Tracking", es: "Seguimiento de Conversiones" },
        price: 150,
        description: {
          en: "Track and optimize conversion rates",
          es: "Seguimiento y optimización de tasas de conversión",
        },
      },
    ],
  },
];

export default function PackageComponent({
  packageData,
  selectedPackage,
  lang,
}) {
  const [selectedAddons, setSelectedAddons] = useState({});
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [ticketData, setTicketData] = useState(null);
  const [currentTotal, setCurrentTotal] = useState(0);
  const t = translations[lang] || translations.en;
  const packages = packageRoutes[lang];

  // Obtener datos del paquete actual
  const currentPackageData = packagesData[selectedPackage] || {};

  // Calcular el total inicial
  useEffect(() => {
    setCurrentTotal(currentPackageData.price || 0);
  }, [currentPackageData]);

  // Actualizar el total cuando cambian los addons
  useEffect(() => {
    const addonsTotal = Object.entries(selectedAddons)
      .filter(([_, selected]) => selected)
      .reduce((sum, [id]) => {
        // Encontrar el addon seleccionado
        let addon;
        for (const category of addonCategories) {
          const found = category.items.find((item) => item.id === id);
          if (found) {
            addon = found;
            break;
          }
        }
        return sum + (addon?.price || 0); // Solo 1 unidad por servicio
      }, 0);

    setCurrentTotal((currentPackageData.price || 0) + addonsTotal);
  }, [selectedAddons, currentPackageData.price]);

  const toggleAddon = (addonId) => {
    setSelectedAddons((prev) => ({
      ...prev,
      [addonId]: !prev[addonId],
    }));
  };

  const generateTicket = () => {
    const selectedItems = [
      {
        name: currentPackageData.title,
        price: currentPackageData.price,
        quantity: 1,
      },
      ...Object.entries(selectedAddons)
        .filter(([_, selected]) => selected)
        .map(([id]) => {
          // Encontrar el addon seleccionado
          let addon;
          for (const category of addonCategories) {
            const found = category.items.find((item) => item.id === id);
            if (found) {
              addon = found;
              break;
            }
          }
          return {
            name: lang === "es" ? addon.name.es : addon.name.en,
            price: addon.price,
            quantity: 1, // Solo 1 unidad por servicio
          };
        }),
    ];

    const ticket = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      package: currentPackageData.title,
      items: selectedItems,
      subtotal: currentPackageData.price,
      addonsTotal: currentTotal - currentPackageData.price,
      total: currentTotal,
      ticketNumber: `TKT-${Math.floor(100000 + Math.random() * 900000)}`,
    };

    setTicketData(ticket);
    setTicketGenerated(true);

    // Simular generación de ticket
    console.log("Ticket details:", ticket);
    alert(
      `${t.ticketGenerated}\nTicket #: ${ticket.ticketNumber}\nTotal: $${ticket.total}`
    );
  };

  const downloadTicket = () => {
    if (!ticketData) return;

    const ticketContent = `
      ==============================
      ${lang === "es" ? "TICKET DE SERVICIO" : "SERVICE TICKET"} #${
      ticketData.ticketNumber
    }
      ==============================
      ${lang === "es" ? "Fecha" : "Date"}: ${ticketData.date} ${ticketData.time}
      ${lang === "es" ? "Paquete" : "Package"}: ${ticketData.package}
      ------------------------------
      ${lang === "es" ? "ITEMS" : "ITEMS"}:
      - ${ticketData.package} x1: $${ticketData.subtotal}
      ${ticketData.items
        .slice(1)
        .map((item) => `- ${item.name} x1: $${item.price}`)
        .join("\n      ")}
      ------------------------------
      ${lang === "es" ? "SUBTOTAL" : "SUBTOTAL"}: $${ticketData.subtotal}
      ${lang === "es" ? "SERVICIOS ADICIONALES" : "ADDITIONAL SERVICES"}: $${
      ticketData.addonsTotal
    }
      ${lang === "es" ? "TOTAL" : "TOTAL"}: $${ticketData.total}
      ==============================
      ${
        lang === "es"
          ? "¡Gracias por su preferencia!"
          : "Thank you for your business!"
      }
    `;

    console.log(ticketContent);
    alert(`${t.downloadTicket}\n\n${ticketContent}`);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Package selector cards */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {t.otherPackages}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((pkg) => {
            const pkgData = packagesData[pkg.id];
            return (
              <a
                key={pkg.id}
                href={`/packages/${pkg.id}`}
                className={`block rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg relative ${
                  selectedPackage === pkg.id
                    ? "ring-2 ring-[#c2155C] transform hover:scale-105"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[#c2155C] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    {t.popularBadge}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{pkgData.description}</p>
                  <div className="mt-4">
                    <div className="text-2xl font-bold text-[#c2155C]">
                      ${pkgData.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      /{pkgData.duration}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-[#c2155C]">
                      {lang === "es" ? "Ver detalles →" : "View details →"}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Main package card */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Package header */}
        <div className="bg-gradient-to-r from-[#c2155C] to-[#861453] text-white p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              {currentPackageData.popular && (
                <span className="bg-white text-[#c2155C] px-3 py-1 rounded-full text-sm font-bold mb-2 inline-block">
                  {t.popularBadge}
                </span>
              )}
              <h1 className="text-3xl font-bold">{currentPackageData.title}</h1>
              <p className="text-xl mt-2">{currentPackageData.description}</p>
              <div className="mt-4">
                <span className="font-medium">{t.includes}:</span>{" "}
                <span>{currentPackageData.includes}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-4xl font-bold">
                ${currentPackageData.price}
              </div>
              <div className="text-lg">
                {lang === "es" ? "por" : "for"} {currentPackageData.duration}
              </div>
            </div>
          </div>
        </div>

        {/* Package content */}
        <div className="p-8">
          {/* Included services */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
              {t.includedServices}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPackageData.includedServices?.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <div className="flex items-start">
                    <div className="bg-[#c2155C] p-1 rounded-full mr-3 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key features */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
              {t.mainFeatures}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPackageData.features?.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <div className="flex items-start">
                    <div className="bg-[#c2155C] p-1 rounded-full mr-3 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Extra services */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
              {t.availableAddons}
            </h2>
            {addonCategories.map((category) => (
              <div key={category.id} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#c2155C]">
                  {lang === "es" ? category.name.es : category.name.en}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((addon) => (
                    <div
                      key={addon.id}
                      className={`p-4 rounded-lg border transition-all ${
                        selectedAddons[addon.id]
                          ? "border-[#c2155C] bg-[#c2155C]/10"
                          : "border-gray-200 hover:border-[#c2155C]/50"
                      }`}
                    >
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id={`addon-${addon.id}`}
                          checked={!!selectedAddons[addon.id]}
                          onChange={() => toggleAddon(addon.id)}
                          className="mt-1 mr-3 h-5 w-5 text-[#c2155C] rounded focus:ring-[#c2155C]"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <label
                              htmlFor={`addon-${addon.id}`}
                              className="font-medium text-gray-800"
                            >
                              {lang === "es" ? addon.name.es : addon.name.en}
                            </label>
                            <span className="font-bold text-[#c2155C]">
                              +${addon.price}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {lang === "es"
                              ? addon.description.es
                              : addon.description.en}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Order summary */}
          <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {t.orderSummary}
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="font-medium">{currentPackageData.title}</span>
                <span className="font-semibold">
                  ${currentPackageData.price}
                </span>
              </div>

              {Object.entries(selectedAddons)
                .filter(([_, selected]) => selected)
                .map(([id]) => {
                  // Encontrar el addon seleccionado
                  let addon;
                  for (const category of addonCategories) {
                    const found = category.items.find((item) => item.id === id);
                    if (found) {
                      addon = found;
                      break;
                    }
                  }
                  return (
                    <div
                      key={id}
                      className="flex justify-between items-center p-3 bg-white rounded-lg"
                    >
                      <span className="text-gray-600">
                        {lang === "es" ? addon.name.es : addon.name.en}
                      </span>
                      <span className="font-medium">${addon.price}</span>
                    </div>
                  );
                })}

              <div className="border-t pt-4 mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">{t.total}</span>
                <span className="text-2xl font-bold text-[#c2155C]">
                  ${currentTotal}
                </span>
              </div>
            </div>

            {ticketGenerated ? (
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-green-50 text-green-800 rounded-lg text-center">
                  <p className="font-bold">{t.ticketGenerated}</p>
                  <p className="text-sm">
                    {lang === "es" ? "Número de ticket" : "Ticket #"}:{" "}
                    {ticketData?.ticketNumber}
                  </p>
                  <p className="text-sm mt-1">
                    {lang === "es" ? "Total" : "Total"}: ${ticketData?.total}
                  </p>
                </div>
                <button
                  onClick={downloadTicket}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
                >
                  {t.downloadTicket}
                </button>
                <button
                  onClick={() => {
                    setTicketGenerated(false);
                    setSelectedAddons({});
                  }}
                  className="w-full mt-2 bg-gray-200 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                >
                  {lang === "es" ? "Hacer otro pedido" : "Make another order"}
                </button>
              </div>
            ) : (
              <button
                onClick={generateTicket}
                className="w-full mt-6 bg-[#c2155C] text-white py-3 rounded-lg font-bold hover:bg-[#861453] transition-colors"
              >
                {t.generateTicket}
              </button>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
