import InsightHighlightSection from "./FeaturedCaseStudies/InsightHighlightSection";

export default function CaseStudies() {
  return (
    <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
      <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100 text-center mb-16">
        Featured <span className="text-main-color">Case Studies</span>
      </h2>
      <div className="grid gap-4 justify-center md:grid-cols-2 lg:grid-cols-4"></div>
      <InsightHighlightSection />
    </div>
  );
}
