import { FeaturesContainer, OurInsight, CardContainer } from "../_shared";
import { Hero, WhyUs } from "./_components";
import { getSolutionsHero, getSolutionsWhy } from "@/requests/solutions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export const metadata = {
  title: "Solutions",
  description:
    "Cloud computing on-demand availability of computer system resources",
};

export default async function Solutions() {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["solutionsHero"],
      queryFn: getSolutionsHero,
    }),
    queryClient.prefetchQuery({
      queryKey: ["solutionsWhy"],
      queryFn: getSolutionsWhy,
    }),
  ]);
  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Hero />
        <WhyUs />
        <CardContainer
          titleClasses="text-2xl md:text-[28px] font-normal text-center"
          subtitleClasses="text-lg md:text-2xl font-normal text-center text-neutral-100"
          gridSystem="w-full lg:max-w-[890px] mx-auto grid gap-4 lg:gap-[18px] md:grid-cols-2 lg:grid-cols-3"
          dataId="solutions"
          showButton={false}
        />
        <FeaturesContainer
          titleClasses="font-bold text-2xl md:text-[28px] text-neutral-100 text-center mb-[30px]"
          dataId="advantages"
        />
        <OurInsight />
      </HydrationBoundary>
    </main>
  );
}
