import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { CardContainer, FeaturesContainer, OurPartners } from "../_shared";
import { Hero, OurAim, OurStrategy } from "./_components";
import { getAboutAim, getAboutHero, getAboutStrategy } from "@/requests/about";

export const metadata = {
  title: "About Us",
  description:
    "EJAF technology is one of the most trusted security and automation solutions companies in Iraq, spreading is 3 domestic locations (Erbil, Baghdad and Basrah) which helps in spreading our services all across Iraq.",
};

export default async function About() {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["aboutHero"],
      queryFn: getAboutHero,
    }),
    queryClient.prefetchQuery({
      queryKey: ["aboutAim"],
      queryFn: getAboutAim,
    }),
    queryClient.prefetchQuery({
      queryKey: ["aboutStrategy"],
      queryFn: getAboutStrategy,
    }),
  ]);
  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Hero />
        <OurAim />
        <FeaturesContainer
          titleClasses="font-bold text-3xl md:text-4xl text-neutral-100 text-center mb-[30px]"
          contentWidth="max-w-dvw lg:max-w-[910px] mx-auto"
          dataId="vision"
        />
        <CardContainer
          title="Our Services"
          highlightWords={["Services"]}
          dataId="services"
          id="services"
        />
        <OurStrategy />
        <OurPartners />
      </HydrationBoundary>
    </main>
  );
}
