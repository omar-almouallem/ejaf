"use client";

import { GifBackground } from "@/components/gif-background";
import { Feature } from "../feature";
import { useQuery } from "@tanstack/react-query";
import { WhyUsSkeleton } from "@/components/skeletons";
import { getSolutionsWhy } from "@/requests/solutions";

export default function WhyUs() {
  const {
    data: features,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["solutionsWhy"],
    queryFn: getSolutionsWhy,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <WhyUsSkeleton />;
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
  return (
    <GifBackground className="min-h-dvh lg:min-h-screen py-10 xl:py-20">
      <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 grid gap-10 xl:gap-[60px]">
        {features.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </div>
    </GifBackground>
  );
}
