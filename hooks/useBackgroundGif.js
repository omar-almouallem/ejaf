import { useState, useEffect, useRef } from "react";

export const useBackgroundGif = (gifPath, options = {}) => {
  const {
    staticFallback = null,
    gradientVar = null,
    customBackgroundLayers = [],
  } = options;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          const img = new Image();
          img.onload = () => setIsLoaded(true);
          img.src = gifPath;
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "10px",
      }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [gifPath]);
  const backgroundStyle = {
    backgroundImage: (() => {
      const layers = [];
      if (gradientVar) {
        layers.push(`var(${gradientVar})`);
      }
      customBackgroundLayers.forEach((layer) => layers.push(layer));
      if (isLoaded) {
        layers.push(`url(${gifPath})`);
      } else if (staticFallback) {
        layers.push(`url(${staticFallback})`);
      }
      return layers.join(", ");
    })(),
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
    transition: "background-image 0.3s ease-in-out",
  };

  return {
    ref: elementRef,
    backgroundStyle,
    isLoaded,
    isInView,
  };
};
