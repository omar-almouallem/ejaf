"use client";

import { useQuery } from "@tanstack/react-query";
import HeroSection from "@/app/_shared/services/Hero";
import { GifBackground } from "@/components/gif-background";
import {
  getTechnologicalDataProtectionStudyServiceCard,
  getTechnologicalDataProtectionStudyQualificationStages,
  getHeroTechnologicalDataProtectionStudy,
} from "@/requests/services/technological-data-protection-study";
import {
  HeroSectionServiceSkeleton,
  WhatWeOfferSkeleton,
  QualificationStagesSkeleton,
} from "@/components/skeletons";

import WhatWeOfferSection from "../../_components/WhatWeOffer";
import QualificationStagesSection from "../../_components/QualificationStages";

export default function ServicesSection() {
  const { data: cardData, isLoading: cardLoading } = useQuery({
    queryKey: ["technologicalDataProtectionStudyServiceCard"],
    queryFn: getTechnologicalDataProtectionStudyServiceCard,
  });
  const {
    data: qualificationStagesData,
    isLoading: qualificationStagesLoading,
  } = useQuery({
    queryKey: ["TechnologicalDataProtectionStudyQualificationStages"],
    queryFn: getTechnologicalDataProtectionStudyQualificationStages,
  });
  const { data: heroData, isLoading: heroLoading } = useQuery({
    queryKey: ["HeroTechnologicalDataProtectionStudy"],
    queryFn: getHeroTechnologicalDataProtectionStudy,
  });

  return (
    <>
      {heroLoading || !heroData ? (
        <HeroSectionServiceSkeleton />
      ) : (
        <HeroSection
          title={heroData.title}
          description={heroData.description}
          image={heroData.image}
          logo={heroData.logo?.[0]}
        />
      )}

      <GifBackground className="services-section xl1300-padding services-layout clip">
        {cardLoading || !Array.isArray(cardData) ? (
          <WhatWeOfferSkeleton />
        ) : (
          <WhatWeOfferSection cards={cardData} columns={3} />
        )}
        {qualificationStagesLoading ||
        !qualificationStagesData?.technological_data_protection_study_stages_card ? (
          <QualificationStagesSkeleton />
        ) : (
          <QualificationStagesSection
            description={qualificationStagesData.description}
            cards={
              qualificationStagesData.technological_data_protection_study_stages_card
            }
          />
        )}
      </GifBackground>
    </>
  );
}
