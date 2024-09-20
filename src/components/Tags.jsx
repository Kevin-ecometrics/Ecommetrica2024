import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Tags({ tags }) {
  const [currentTagIndex, setCurrentTagIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagIndex((prevIndex) => (prevIndex + 1) % tags.length);
    }, 2000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [tags.length]);

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <motion.span
          key={index}
          className={`${index === currentTagIndex ? "block" : "hidden"}`}
          initial={{ opacity: 0, y: 10 }}
          exit={{ opacity: 0, y: 10 }}
          animate={{
            opacity: index === currentTagIndex ? 1 : 0,
            y: index === currentTagIndex ? 0 : 10,
          }}
          transition={{ duration: 1.0 }}
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}

export default Tags;
