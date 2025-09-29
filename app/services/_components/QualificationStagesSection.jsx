import { StageCard } from "./StagesCard";
import { SectionHeader } from "./SectionHeader";

export default function QualificationStagesSection({
  description,
  stagesCardData,
}) {
  return (
    <section className="flex flex-col items-center gap-16 max-w-[1256px] w-full mx-auto px-4 sm:px-6 lg:px-0">
      <SectionHeader description={description} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {stagesCardData.map((card, i) => (
          <StageCard
            key={i}
            number={card.number}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
