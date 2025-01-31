export const Phases = [
  {
    id: 1,
    title: "Selecciona tu Plan Base",
    description:
      "Elige el paquete principal que mejor se adapte a tus necesidades",
    type: "package",
  },
  {
    id: 2,
    title: "Servicios Adicionales de Marketing",
    description: "Agrega herramientas extras para potenciar tu estrategia",
    type: "addons",
    services: [
      {
        id: "seo-pro",
        name: "SEO Avanzado",
        month: null,
        price: 500,
        description:
          "Optimización técnica, contenido estratégico y Google My Business",
      },
      {
        id: "social-media",
        name: "Gestión de Redes Sociales",
        month: null,
        price: 800,
        description: "Creación de contenido, post y reels para redes sociales",
      },
      {
        id: "email-marketing",
        name: "Email Marketing",
        month: null,
        price: 400,
        description:
          "Automatización con campañas estratégicas y segmentación avanzada",
      },
      {
        id: "ads",
        name: "Publicidad Digital",
        month: null,
        price: 1000,
        description: "Gestión de campañas en Google Ads y Facebook Ads",
      },
    ],
  },
  {
    id: 3,
    title: "Integraciones Especiales",
    description: "Conecta con otras plataformas y servicios",
    type: "integrations",
    services: [
      {
        id: "crm",
        name: "Integración CRM",
        month: null,
        price: 300,
        description: "Conexión con HubSpot, Salesforce o CRM personalizado",
      },
      {
        id: "payment",
        name: "Pasarelas de Pago",
        month: null,
        price: 200,
        description: "Configuración de Stripe, PayPal o MercadoPago",
      },
      {
        id: "analytics",
        name: "Google Analytics & Tag Manager",
        month: null,
        price: 350,
        description: "Implementación avanzada con seguimiento de eventos",
      },
      {
        id: "automation",
        name: "Automatización de Procesos",
        month: null,
        price: 700,
        description:
          "Flujos de trabajo con IA para remarketing y gestión de clientes",
      },
    ],
  },
  {
    id: 4,
    title: "Personalización Final",
    description: "Toques finales para tu tienda perfecta",
    type: "customization",
    services: [
      {
        id: "design",
        name: "Diseño Gráfico y Branding",
        month: null,
        price: 1000,
        description:
          "Diseño de identidad visual en Figma, Photoshop e Illustrator",
      },
      {
        id: "support",
        name: "Soporte Priority 24/7",
        month: null,
        price: 1500,
        description: "Atención técnica prioritaria y resolución de problemas",
      },
      {
        id: "branding",
        name: "Estrategia de Branding",
        month: null,
        price: 900,
        description: "Desarrollo de imagen de marca y posicionamiento",
      },
      {
        id: "ux-ui",
        name: "Optimización UX/UI",
        month: null,
        price: 1100,
        description:
          "Mejoras en navegación, experiencia de usuario y conversiones",
      },
    ],
  },
];
