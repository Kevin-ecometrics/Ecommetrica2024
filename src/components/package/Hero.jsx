import { useState } from "react";
import { packages } from "@components/package/Packages";
import { Phases } from "@components/package/Phases";

const PricingWizard = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [selectedItems, setSelectedItems] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const handleSelect = (item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [Phases[currentPhase].type]: item,
    }));
  };

  const handleNext = () => {
    if (currentPhase < Phases.length - 1) {
      setCurrentPhase((prev) => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleBack = () => {
    setCurrentPhase((prev) => Math.max(0, prev - 1));
  };

  const calculateTotal = () => {
    return Object.values(selectedItems).reduce(
      (acc, item) => acc + (item?.price || 0),
      0
    );
  };

  // Función para renderizar las cards estilo anterior
  const renderPhaseCards = (items) => {
    return items.map((item) => (
      <div
        key={item.id}
        onClick={() => handleSelect(item)}
        className={`group relative bg-gradient-to-br from-[#861453] via-purple-900 to-[#1a0933] p-1 rounded-2xl shadow-2xl hover:shadow-[0_10px_40px_rgba(134,20,83,0.3)] transition-all duration-500 cursor-pointer ${
          selectedItems[Phases[currentPhase].type]?.id === item.id
            ? "scale-105 -translate-y-2"
            : "hover:-translate-y-2"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-lg rounded-xl p-8 h-full flex flex-col">
          {item.popular && (
            <div className="absolute top-0 right-4 -translate-y-1/2 bg-gradient-to-r from-[#861453] to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
              Más popular
            </div>
          )}

          <div className="mb-8">
            <h1 className="text-xl font-extrabold bg-gradient-to-r from-[#861453] to-purple-600 bg-clip-text text-transparent mb-4">
              {item.name}
            </h1>
            <p className="text-gray-600 mb-6 text-wrap">{item.description}</p>
          </div>

          {item.services && (
            <div className="mb-8 flex-1">
              <h3 className="text-sm font-semibold text-[#861453] mb-4 uppercase tracking-wide">
                Servicios Incluidos:
              </h3>
              <ul className="space-y-3">
                {item.services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 text-sm"
                  >
                    <svg
                      className="w-5 h-5 text-[#861453] mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">{service.title}</p>
                      <p className="text-gray-500 text-xs">
                        {service.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto">
            <div className="mb-6">
              <p className="text-4xl font-bold text-gray-900 mb-1">
                <span className="text-2xl align-top">$</span>
                {item.price}
                <span className="text-lg text-gray-500 font-normal">
                  {item.month}
                </span>
              </p>
              {/* <p className="text-gray-500 text-xs">Facturación anual</p> */}
            </div>

            <div
              className={`w-full bg-gradient-to-r text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 ${
                selectedItems[Phases[currentPhase].type]?.id === item.id
                  ? "from-purple-600 to-[#861453] scale-100 shadow-xl"
                  : "from-[#861453] to-purple-600"
              }`}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {selectedItems[Phases[currentPhase].type]?.id === item.id
                ? "Seleccionado"
                : "Seleccionar"}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Barra de progreso */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between">
          {Phases.map((phase, index) => (
            <div key={phase.id} className="w-1/4 text-center">
              <div
                className={`h-2 bg-gray-200 rounded-full mb-2 ${
                  index <= currentPhase ? "bg-[#861453]" : ""
                }`}
              ></div>
              <span
                className={`text-sm ${
                  index <= currentPhase
                    ? "font-bold text-[#861453]"
                    : "text-gray-500"
                }`}
              >
                Fase {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contenido de la fase actual */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#861453] mb-2">
            {Phases[currentPhase].title}
          </h2>
          <p className="text-xl text-gray-600">
            {Phases[currentPhase].description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {renderPhaseCards(
            currentPhase === 0 ? packages : Phases[currentPhase].services
          )}
        </div>

        {/* Navegación */}
        <div className="flex justify-between mt-12">
          <button
            onClick={handleBack}
            disabled={currentPhase === 0}
            className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Anterior
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedItems[Phases[currentPhase].type]}
            className="px-8 py-3 bg-gradient-to-r from-[#861453] to-purple-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-600 hover:to-[#861453] flex items-center gap-2"
          >
            {currentPhase === Phases.length - 1 ? "Ver Resumen" : "Siguiente"}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal de resumen */}
      {showSummary && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full  p-8">
            <h2 className="text-3xl font-bold text-[#861453] mb-6">
              Resumen Final
            </h2>

            {Object.entries(selectedItems).map(([phaseType, item]) => (
              <div key={phaseType} className="mb-6">
                <div className="bg-gradient-to-br from-[#861453] via-purple-900 to-[#1a0933] p-1 rounded-2xl">
                  <div className="bg-white/90 backdrop-blur-lg rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#861453] mb-4">
                      {Phases.find((p) => p.type === phaseType).title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-lg">{item.name}</p>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-2xl font-bold text-[#861453]">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 flex justify-between items-center bg-[#861453]/10 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-[#861453]">Total:</h3>
              <span className="text-2xl font-bold text-[#861453]">
                ${calculateTotal()}
              </span>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={() => setShowSummary(false)}
                className="px-6 py-2 text-gray-600 hover:text-[#861453]"
              >
                Volver a editar
              </button>
              <button
                className="px-6 py-2 bg-gradient-to-r from-[#861453] to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-[#861453] font-semibold"
                onClick={() => {
                  // Lógica de contratación
                  console.log("Contratando...", selectedItems);
                }}
              >
                Confirmar y Pagar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingWizard;
