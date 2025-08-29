import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimationImage({ image, className, initial, animate, transition }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isInView);
  }, [isInView]);

  const adjustedAnimate = isVisible ? animate : initial;

  return (
    <div ref={ref}>
      <motion.img
        src={image}
        initial={initial}
        animate={adjustedAnimate}
        transition={transition}
        className={className}
        key={isVisible ? "visible" : "hidden"}
      />
    </div>
  );
}

export default AnimationImage;
