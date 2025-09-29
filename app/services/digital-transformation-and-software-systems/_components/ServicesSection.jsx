"use client";

import HeroSection from "@/app/_shared/services/Hero";
import { useQuery } from "@tanstack/react-query";
import { GifBackground } from "@/components/gif-background";
import {
  getDigitalTransformationAndSoftwareSystemsServiceCard,
  getDigitalTransformationAndSoftwareSystemsQualificationStages,
  getHeroDigitalTransformationAndSoftwareSystems,
} from "@/requests/services/digital-transformation-and-software-systems";
import {
  HeroSectionServiceSkeleton,
  WhatWeOfferSkeleton,
  QualificationStagesSkeleton,
} from "@/components/skeletons";

import WhatWeOfferSection from "../../_components/WhatWeOffer";
import QualificationStagesSection from "../../_components/QualificationStages";

getHeroDigitalTransformationAndSoftwareSystems;
export default function ServicesSection() {
  const { data: cardData, isLoading: cardLoading } = useQuery({
    queryKey: ["DigitalTransformationAndSoftwareSystemsServiceCard"],
    queryFn: getDigitalTransformationAndSoftwareSystemsServiceCard,
  });
  const {
    data: qualificationStagesData,
    isLoading: qualificationStagesLoading,
  } = useQuery({
    queryKey: ["DigitalTransformationAndSoftwareSystemsQualificationStages"],
    queryFn: getDigitalTransformationAndSoftwareSystemsQualificationStages,
  });
  const { data: heroData, isLoading: heroLoading } = useQuery({
    queryKey: ["HeroDigitalTransformationAndSoftwareSystems"],
    queryFn: getHeroDigitalTransformationAndSoftwareSystems,
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
          logo={heroData.logo[0]}
        />
      )}

      <GifBackground className="services-section xl1300-padding services-layout clip">
        {cardLoading || !cardData ? (
          <WhatWeOfferSkeleton />
        ) : (
          <WhatWeOfferSection cards={cardData} columns={4} />
        )}

        {qualificationStagesLoading || !qualificationStagesData ? (
          <QualificationStagesSkeleton />
        ) : (
          <QualificationStagesSection
            cards={
              qualificationStagesData?.digital_transformation_and_software_systems_stages_card
            }
            description=""
          />
        )}
      </GifBackground>
    </>
  );
}
