"use client";

import { SlideUp } from "@/app/_animations";
import { Slider } from "@/app/about/_components";
import { FeaturesSkeleton } from "@/components/skeletons";
import { getFeatures } from "@/requests/shared";
import { useQuery } from "@tanstack/react-query";

export default function FeaturesContainer({
  titleClasses = "text-3xl md:text-4xl xl:text-5xl font-semibold text-neutral-100 text-center mb-[30px]",
  contentWidth = "w-full md:max-w-[762px] mx-auto",
  dataId,
}) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["features"],
    queryFn: getFeatures,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return (
      <FeaturesSkeleton
        titleClasses={titleClasses}
        contentWidth={contentWidth}
      />
    );
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
  const { normal, highlighted, slider, description } =
    data?.find((d) => d.dataId === dataId) || {};
  return (
    <section className="grid py-16 xl:py-36 place-items-center relative dotted-banner">
      <div
        className={`px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 relative z-10 ${contentWidth}`}
      >
        <SlideUp delay={0.1} duration={0.4}>
          <h2 className={titleClasses}>
            {normal}{" "}
            {highlighted && (
              <span className="text-main-color">{highlighted}</span>
            )}
          </h2>
        </SlideUp>
        {slider?.length > 0 ? (
          <Slider slides={slider} />
        ) : (
          <SlideUp delay={0.1} duration={0.4}>
            <p className="text-lg text-center lg:text-xl xl:text-2xl text-neutral-100">
              {description}
            </p>
          </SlideUp>
        )}
      </div>
    </section>
  );
}
