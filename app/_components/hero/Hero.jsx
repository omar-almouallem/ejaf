"use client";

import { Stats } from "@/app/_shared";
import { Smooth, SlideUp } from "@/app/_animations";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { HomepageHeroSkeleton } from "@/components/skeletons";
import { getHomeHero } from "@/requests/homepage/getHomeHero";
import { motion } from "framer-motion";

export default function Hero() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["homeHero"],
    queryFn: getHomeHero,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <HomepageHeroSkeleton />;
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
  const {
    logo,
    title,
    description,
    animated: { changeable, fixed },
  } = data;
  return (
    <section className="relative w-dvw py-15 sm:py-10 lg:min-h-dvh xl:min-h-dvh lg:-mt-[88px] lg:pt-40 lg:pb-[70px] bg-hero-radial-gradient grid place-items-center">
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
      <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 h-full flex flex-col justify-center items-center text-center gap-4 xl:gap-2 text-neutral-100">
        <Image
          src={logo[0]}
          className="w-30 h-auto xl:w-[185px] xl:h-auto"
          style={{ height: "auto" }}
          alt="company logo"
          width={185}
          height={89}
          priority
        />
        <section className="w-full md:max-w-[625px] mx-auto space-y-4 xl:space-y-14 mb-4 xl:mb-30">
          <SlideUp delay={0.1} duration={0.4} staggerChildren={0.2}>
            <h1 className="text-xl xl:text-2xl text-center mb-4 xl:mb-14">
              {title}
            </h1>
            <p className="text-xl xl:text-2xl text-center">{description}</p>
          </SlideUp>
          <motion.div className="min-w-fit sm:min-w-[500px] lg:max-w-[525px] mx-auto flex gap-[10px] justify-center">
            <Smooth
              texts={changeable}
              interval={4000}
              collapseDelay={800}
              className="leading-tight text-2xl xl:text-5xl font-semibold text-main-color inline-block"
              containerClassName="rounded"
              animationVariants={{
                initial: { opacity: 0, x: "100%" },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: "100%" },
              }}
              transition={{ duration: 0.8, ease: "linear" }}
              widthTransition={{ duration: 0.4, ease: "linear" }}
            />
            <span className="leading-tight text-2xl xl:text-5xl font-semibold text-neutral-100 relative z-10">
              {fixed}
            </span>
          </motion.div>
        </section>
        <Stats />
      </div>
    </section>
  );
}
