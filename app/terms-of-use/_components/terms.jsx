"use client";
import { useQuery } from "@tanstack/react-query";
import Hero from "../../_shared/hero/hero";
import Cards from "../../_shared/custom-card/card";
import { getTermsOfUseHero } from "@/requests/terms-of-use/termsOfUseHero";
import { getTermsOfUseCard } from "@/requests/terms-of-use/termsOfUseCard";
import {
  CustomCardsSkeleton,
  CustomHeroSkeleton,
} from "@/components/skeletons";

export default function Terms() {
  const { data: heroData, isLoading: heroLoading } = useQuery({
    queryKey: ["TermsOfUseHero"],
    queryFn: getTermsOfUseHero,
  });
  const { data: cardData, isLoading: cardLoading } = useQuery({
    queryKey: ["TermsOfUseCard"],
    queryFn: getTermsOfUseCard,
  });

  return (
    <>
      {heroLoading || !heroData ? (
        <CustomHeroSkeleton />
      ) : (
        <Hero title={heroData.title} description={heroData.description} />
      )}

      {cardLoading || !cardData ? (
        <CustomCardsSkeleton />
      ) : (
        <Cards Data={cardData} />
      )}
    </>
  );
}
