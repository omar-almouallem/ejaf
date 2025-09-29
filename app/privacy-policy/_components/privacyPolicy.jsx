"use client";
import { useQuery } from "@tanstack/react-query";
import Hero from "../../_shared/hero/hero";
import Cards from "../../_shared/custom-card/card";
import { getPrivacyPolicyHero } from "@/requests/privacy-policy/privacyPolicyHero";
import { getPrivacyPolicyCard } from "@/requests/privacy-policy/privacyPolicyCard";
import {
  CustomHeroSkeleton,
  CustomCardsSkeleton,
} from "@/components/skeletons";

export default function PrivacyPolicy() {
  const { data: heroData, isLoading: heroLoading } = useQuery({
    queryKey: ["PrivacyPolicyHero"],
    queryFn: getPrivacyPolicyHero,
  });
  const { data: cardData, isLoading: cardLoading } = useQuery({
    queryKey: ["PrivacyPolicyCard"],
    queryFn: getPrivacyPolicyCard,
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
