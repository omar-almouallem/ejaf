"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";

const Smooth = ({
  texts,
  interval = 3000,
  className = "",
  containerClassName = "",
  animationVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  transition = { duration: 0.5, ease: "easeInOut" },
  widthTransition = { duration: 0.4, ease: "easeInOut" },
  collapseDelay = 400,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [measureRef, { width }] = useMeasure();
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setShowContent(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setShowContent(true);
        setIsAnimating(false);
      }, collapseDelay);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval, collapseDelay]);

  return (
    <motion.div
      className={`relative inline-block overflow-hidden ${containerClassName}`}
      animate={{ width: showContent ? width || "auto" : 0 }}
      transition={widthTransition}
    >
      <span
        ref={measureRef}
        className={`absolute opacity-0 pointer-events-none whitespace-nowrap ${className}`}
        aria-hidden="true"
      >
        {texts[currentIndex]}
      </span>

      <AnimatePresence mode="wait">
        {showContent && (
          <motion.span
            key={currentIndex}
            className={`block whitespace-nowrap ${className}`}
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
          >
            {texts[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Smooth;
