import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MyComponent: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);

  return (
    <main>
      {/* Sección 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-16 gap-8 md:w-[80%] mx-auto mb-32">
        <div className="text-white">
          <h1 className="mb-4 text-4xl font-normal">Nuestra Historia</h1>
          <p className="text-lg font-light">
            Este es un texto genérico donde puedes contar la historia de tu
            proyecto o empresa. Habla sobre los inicios, los retos y la visión
            que los motivó a innovar. <br />
            Describe brevemente los hitos más importantes y la evolución hasta
            la actualidad. <br />
            <br />
            Puedes usar este espacio para transmitir confianza y compartir la
            esencia de tu misión.
          </p>
        </div>
        <div ref={ref1}>
          <motion.img
            src="/condor/drone1.png"
            alt="Drone Imagen 1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : 100 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Sección 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-16 gap-8 md:w-[80%] mx-auto mb-16">
        <div ref={ref2}>
          <motion.img
            src="/condor/drone2.png"
            alt="Drone Imagen 2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -100 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="text-white flex justify-center items-center flex-col">
          <img src="/condor/comillas.png" alt="Comillas" />
          <p className="text-[35px] md:md:w-[60%] text-start md:text-center">
            "Este es un ejemplo de frase inspiradora o lema que representa tu
            visión."
          </p>
        </div>
      </div>

      {/* Sección 3 */}
      <div className="mb-16">
        <h1 className="text-start md:text-center text-[#61B7F8] font-extrabold px-12 text-xl mb-8">
          TÍTULO DE SECCIÓN
        </h1>
        <h2 className="text-start md:text-center text-[#FAFBFF] text-3xl md:w-[70%] px-12 mx-auto">
          Aquí puedes explicar un concepto importante relacionado con tu marca o
          producto. Usa este espacio para inspirar y conectar con tu audiencia.
        </h2>
      </div>

      {/* Sección 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%] mx-auto">
        <div>
          <h1 className="text-3xl text-[#FAFBFF] mb-4 font-bold">Misión</h1>
          <p className="text-[#A8A9AC] font-light mb-16">
            Aquí puedes describir la misión de tu empresa: ¿qué problema
            resuelves? ¿qué impacto quieres generar?
          </p>

          <h1 className="text-3xl font-bold mb-4 text-[#FAFBFF]">Visión</h1>
          <p className="text-[#A8A9AC] mb-16 font-light">
            Explica la visión a futuro: ¿hacia dónde quieres llegar?, ¿cómo
            imaginas la evolución de tu proyecto?
          </p>

          <h1 className="text-3xl font-bold mb-4 text-[#FAFBFF]">Valores</h1>
          <ul className="list-disc pl-4 space-y-2 text-[#A8A9AC] mb-16">
            <li>
              <strong className="text-white">Innovación</strong> - Creamos
              soluciones únicas para el futuro.
            </li>
            <li>
              <strong className="text-white">Compromiso</strong> - Estamos
              enfocados en ofrecer calidad.
            </li>
            <li>
              <strong className="text-white">Colaboración</strong> - Crecemos
              junto a nuestra comunidad.
            </li>
            <li>
              <strong className="text-white">Responsabilidad</strong> - Pensamos
              en el impacto de lo que hacemos.
            </li>
          </ul>
        </div>
        <div ref={ref3}>
          <motion.img
            src="/condor/drone3.png"
            alt="Drone Imagen 3"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : 100 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </main>
  );
};

export default MyComponent;
