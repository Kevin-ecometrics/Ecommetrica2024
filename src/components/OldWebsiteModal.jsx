import React from "react";
import { motion } from "framer-motion";

const OldWebsiteModal = ({ isOpen, onClose, oldImage }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="bg-white p-8 rounded-lg w-96"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-y-auto" style={{ maxHeight: "400px" }}>
          <img
            src={oldImage}
            alt="Old Website"
            className="w-full object-cover mb-4"
          />
        </div>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default OldWebsiteModal;
