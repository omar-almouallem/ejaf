"use client";

import { SlideUp } from "@/app/_animations";
import { AboutHeroSkeleton } from "@/components/skeletons";
import { getAboutHero } from "@/requests/about";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Hero() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["aboutHero"],
    queryFn: getAboutHero,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <AboutHeroSkeleton />;
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
  const { logo, description, image } = data;
  return (
    <section className="relative w-dvw py-10 sm:py-5 md:py-5 lg:h-dvh lg:-mt-[88px] lg:pt-[88px] bg-hero-radial-gradient lg:overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/assets/shared/banner.webm" type="video/webm" />
        <source src="/assets/shared/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 pt-6 pb-0 md:py-10 lg:py-0 h-full text-neutral-100 gap-8 grid items-center lg:grid-cols-2">
        <section className="grid gap-5 lg:gap-9">
          <SlideUp delay={0.1} duration={0.4}>
            <Image
              src={logo[0]}
              alt="Company Logo"
              className="w-30 h-auto mx-auto md:mx-0 xl:w-[180px] xl:h-auto"
              style={{ height: "auto" }}
              width={180}
              height={90}
              priority
            />
          </SlideUp>
          <SlideUp delay={0.1} duration={0.4}>
            <p className="text-lg lg:text-xl xl:text-2xl text-neutral-100 text-center md:text-left mb-5 sm:mb-0">
              {description}
            </p>
          </SlideUp>
        </section>
        <div className="relative lg:min-h-96 lg:mt-0 grid place-items-center">
          <Image
            src={image[0]}
            alt="about hero banner"
            className="relative lg:absolute z-10 lg:top-10 xl:top-0 left-0 lg:-left-10 sm:w-3/4 lg:w-full lg:scale-125 xl:scale-150"
            width={774}
            height={478}
            priority
          />
        </div>
      </div>
    </section>
  );
}
