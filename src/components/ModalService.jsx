// components/ServiceModal.jsx
import React from "react";

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden transform transition-all p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-all"
          >
            ✕
          </button>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceModal;
