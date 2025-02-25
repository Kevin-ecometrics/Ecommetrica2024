import React, { useState, useEffect } from "react";
import Modal from "@components/Modal";
import { getLangFromUrl, useTranslations } from "src/i18n/utils";
import { LiaDownloadSolid } from "react-icons/lia";

function Guia({ URL }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const lang = getLangFromUrl(URL);
  const t = useTranslations(lang);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setPdfUrl("/guia.pdf");
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isFormSubmitted && pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "guia.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsFormSubmitted(false);
    }
  }, [isFormSubmitted, pdfUrl]);

  return (
    <div>
      <a
        onClick={handleOpenModal}
        className="bg-white hover:bg-transparent w-64 hover:border-white hover:border hover:text-white text-black px-6 rounded-lg py-2 font-bold flex gap-2 items-center transition duration-300 ease-in-out mb-16 hover:cursor-pointer"
        id="test"
      >
        {t("guia.buttonText")} {/* Texto del botón traducido */}
        <LiaDownloadSolid />
      </a>
      <Modal
        URL={URL}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Guia;
