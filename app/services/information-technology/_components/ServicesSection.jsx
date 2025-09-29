"use client";

import { useQuery } from "@tanstack/react-query";
import { GifBackground } from "@/components/gif-background";
import {
  getInformationTechnologyServiceCard,
  getInformationTechnologyQualificationStages,
  getHeroInformationTechnology,
} from "@/requests/services/information-technology";
import HeroSection from "@/app/_shared/services/Hero";
import {
  HeroSectionServiceSkeleton,
  WhatWeOfferSkeleton,
  QualificationStagesSkeleton,
} from "@/components/skeletons";

import WhatWeOfferSection from "../../_components/WhatWeOffer";
import QualificationStagesSection from "../../_components/QualificationStages";

export default function ServicesSection() {
  const { data: cardData, isLoading: cardLoading } = useQuery({
    queryKey: ["InformationTechnologyServiceCard"],
    queryFn: getInformationTechnologyServiceCard,
  });
  const {
    data: qualificationStagesData,
    isLoading: qualificationStagesLoading,
  } = useQuery({
    queryKey: ["InformationTechnologyQualificationStages"],
    queryFn: getInformationTechnologyQualificationStages,
  });
  const { data: heroData, isLoading: heroLoading } = useQuery({
    queryKey: ["HeroInformationTechnology"],
    queryFn: getHeroInformationTechnology,
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
          <WhatWeOfferSection cards={cardData} columns={3} />
        )}
        {qualificationStagesLoading ||
        !qualificationStagesData?.information_technology_stages_card ? (
          <QualificationStagesSkeleton />
        ) : (
          <QualificationStagesSection
            description={qualificationStagesData.description}
            cards={qualificationStagesData.information_technology_stages_card}
          />
        )}
      </GifBackground>
    </>
  );
}
