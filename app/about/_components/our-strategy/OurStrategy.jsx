"use client";

import { SlideUp } from "@/app/_animations";
import { Selector, WeProvide } from "./_components";
import { GifBackground } from "@/components/gif-background";
import { useQuery } from "@tanstack/react-query";
import { StrategySkeleton } from "@/components/skeletons";
import { getAboutStrategy } from "@/requests/about";

export default function OurStrategy() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["aboutStrategy"],
    queryFn: getAboutStrategy,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: (failureCount, error) => {
      if (error.status === 404) return false;
      if (error.status >= 500) return failureCount < 6;
      return failureCount < 2;
    },
  });
  if (isLoading) {
    return <StrategySkeleton />;
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
  const { normal, highlighted, subtitle, selector, provide } = data;
  return (
    <GifBackground className="min-h-dvh lg:min-h-screen">
      <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
        <SlideUp
          delay={0.1}
          duration={0.4}
          className="w-full xl:max-w-[815px] mx-auto"
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-neutral-100 text-center">
            {normal} <span className="text-main-color">{highlighted}</span>
          </h2>
          <p className="text-neutral-100 text-md text-lg lg:text-xl xl:text-2xl text-center mt-2">
            {subtitle}
          </p>
        </SlideUp>
        <Selector selector={selector} />
        <WeProvide provide={provide} />
      </div>
    </GifBackground>
  );
}
