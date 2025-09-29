import InsightHero from "./_components/InsightHero";
import CaseStudies from "./_components/CaseStudies";
import { GifBackground } from "@/components/gif-background";

export const metadata = {
  title: "Insight",
  description: "Insight page ",
};

export default function Insight() {
  return (
    <main>
      <InsightHero />
      <GifBackground className="w-full min-h-screen flex flex-col items-center gap-16 py-10 lg:py-20 clip">
        <CaseStudies />
      </GifBackground>
    </main>
  );
}
