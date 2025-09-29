"use client";
import { GifBackground } from "@/components/gif-background";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "@/app/_shared/services/Hero";
import {
  getSafetyAndAutomationAndFireSuppressionSystemsServiceCard,
  getSafetyAndAutomationAndFireSuppressionSystemsQualificationStages,
  getHeroSafetyAndAutomationAndFireSuppressionSystems,
} from "@/requests/services/safety-&-automation-and-fire-suppression-systems";
import {
  HeroSectionServiceSkeleton,
  WhatWeOfferSkeleton,
  QualificationStagesSkeleton,
} from "@/components/skeletons";

import WhatWeOfferSection from "../../_components/WhatWeOffer";
import QualificationStagesSection from "../../_components/QualificationStages";

export default function ServicesSection() {
  const { data: cardData, isLoading: cardLoading } = useQuery({
    queryKey: ["SafetyAndAutomationAndFireSuppressionSystemsServiceCard"],
    queryFn: getSafetyAndAutomationAndFireSuppressionSystemsServiceCard,
  });
  const {
    data: qualificationStagesData,
    isLoading: qualificationStagesLoading,
  } = useQuery({
    queryKey: [
      "SafetyAndAutomationAndFireSuppressionSystemsQualificationStages",
    ],
    queryFn: getSafetyAndAutomationAndFireSuppressionSystemsQualificationStages,
  });
  const { data: heroData, isLoading: heroLoading } = useQuery({
    queryKey: ["HeroSafetyAndAutomationAndFireSuppressionSystems"],
    queryFn: getHeroSafetyAndAutomationAndFireSuppressionSystems,
  });

  return (
    <>
      {heroLoading || !heroData ? (
        <HeroSectionServiceSkeleton />
      ) : (
        <HeroSection
          title={heroData.title}
          description={heroData.description}
          image={heroData.image || null}
          logo={heroData.logo?.[0] || null}
        />
      )}

      <GifBackground className="services-section xl1300-padding services-layout clip">
        {cardLoading || !Array.isArray(cardData) ? (
          <WhatWeOfferSkeleton />
        ) : (
          <WhatWeOfferSection cards={cardData} columns={4} />
        )}

        {qualificationStagesLoading ||
        !qualificationStagesData?.safety_and_automation_and_fire_suppression_systems_stages_card ? (
          <QualificationStagesSkeleton />
        ) : (
          <QualificationStagesSection
            description={qualificationStagesData.description}
            cards={
              qualificationStagesData.safety_and_automation_and_fire_suppression_systems_stages_card
            }
          />
        )}
      </GifBackground>
    </>
  );
}
