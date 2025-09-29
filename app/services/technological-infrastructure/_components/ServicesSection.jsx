"use client";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "@/app/_shared/services/Hero";
import { GifBackground } from "@/components/gif-background";
import {
  getTechnologicalInfrastructureServiceCard,
  getTechnologicalInfrastructureQualificationStages,
  getHeroTechnologicalInfrastructure,
} from "@/requests/services/technological-infrastructure";
import {
  HeroSectionServiceSkeleton,
  WhatWeOfferSkeleton,
  QualificationStagesSkeleton,
} from "@/components/skeletons";

import WhatWeOfferSection from "../../_components/WhatWeOffer";
import QualificationStagesSection from "../../_components/QualificationStages";

export default function ServicesSection() {
  const { data: cardData, isLoading: cardLoading } = useQuery({
    queryKey: ["TechnologicalInfrastructureServiceCard"],
    queryFn: getTechnologicalInfrastructureServiceCard,
  });
  const {
    data: qualificationStagesData,
    isLoading: qualificationStagesLoading,
  } = useQuery({
    queryKey: ["TechnologicalInfrastructureQualificationStages"],
    queryFn: getTechnologicalInfrastructureQualificationStages,
  });
  const { data: heroData, isLoading: heroLoading } = useQuery({
    queryKey: ["HeroTechnologicalInfrastructure"],
    queryFn: getHeroTechnologicalInfrastructure,
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
          <WhatWeOfferSection cards={cardData} columns={4} />
        )}

        {qualificationStagesLoading ||
        !qualificationStagesData?.technological_infrastructure_stages_card ? (
          <QualificationStagesSkeleton />
        ) : (
          <QualificationStagesSection
            description={qualificationStagesData.description}
            cards={
              qualificationStagesData.technological_infrastructure_stages_card
            }
          />
        )}
      </GifBackground>
    </>
  );
}
