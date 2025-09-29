"use client";

import { Card } from "./_components";
import { ScrollReveal } from "@/app/_animations";
import { InfoSkeleton } from "@/components/skeletons";
import { getInfo } from "@/requests/shared";
import { useQuery } from "@tanstack/react-query";

export default function Info({ className = "" }) {
  const {
    data: info,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["info"],
    queryFn: getInfo,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <InfoSkeleton />;
  }
  if (error) {
    return (
      <section className="min-h-dvh">
        <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 h-full flex flex-col justify-center items-center text-center">
          <div className="text-lg text-red-400">{error.message}</div>
        </div>
      </section>
    );
  }
  return (
    <ScrollReveal
      className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-[82px] ${className}`}
      staggerChildren={0.15}
      direction="up"
      distance={60}
      delay={0.2}
    >
      {info?.map((information) => (
        <Card key={information.id} {...information} />
      ))}
    </ScrollReveal>
  );
}
