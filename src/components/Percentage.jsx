import React, { useState, useEffect } from "react";

const skillsData = [
  {
    name: "Consultoría Estratégica",
    description:
      "Nuestra receta para el éxito garantiza una planificación segura sobre proyecciones y resultados.",
    percentage: 0,
  },
  {
    name: "Optimización de Google y Meta",
    description:
      "GOOGLE posee más del 93% de la intención de búsqueda y Instagram es donde todos están.",
    percentage: 0,
  },
  {
    name: "Automatización de Marketing y Ventas",
    description:
      "Mejora la adquisición de leads y conversiones con técnicas de growth hacking de primer nivel.",
    percentage: 0,
  },
  {
    name: "Análisis Corporativo",
    description:
      "Obtén conocimiento preciso y tiempo para captar leads entrantes y vender sin parar.",
    percentage: 0,
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
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="mb-6 skill-container"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className="flex justify-between items-center">
            <h2
              className={`hover:cursor-pointer text-2xl font-bold mb-2 text-[#3C3C3C] skill-title skill-title-${skill.name}`}
            >
              {skill.name}
            </h2>
            <span className="text-gray-700 skill-percentage">
              {skill.percentage}%
            </span>
          </div>
          <div
            className={`mb-4 skill-description hover:cursor-pointer skill-description-${skill.name}`}
          >
            {skill.description}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className={`bg-[#C2155C] h-4 rounded-full skill-bar ${
                skill.percentage > 0 ? "border border-black" : ""
              } `}
              style={{ width: `${skill.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Percentage;
