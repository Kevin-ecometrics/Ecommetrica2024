import React, { useState, useEffect } from "react";
import Modal from "@components/Modal";

function Guia() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

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
        className="bg-white hover:bg-transparent w-64 hover:border-white hover:border hover:text-white text-black px-6 rounded-lg py-2 font-bold flex gap-2 items-center
       transition duration-300 ease-in-out mb-16 hover:cursor-pointer"
        id="test"
      >
        Guia de e-commerce
        <svg
          width="19"
          height="25"
          viewBox="0 0 19 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3438 7.4375V15.209L13.7188 11.834L14.9121 13.0273L9.5 18.4395L4.08787 13.0273L5.28125 11.834L8.65625 15.209V7.4375H0.851562C0.68373 7.4375 0.522772 7.50417 0.404096 7.62285C0.285421 7.74152 0.21875 7.90248 0.21875 8.07031V23.6797C0.21875 23.8475 0.285421 24.0085 0.404096 24.1272C0.522772 24.2458 0.68373 24.3125 0.851562 24.3125H18.1484C18.3163 24.3125 18.4772 24.2458 18.5959 24.1272C18.7146 24.0085 18.7812 23.8475 18.7812 23.6797V8.07031C18.7812 7.90248 18.7146 7.74152 18.5959 7.62285C18.4772 7.50417 18.3163 7.4375 18.1484 7.4375H10.3438ZM8.65625 0.6875H10.3438V7.4375H8.65625V0.6875Z"
            fill="black"
          ></path>
        </svg>
      </a>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Guia;
