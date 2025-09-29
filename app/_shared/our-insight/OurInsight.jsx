"use client";

import { SlideUp } from "@/app/_animations";
import { ImageSlider } from "./_components";
import { GifBackground } from "@/components/gif-background";
import { useQuery } from "@tanstack/react-query";
import { getInsight } from "@/requests/shared";
import { InsightSkeleton } from "@/components/skeletons";

export default function OurInsight() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["insight"],
    queryFn: getInsight,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <InsightSkeleton />;
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
  const { normal, highlighted } = data;
  return (
    <GifBackground className="lg:min-h-dvh py-10 md:pt-[71px] md:pb-[145px]">
      <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
        <SlideUp delay={0.1} duration={0.8}>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-neutral-100 text-center">
            {normal} <span className="text-main-color">{highlighted}</span>
          </h2>
        </SlideUp>
        <ImageSlider />
      </div>
    </GifBackground>
  );
}
