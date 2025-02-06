import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLangFromUrl, useTranslations } from "src/i18n/utils";

// Carrusel para escritorio
export function DesktopCarousel({ team, URL }) {
  const lang = getLangFromUrl(URL);
  const t = useTranslations(lang);
  const teamMember = t("team");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 3 >= team.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? team.length - 3 : prev - 1));
  };

  const visibleTeam = team.slice(currentIndex, currentIndex + 3);
  const adjustedTeam = [
    ...visibleTeam,
    ...team.slice(0, 3 - visibleTeam.length),
  ];

  const variants = {
    enter: (direction) => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="hidden md:block py-16 relative overflow-hidden px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#861453] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
        >
          <svg
            className="w-6 h-6"
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
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#861453] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
        >
          <svg
            className="w-6 h-6"
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

        <div className="relative h-[600px] flex items-center">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            {adjustedTeam.map((member, index) => (
              <motion.div
                key={`${member.name}-${currentIndex}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute w-full max-w-[340px] mx-4"
                style={{
                  left: `${index * 33.33}%`,
                  transform: `translateX(-${index * 33.33}%)`,
                }}
              >
                <div className="flex justify-center items-center flex-col">
                  <motion.div
                    className="px-4 relative h-48 transform transition-all duration-500 hover:h-64 rounded-3xl bg-[#861453] w-64"
                    whileHover={{ scale: 1.05 }}
                  >
                    <a href={`${teamMember}${team[currentIndex].name}`}>
                      {" "}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute bottom-0 left-0 right-0 w-full rounded-3xl"
                      />
                    </a>
                  </motion.div>

                  <div className="py-4 text-center">
                    <motion.h2
                      className="text-2xl font-bold text-[#861453] mb-4"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                    >
                      {member.fullName}
                    </motion.h2>
                    <motion.p
                      className="text-[#861453] mb-4 font-semibold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {member.role}
                    </motion.p>
                    <motion.p
                      className="text-[#861453]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {member.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(team.length / 3) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index * 3
                    ? "bg-[#861453] scale-125"
                    : "bg-gray-300"
                }`}
              />
            )
          )}
        </div> */}
      </div>
    </div>
  );
}

// Carrusel para móvil
export function MobileCarousel({ team, URL }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const lang = getLangFromUrl(URL);
  const t = useTranslations(lang);
  const teamMember = t("team");
  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1 >= team.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="block md:hidden py-16 relative overflow-hidden px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#861453] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
        >
          <svg
            className="w-6 h-6"
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
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#861453] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
        >
          <svg
            className="w-6 h-6"
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

        <div className="relative h-[600px] flex items-center">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={team[currentIndex].name}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-[340px] mx-auto"
            >
              <div className="flex justify-center items-center flex-col">
                <motion.div
                  className="px-4 relative h-48 transform transition-all duration-500 hover:h-64 rounded-3xl bg-[#861453] w-64"
                  whileHover={{ scale: 1.05 }}
                >
                  <a href={`${teamMember}${team[currentIndex].name}`}>
                    <img
                      src={team[currentIndex].image}
                      alt={team[currentIndex].name}
                      className="absolute bottom-0 left-0 right-0 w-full rounded-3xl"
                    />
                  </a>
                </motion.div>

                <div className="py-4 text-center">
                  <motion.h2
                    className="text-2xl font-bold text-[#861453] mb-4"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                  >
                    {team[currentIndex].fullName}
                  </motion.h2>
                  <motion.p
                    className="text-[#861453] mb-4 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {team[currentIndex].role}
                  </motion.p>
                  <motion.p
                    className="text-[#861453]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {team[currentIndex].description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {team.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-[#861453] scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente principal
export default function Carrousel({ team, URL }) {
  return (
    <>
      <DesktopCarousel team={team} URL={URL} />
      <MobileCarousel team={team} URL={URL} />
    </>
  );
}
