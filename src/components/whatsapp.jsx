import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function CustomFloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: "received", text: "Hola, ¿En qué podemos ayudarte?" },
  ]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { type: "sent", text: message }]);
      setMessage("");
      setTimeout(() => {
        const whatsappUrl = `https://wa.me/526646429633?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappUrl, "_blank");
      }, 500); // Simula un pequeño retraso
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botón flotante */}
      <button
        className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
        onClick={toggleChat}
      >
        <FaWhatsapp className="text-white text-3xl" />
      </button>

      {/* Cuadro de chat */}
      {isOpen && (
        <div className="mt-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          {/* Encabezado */}
          <div className="bg-green-500 text-white flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Avatar"
                className="w-10 h-10 rounded-full mr-3 border"
              />
              <div>
                <p className="font-semibold">Ecommetrica</p>
                <p className="text-sm">En línea</p>
              </div>
            </div>
            <button
              className="text-xl font-bold hover:text-gray-200"
              onClick={toggleChat}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cuerpo del chat */}
          <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 flex ${
                  msg.type === "sent" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    msg.type === "sent"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  } rounded-lg p-3 text-sm max-w-xs`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Pie del chat */}
          <div className="flex items-center px-4 py-3 bg-gray-200">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomFloatingWhatsApp;
