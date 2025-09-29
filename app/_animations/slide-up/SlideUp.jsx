"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function SlideUp({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  staggerChildren = 0.1,
  distance = 30,
  threshold = 0.1,
  once = true,
  animateOnHover = false,
  hoverDistance = 20,
  hoverDuration = 0.4,
  hoverStagger = 0.05,
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(ref, {
    threshold,
    once,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay,
        duration: duration * 0.3,
        staggerChildren,
        delayChildren: delay,
      },
    },
    hover: {
      transition: {
        staggerChildren: hoverStagger,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart for smooth slide
      },
    },
    hover: {
      y: -hoverDistance,
      transition: {
        duration: hoverDuration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const handleMouseEnter = () => {
    if (animateOnHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (animateOnHover) {
      setIsHovered(false);
    }
  };

  // Determine animation state
  const getAnimationState = () => {
    if (!isInView) return "hidden";
    if (animateOnHover && isHovered) return "hover";
    return "visible";
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={getAnimationState()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
}
