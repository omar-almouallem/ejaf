"use client";

import { CountUp, SlideUp } from "@/app/_animations";
import { StatsSkeleton } from "@/components/skeletons";
import { getStats } from "@/requests/shared";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Stats() {
  const {
    data: stats,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <StatsSkeleton />;
  }
  if (error) {
    return (
      <section className="w-full lg:max-w-[854px] mx-auto">
        <div className="text-lg text-red-400">{error.message}</div>
      </section>
    );
  }
  return (
    <section className="w-full lg:max-w-[854px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 xl:gap-[40px] text-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-main-color">
            <CountUp
              from={100}
              to={stats.clients}
              separator=","
              direction="up"
              duration={0.2}
              className="count-up-text"
            />
            +
          </h3>
          <SlideUp delay={0.1} duration={0.4}>
            <p className="text-lg text-center text-neutral-100">
              Happy Clients
            </p>
          </SlideUp>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-stats-color">
            <CountUp
              from={1000}
              to={stats.projects}
              separator=","
              direction="up"
              duration={0.2}
              className="count-up-text"
            />
            +
          </h3>
          <SlideUp delay={0.1} duration={0.4}>
            <p className="text-lg text-center text-neutral-100">
              Projects Completed
            </p>
          </SlideUp>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-main-color">
            <CountUp
              from={1}
              to={stats.partners}
              separator=","
              direction="up"
              duration={0.2}
              className="count-up-text"
            />
            +
          </h3>
          <SlideUp delay={0.1} duration={0.4}>
            <p className="text-lg text-center text-neutral-100">
              Business Partners
            </p>
          </SlideUp>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="relative w-[80px] h-[28px] sm:w-[100px] sm:h-[35px] lg:w-[115px] lg:h-[40px]">
              <Image
                src="/assets/shared/flags.png"
                className="object-contain"
                alt="flags"
                fill
                priority
              />
            </div>
            <span className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-stats-color">
              <CountUp
                from={1}
                to={stats.countries}
                separator=","
                direction="up"
                duration={0.2}
                className="count-up-text"
              />
              +
            </span>
          </div>
          <SlideUp delay={0.1} duration={0.4}>
            <p className="text-lg text-center text-neutral-100">Countries</p>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
