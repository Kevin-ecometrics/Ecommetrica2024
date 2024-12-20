import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      description:
        "El diseño de nuestra nueva página web es impresionante. El equipo capturó exactamente lo que queríamos y el resultado final superó nuestras expectativas.",
      autor: "Carlos Pérez.",
      job: "Gerente de Marketing",
    },
    {
      id: 2,
      description:
        "La campaña publicitaria que desarrollaron para nosotros fue un éxito rotundo. Aumentamos nuestras ventas en un 30% en solo un mes.",
      autor: "María Gómez.",
      job: "Directora de Ventas",
    },
    {
      id: 3,
      description:
        "Las publicaciones en redes sociales que crearon para nuestra empresa son creativas y atractivas. Hemos visto un aumento significativo en la interacción con nuestros seguidores.",
      autor: "Luis Rodríguez.",
      job: "Community Manager",
    },
    {
      id: 4,
      description:
        "El equipo de soporte fue muy útil y rápido en responder a nuestras consultas. La página web es fácil de usar y ha mejorado nuestra presencia en línea.",
      autor: "Ana Martínez.",
      job: "Propietaria de Negocio",
    },
    {
      id: 5,
      description:
        "La estrategia de redes sociales que implementaron ha sido clave para aumentar nuestra visibilidad y atraer nuevos clientes. ¡Muy recomendable!",
      autor: "Jorge Fernández.",
      job: "CEO",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevClick = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextClick = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="md:h-screen flex justify-center py-8 items-center bg-gradient-to-l from-[#BD155C] to-[#1E171E] text-white relative"
      id="testimonial"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 px-8">
        <div className="hidden md:block">
          <img
            src="/profile.webp"
            loading="lazy"
            alt="testimonials"
            className="z-10 absolute bottom-0"
          />
        </div>
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-2xl font-bold mb-4">Historias de éxito</h1>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Testimonios</h2>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              className="font-light w-[70%] mb-12"
            >
              {testimonials[currentTestimonial].description}
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center py-4 gap-4">
            <div className="w-12 h-1 bg-[#EA2B79]"></div>
            <div className="flex-col">
              <h1 className="font-bold">
                {testimonials[currentTestimonial].autor}
              </h1>
              <p>{testimonials[currentTestimonial].job}</p>
            </div>
          </div>
          <div className="flex gap-4 py-8">
            <svg
              onClick={handlePrevClick}
              width="41"
              height="32"
              viewBox="0 0 41 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M19.3236 21.7905L10.0678 15.9793L19.2733 10.0887M11.3498 15.9738L30.0676 15.8933"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              onClick={handleNextClick}
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M20.6764 10.2095L29.9322 16.0207L20.7267 21.9113M28.6502 16.0262L9.9324 16.1067"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="border-8 border-white h-96 w-96 absolute bottom-64 left-[-120px] animate-div hidden xl:block"></div>
      </div>
    </section>
  );
}

export default Testimonial;
