import React, { useState } from "react";

const VCF = ({ member }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadVCF = () => {
    setIsDownloading(true);

    const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:${member.fullName}
IMG:${member.image}
N:${member.name}
TEL:${member.Phone}
EMAIL:${member.Email}
ADDRESS:${member.Address}
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
        {isDownloading ? "Descargando..." : "Descargar Contacto"}
      </button>
    </div>
  );
};

export default VCF;
