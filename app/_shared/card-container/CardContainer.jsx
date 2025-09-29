"use client";

import { GifBackground } from "@/components/gif-background";
import { Card } from "./_components";
import { ScrollReveal, SlideUp } from "@/app/_animations";
import { useQuery } from "@tanstack/react-query";
import { getServices } from "@/requests/shared";
import { ContainerSkeleton } from "@/components/skeletons";

export default function CardContainer({
  titleClasses = "text-3xl md:text-4xl xl:text-5xl font-semibold text-neutral-100 text-center",
  subtitleClasses = "text-neutral-100 text-center",
  showButton = true,
  gridSystem = "grid gap-6 lg:gap-5 xl:gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center",
  className = "",
  id = "",
  dataId,
}) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return (
      <ContainerSkeleton
        gridSystem={gridSystem}
        numberCards={dataId === "services" ? 8 : 6}
        showButton={showButton}
      />
    );
  }
  if (error) {
    return (
      <section className="min-h-dvh">
        <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 h-full flex flex-col justify-center items-center text-center">
          <div className="text-lg text-red-400">{error.message}</div>
        </div>
      </section>
    );
  }
  const {
    normal,
    highlighted,
    subtitle,
    servicecard: serviceData,
  } = data?.find((d) => d.dataId === dataId);
  return (
    <GifBackground className={`py-8 sm:py-10 xl:py-14 ${className}`} id={id}>
      <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-4 xl:px-0">
        <SlideUp
          delay={0.1}
          duration={0.8}
          className="w-full lg:max-w-[814px] mx-auto grid gap-5 my-12"
        >
          <h2 className={titleClasses}>
            {normal}{" "}
            {highlighted && (
              <span className="text-main-color">{highlighted}</span>
            )}
          </h2>
          {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
        </SlideUp>
        <ScrollReveal
          className={gridSystem}
          staggerChildren={0.1}
          duration={0.8}
          spClassName="service-card"
        >
          {serviceData.map((service) => (
            <Card key={service.id} {...service} showButton={showButton} />
          ))}
        </ScrollReveal>
      </div>
    </GifBackground>
  );
}
