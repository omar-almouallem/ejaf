"use client";

import { useState, useEffect } from "react";
import { CheckCircle, XCircle, X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Popup = ({ type, message, progress = null }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);

      if (type !== "info") {
        const timer = setTimeout(() => {
          setShow(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [message]);

  const closePopup = () => {
    setShow(false);
  };

  if (!message || !show) return null;

  const getColorClasses = () => {
    switch (type) {
      case "success":
        return {
          iconColor: "text-green-400",
          title: "Success",
          titleColor: "text-green-400",
        };
      case "error":
        return {
          iconColor: "text-red-400",
          title: "Error",
          titleColor: "text-red-400",
        };
      case "info":
        return {
          iconColor: "text-sky-500",
          title: "Info",
          titleColor: "text-sky-500",
        };
      default:
        return {
          iconColor: "text-neutral-400",
          title: "Notice",
          titleColor: "text-neutral-400",
        };
    }
  };

  const { iconColor, title, titleColor } = getColorClasses();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
          }}
          className={`
            fixed top-4 right-4 z-[10000]
            min-w-80 max-w-96 p-4 
            rounded-xl shadow-2xl 
            border bg-neutral-950 border-neutral-700
          `}
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className={`flex-shrink-0 w-6 h-6 mt-0.5 ${iconColor}`}
            >
              {type === "success" ? (
                <CheckCircle className="w-6 h-6" />
              ) : type === "error" ? (
                <XCircle className="w-6 h-6" />
              ) : (
                <Info className="w-6 h-6" />
              )}
            </motion.div>
            <motion.div
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="flex-1 min-w-0"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.08 }}
                className={`text-xl font-medium ${titleColor}`}
              >
                {title}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.12 }}
                className="mt-1 text-neutral-200"
              >
                {message}
              </motion.div>
              {progress !== null && (
                <div className="mt-3 w-full h-2 bg-neutral-800 rounded overflow-hidden">
                  <motion.div
                    className="h-full bg-main-color transition-all duration-300"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={progress}
                  />
                </div>
              )}
            </motion.div>
            <motion.button
              onClick={closePopup}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgb(64 64 64)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="flex-shrink-0 ml-2 p-2 rounded-md text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
              aria-label="Close notification"
            >
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
