"use client";

import { useBackgroundGif } from "@/hooks/useBackgroundGif";

const GifBackground = ({
  gifSrc = "/assets/shared/section-banner.gif",
  staticFallback,
  gradientVar = "--bg-overlay",
  customBackgroundLayers = [],
  className = "",
  children,
  ...props
}) => {
  const { ref, backgroundStyle } = useBackgroundGif(gifSrc, {
    staticFallback,
    gradientVar,
    customBackgroundLayers,
  });
  return (
    <section ref={ref} style={backgroundStyle} className={className} {...props}>
      {children}
    </section>
  );
};

export default GifBackground;
