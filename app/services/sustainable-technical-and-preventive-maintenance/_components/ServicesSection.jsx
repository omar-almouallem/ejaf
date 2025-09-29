"use client";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "@/app/_shared/services/Hero";
import { GifBackground } from "@/components/gif-background";
import {
  getSustainableTechnicalAndPreventiveMaintenanceServiceCard,
  getSustainableTechnicalAndPreventiveMaintenanceQualificationStages,
  getHeroSustainableTechnicalAndPreventiveMaintenance,
} from "@/requests/services/sustainable-technical-and-preventive-maintenance";
import {
  HeroSectionServiceSkeleton,
  WhatWeOfferSkeleton,
  QualificationStagesSkeleton,
} from "@/components/skeletons";

import WhatWeOfferSection from "../../_components/WhatWeOffer";
import QualificationStagesSection from "../../_components/QualificationStages";

export default function ServicesSection() {
  const { data: cardData, isLoading: cardLoading } = useQuery({
    queryKey: ["SustainableTechnicalAndPreventiveMaintenanceServiceCard"],
    queryFn: getSustainableTechnicalAndPreventiveMaintenanceServiceCard,
  });

  const {
    data: qualificationStagesData,
    isLoading: qualificationStagesLoading,
  } = useQuery({
    queryKey: [
      "SustainableTechnicalAndPreventiveMaintenanceQualificationStages",
    ],
    queryFn: getSustainableTechnicalAndPreventiveMaintenanceQualificationStages,
  });
  const { data: heroData, isLoading: heroLoading } = useQuery({
    queryKey: ["HeroSustainableTechnicalAndPreventiveMaintenance"],
    queryFn: getHeroSustainableTechnicalAndPreventiveMaintenance,
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
        !qualificationStagesData?.sustainable_technical_and_preventive_maintenance_stages_card ? (
          <QualificationStagesSkeleton />
        ) : (
          <QualificationStagesSection
            description=""
            cards={
              qualificationStagesData.sustainable_technical_and_preventive_maintenance_stages_card
            }
          />
        )}
      </GifBackground>
    </>
  );
}
