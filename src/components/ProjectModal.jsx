import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ProjectModal = ({ isOpen, onClose, project, onOpenOldWebsite }) => {
  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <motion.div
        className="bg-white p-8 rounded-lg w-[400px] md:w-[800px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={project.img}
          alt={project.nombre}
          className="object-cover mb-4"
        />
        <h2 className="text-lg md:text-2xl font-bold mb-4 text-black">
          {project.nombre}
        </h2>

        <div className="flex justify-between mb-4">
          {project.old && (
            <button
              onClick={onOpenOldWebsite}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Anterior Sitio Web
            </button>
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Ver Sitio Web
          </a>
        </div>
        <p className="text-black">{project.description}</p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
        >
          Cerrar
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
