"use client";

import { useQuery } from "@tanstack/react-query";
import { getInsightHero } from "@/requests/insight/insightHero";
import InsightHeroSkeleton from "@/components/skeletons/InsightHeroSkeleton";

export default function InsightHero() {
  const { data, isLoading } = useQuery({
    queryKey: ["insight-hero"],
    queryFn: getInsightHero,
  });

  if (isLoading || !data) {
    return <InsightHeroSkeleton />;
  }

  return (
    <section className="w-dvw py-15 sm:pb-24 lg:pb-15 lg:h-dvh lg:-mt-[84px] relative overflow-hidden solutions-hero grid place-items-center">
      <div className="effect"></div>
      <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 grid place-items-center relative z-10">
        <h1 className="w-full sm:max-w-[504px] mx-auto text-2xl md:text-3xl xl:text-[40px] text-neutral-100 text-center font-bold px-4 sm:px-0">
          <span className="text-main-color">
            {data.customtitle.highlighted}{" "}
          </span>
          {data.customtitle.text}
        </h1>
        <p className="w-full md:max-w-[656px] mx-auto mt-6 text-neutral-100 text-center text-lg sm:text-xl font-normal">
          {data.description}
        </p>
      </div>
    </section>
  );
}
