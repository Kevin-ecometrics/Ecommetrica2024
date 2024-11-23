import React, { useEffect } from "react";
import { motion } from "framer-motion";

const OldWebsiteModal = ({ isOpen, onClose, oldImage }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-overlay"
      onClick={handleClickOutside}
    >
      <motion.div
        className="bg-white p-8 rounded-lg w-[400px] md:w-[500px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-y-auto" style={{ maxHeight: "400px" }}>
          <img
            src={oldImage}
            alt="Old Website"
            className="w-full object-cover mb-4"
          />
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Cerrar
          </button>
          <a
            href={oldImage}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Ver imagen
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default OldWebsiteModal;
