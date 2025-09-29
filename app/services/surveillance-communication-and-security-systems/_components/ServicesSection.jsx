"use client";

import HeroSection from "@/app/_shared/services/Hero";
import { useQuery } from "@tanstack/react-query";
import { GifBackground } from "@/components/gif-background";
import {
  getSurveillanceCommunicationAndSecuritySystemsServiceCard,
  getSurveillanceCommunicationAndSecuritySystemsQualificationStages,
  getHeroSurveillanceCommunicationAndSecuritySystems,
} from "@/requests/services/surveillance-communication-and-security-systems";
import {
  HeroSectionServiceSkeleton,
  WhatWeOfferSkeleton,
  QualificationStagesSkeleton,
} from "@/components/skeletons";

import WhatWeOfferSection from "../../_components/WhatWeOffer";
import QualificationStagesSection from "../../_components/QualificationStages";

export default function ServicesSection() {
  const { data: cardData, isLoading: cardLoading } = useQuery({
    queryKey: ["SurveillanceCommunicationAndSecuritySystemsServiceCard"],
    queryFn: getSurveillanceCommunicationAndSecuritySystemsServiceCard,
  });
  const {
    data: qualificationStagesData,
    isLoading: qualificationStagesLoading,
  } = useQuery({
    queryKey: [
      "SurveillanceCommunicationAndSecuritySystemsQualificationStages",
    ],
    queryFn: getSurveillanceCommunicationAndSecuritySystemsQualificationStages,
  });
  const { data: heroData, isLoading: heroLoading } = useQuery({
    queryKey: ["HeroSurveillanceCommunicationAndSecuritySystems"],
    queryFn: getHeroSurveillanceCommunicationAndSecuritySystems,
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
        !qualificationStagesData?.surveillance_communication_and_security_systems_stages_card ? (
          <QualificationStagesSkeleton />
        ) : (
          <QualificationStagesSection
            description={qualificationStagesData.description}
            cards={
              qualificationStagesData.surveillance_communication_and_security_systems_stages_card
            }
          />
        )}
      </GifBackground>
    </>
  );
}
