import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Hero } from "./_components";
import {
  FeaturesContainer,
  OurPartners,
  OurInsight,
  CardContainer,
} from "./_shared";
import { getHomeHero } from "@/requests/homepage/getHomeHero";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["homeHero"],
    queryFn: getHomeHero,
  });
  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Hero />
        <CardContainer dataId="services" id="services" />
        <FeaturesContainer
          contentWidth="w-full lg:max-w-[954px] mx-auto"
          dataId="success"
        />
        <OurPartners />
        <OurInsight />
      </HydrationBoundary>
    </main>
  );
}
