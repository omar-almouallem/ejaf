"use client";

import { PartnerCard } from "./_components";
import { ScrollReveal, SlideUp } from "@/app/_animations";
import { GifBackground } from "@/components/gif-background";
import { PartnersSkeleton } from "@/components/skeletons";
import { getPartners } from "@/requests/shared";
import { useQuery } from "@tanstack/react-query";

export default function OurPartners() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["partners"],
    queryFn: getPartners,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <PartnersSkeleton />;
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
  const { normal, highlighted, icon } = data;
  return (
    <GifBackground className="min-h-dvh lg:min-h-screen pt-14 md:pt-28 pb-10 md:pb-20">
      <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
        <SlideUp delay={0.1} duration={0.8}>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-neutral-100 text-center mb-8">
            {normal} <span className="text-main-color">{highlighted}</span>
          </h2>
        </SlideUp>
        <ScrollReveal
          className="grid gap-2 sm:gap-4 justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          staggerChildren={0.15}
          direction="up"
          distance={60}
          delay={0.2}
        >
          {icon.map((partner) => (
            <PartnerCard key={partner._id} image={partner} />
          ))}
        </ScrollReveal>
      </div>
    </GifBackground>
  );
}
