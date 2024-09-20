import React, { useState } from "react";

const Portfolio = () => {
  const lista = [
    "Todos",
    "Dentistas",
    "Doctores",
    "Industria",
    "Distribuidor",
    "Emprendimientos",
  ];

  const proyectos = [
    { nombre: "Proyecto 1", categoria: "Dentistas", img: "/portafolio.webp" },
    { nombre: "Proyecto 2", categoria: "Doctores", img: "/portafolio.webp" },
    { nombre: "Proyecto 3", categoria: "Industria", img: "/portafolio.webp" },
    {
      nombre: "Proyecto 4",
      categoria: "Distribuidor",
      img: "/portafolio.webp",
    },
    {
      nombre: "Proyecto 5",
      categoria: "Emprendimientos",
      img: "/portafolio.webp",
    },
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const filtrarProyectos = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const proyectosFiltrados =
    categoriaSeleccionada === "Todos"
      ? proyectos
      : proyectos.filter(
          (proyecto) => proyecto.categoria === categoriaSeleccionada
        );

  return (
    <section className=" bg-gradient-to-l from-[#BD155C] to-[#1E171E] py-16 text-white">
      <h1 className="text-center font-normal text-xl md:text-2xl">
        Portafolio
      </h1>
      <p className="text-3xl md:text-5xl font-bold text-center mb-16">
        Dale un Vistazo a Nuestro Trabajo
      </p>
      <div className="flex justify-center items-center gap-8 px-8">
        <div className="hidden md:flex justify-center items-center gap-8">
          {lista.map((item) => (
            <div key={item}>
              <button
                className="px-4 py-2 font-bold relative group"
                onClick={() => filtrarProyectos(item)}
              >
                {item}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-white transform ${
                    categoriaSeleccionada === item ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100 transition-transform origin-left duration-300`}
                ></span>
              </button>
            </div>
          ))}
        </div>
        <div className="md:hidden w-full">
          <select
            className="w-full px-4 py-2 font-bold rounded-lg text-black"
            onChange={(e) => filtrarProyectos(e.target.value)}
            value={categoriaSeleccionada}
          >
            {lista.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-8">
        {proyectosFiltrados.map((proyecto) => (
          <div
            className="relative bg-[#c2155C] rounded-lg overflow-hidden group"
            key={proyecto.nombre}
          >
            <img
              src={proyecto.img}
              alt={proyecto.nombre}
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-125"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-[#861453] text-white px-4 py-2 rounded-lg font-bold">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
