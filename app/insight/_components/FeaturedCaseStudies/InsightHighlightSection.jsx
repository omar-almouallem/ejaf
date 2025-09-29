"use client";

import { useQuery } from "@tanstack/react-query";
import { getInsightFeaturedCaseStudies } from "@/requests/insight/insightFeaturedCaseStudies";
import CaseStudiesSkeleton from "@/components/skeletons/CaseStudiesSkeleton";

import { InfoSection } from "./InfoSection";

export default function InsightHighlightSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["insight-featured"],
    queryFn: getInsightFeaturedCaseStudies,
  });
  if (isLoading || !data?.contents) {
    return <CaseStudiesSkeleton />;
  }
  return (
    <div className="flex flex-col items-center gap-[66px]">
      {data?.contents
        ?.slice()
        .reverse()
        .map((section, index) => (
          <InfoSection
            key={section.id || index}
            number={section.number}
            image={{
              src: section.logo[0] || "/fallback.png",
              size: [113, 48],
            }}
            title={section.text}
            cards={section.insightcards.map((card, idx) => ({
              icon: card.logo[0],
              title: card.title,
              text: card.description,
            }))}
          />
        ))}
    </div>
  );
}
