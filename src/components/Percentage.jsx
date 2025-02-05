import React, { useState } from "react";

const skillsData = [
  {
    name: "Consultoría Estratégica",
    description:
      "Nuestra receta para el éxito garantiza una planificación segura sobre proyecciones y resultados.",
    percentage: 0,
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    name: "Optimización de Google y Meta",
    description:
      "GOOGLE posee más del 93% de la intención de búsqueda y Instagram es donde todos están.",
    percentage: 0,
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
        />
      </svg>
    ),
  },
  {
    name: "Automatización de Marketing y Ventas",
    description:
      "Mejora la adquisición de leads y conversiones con técnicas de growth hacking de primer nivel.",
    percentage: 0,
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    name: "Análisis Corporativo",
    description:
      "Obtén conocimiento preciso y tiempo para captar leads entrantes y vender sin parar.",
    percentage: 0,
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

const Percentage = () => {
  const [skills, setSkills] = useState(skillsData);
  const [intervals, setIntervals] = useState([]);

  const handleMouseEnter = (index) => {
    clearInterval(intervals[index]);
    const interval = setInterval(() => {
      setSkills((prevSkills) =>
        prevSkills.map((skill, i) =>
          i === index && skill.percentage < 100
            ? { ...skill, percentage: skill.percentage + 2 }
            : skill
        )
      );
    }, 30);
    setIntervals((prevIntervals) => {
      const newIntervals = [...prevIntervals];
      newIntervals[index] = interval;
      return newIntervals;
    });
  };

  const handleMouseLeave = (index) => {
    clearInterval(intervals[index]);
    const interval = setInterval(() => {
      setSkills((prevSkills) =>
        prevSkills.map((skill, i) =>
          i === index && skill.percentage > 0
            ? { ...skill, percentage: skill.percentage - 2 }
            : skill
        )
      );
    }, 30);
    setIntervals((prevIntervals) => {
      const newIntervals = [...prevIntervals];
      newIntervals[index] = interval;
      return newIntervals;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group relative mb-6 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#861453]/10"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          onTouchStart={() => handleMouseEnter(index)}
          onTouchEnd={() => handleMouseLeave(index)}
        >
          <div className="flex items-start gap-4">
            {/* Icono temático */}
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#861453] to-[#6a0f43] rounded-lg p-2">
              {skill.icon}
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#861453] transition-colors">
                  {skill.name}
                </h2>
                <span className="text-2xl font-bold bg-gradient-to-br from-[#861453] to-[#6a0f43] bg-clip-text text-transparent">
                  {skill.percentage}%
                </span>
              </div>

              <p className="text-gray-600 text-base leading-relaxed">
                {skill.description}
              </p>

              {/* Barra de progreso responsive */}
              <div className="relative h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-gradient-to-r from-[#861453] to-[#6a0f43] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                </div>
                <div className="absolute inset-0 border border-gray-200/50 rounded-full pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Efecto de resplandor sutil */}
          {skill.percentage > 0 && (
            <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-[#861453]/10"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Percentage;
