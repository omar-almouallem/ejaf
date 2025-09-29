"use client";

import { SlideUp } from "@/app/_animations";
import { GifBackground } from "@/components/gif-background";
import { AimSkeleton } from "@/components/skeletons";
import { getAboutAim } from "@/requests/about";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function OurAim() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["aboutAim"],
    queryFn: getAboutAim,
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
    return <AimSkeleton />;
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
  const { title, description, aim } = data;
  return (
    <GifBackground className="min-h-dvh">
      <div className="w-full lg:max-w-[1051px] px-2 sm:px-4 lg:px-0 mx-auto py-10 lg:py-16 xl:py-20 flex flex-col gap-4 items-center text-neutral-100">
        <SlideUp delay={0.1} duration={0.4}>
          <p className="text-lg lg:text-xl xl:text-2xl xl:font-medium text-center">
            {title}
          </p>
        </SlideUp>
        <div className="grid gap-5 lg:grid-cols-2">
          {aim.map((i) => (
            <SlideUp delay={0.1} duration={0.4} key={i.title}>
              <div className="w-full md:max-w-[470px] h-[280px] relative overflow-hidden border border-main-color/80 rounded-2xl group">
                <Image
                  src={i.image[0]}
                  alt="our aim image"
                  className="h-full object-cover"
                  width={470}
                  height={279}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-our-aim-overlay-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-5 xl:px-11">
                  <h3 className="text-lg lg:text-xl xl:text-2xl text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {i.title}
                  </h3>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
        <SlideUp
          delay={0.1}
          duration={0.4}
          staggerChildren={0.2}
          className="my-4 text-center grid gap-4"
        >
          {description.map((p, index) => (
            <p
              key={index}
              className="text-lg lg:text-xl xl:text-2xl text-center"
            >
              {p}
            </p>
          ))}
        </SlideUp>
      </div>
    </GifBackground>
  );
}
