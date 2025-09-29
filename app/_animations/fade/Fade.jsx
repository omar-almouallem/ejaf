"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Fade({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  staggerChildren = 0.1,
  threshold = 0.1,
  once = true,
}) {
  const ref = useRef(null);
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
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94], // smooth fade
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
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
