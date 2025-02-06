import React, { useState } from "react";
import { getLangFromUrl, useTranslations } from "src/i18n/utils";

const VCF = ({ member, URL }) => {
  const lang = getLangFromUrl(URL);
  const t = useTranslations(lang);
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadVCF = () => {
    setIsDownloading(true);

    const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:${member.fullName}
N:${member.name}
ORG:E-commetrica
URL:https://ecommetrica.com
TEL;TYPE=WORK,VOICE:6646429633
ADR;TYPE=WORK,PREF:;;8169-306 Ignacio Zaragoza, Zona Centro, Tijuana BC, 22000.
EMAIL;INTERNET;WORK:juanmanuel@e-commetrics.com
NOTE:Somos una consultoría que garantiza una planeación estratégica y segura con soluciones a la medida para tu negocio y comercio en línea
END:VCARD`;

    const blob = new Blob([vcfContent], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${member.name}.vcf`; // Nombre del archivo
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Finaliza el estado de descarga
    setIsDownloading(false);
  };

  return (
    <div>
      <button
        onClick={downloadVCF}
        className="bg-transparent border border-[#861453] font-semibold px-4 py-2 rounded-lg"
        disabled={isDownloading} // Deshabilitar el botón mientras se descarga
      >
        {isDownloading ? t("VCF.title") : t("VCF.subtitle")}
      </button>
    </div>
  );
};

export default VCF;
