"use client";

import { SlideUp } from "@/app/_animations";
import { Stats } from "@/app/_shared";
import { SolutionsHeroSkeleton } from "@/components/skeletons";
import { getSolutionsHero } from "@/requests/solutions";
import { useQuery } from "@tanstack/react-query";

export default function Hero() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["solutionsHero"],
    queryFn: getSolutionsHero,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <SolutionsHeroSkeleton />;
  }
  if (error) {
    return (
      <section className="w-dvw py-15 sm:py-10 lg:min-h-dvh xl:min-h-dvh lg:-mt-[88px] lg:pt-40 lg:pb-[70px]">
        <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 h-full flex flex-col justify-center items-center text-center">
          <div className="text-lg text-red-400">{error.message}</div>
        </div>
      </section>
    );
  }
  const { normal, highlighted } = data;
  return (
    <section className="py-20 lg:h-dvh lg:-mt-[88px] lg:pt-[88px] relative grid place-items-center overflow-hidden solutions-hero bg-solution-hero-radial-gradient">
      <div className="w-full lg:max-w-[854px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 grid gap-[35px] relative z-10">
        <SlideUp delay={0.1} duration={0.4}>
          <h1 className="w-full md:max-w-[638px] mx-auto font-semibold text-2xl md:text-3xl xl:text-[40px] text-center text-neutral-100 px-4 sm:px-0">
            <span className="text-main-color">{highlighted}</span> <br />
            {normal}
          </h1>
        </SlideUp>
        <Stats />
      </div>
    </section>
  );
}
