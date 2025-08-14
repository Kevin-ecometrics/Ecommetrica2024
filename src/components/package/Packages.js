import { getLangFromUrl, useTranslations } from "src/i18n/utils";

const lang = getLangFromUrl(URL);
const t = useTranslations(lang);

export const packages = [
  {
    id: 1,
    name: t("packages.inicial"),
    description: t("packages.inicialdesc"),
    incluye: t("packages.incluido1"),
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
    incluye: t("packages.incluido1"),
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
    incluye: t("packages.incluido1"),
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
    incluye: t("packages.incluido1"),
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
