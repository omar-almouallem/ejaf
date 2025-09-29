"use client";

import { useState, useMemo } from "react";
import { ScrollReveal, SlideUp } from "@/app/_animations";

export default function Selector({ selector: { option, description } }) {
  const strategies = useMemo(() => {
    if (!option || !description) {
      return [];
    }
    return option.map((title, index) => ({
      id: index + 1,
      title,
      content: description[index],
    }));
  }, [option]);
  const [activeStrategy, setActiveStrategy] = useState(
    () => strategies[0] || null
  );
  const handleStrategyClick = (strategy) => {
    setActiveStrategy(strategy);
  };
  if (strategies.length === 0) {
    return <div>No strategies available</div>;
  }
  return (
    <div className="w-full sm:max-w-[444px] xl:max-w-[820px] mx-auto flex gap-12 flex-col xl:flex-row justify-center xl:justify-between items-center my-14">
      <ScrollReveal
        className="w-full px-2 sm:px-0 sm:min-w-[328px] text-neutral-100 grid gap-2"
        staggerChildren={0.15}
        direction="up"
        distance={60}
        delay={0.2}
      >
        {strategies.map((strategy) => (
          <button
            key={strategy.id}
            onClick={() => handleStrategyClick(strategy)}
            className={`
              w-full px-4 py-3 text-lg xl:text-lg rounded-[10px] transition-all ease-out duration-300 hover:bg-main-color hover:text-neutral-900 cursor-pointer
              ${
                activeStrategy?.id === strategy.id
                  ? "bg-main-color text-neutral-900 pointer-events-none"
                  : "text-neutral-100"
              }
            `}
            role="button"
            aria-label={`show ${strategy.title} info`}
          >
            {strategy.title}
          </button>
        ))}
      </ScrollReveal>
      <SlideUp
        delay={0.1}
        duration={0.4}
        className="w-full sm:min-w-[444px] min-h-[278px] border border-selector-border bg-[url(/assets/about/card-banner.png)] bg-cover relative rounded-[20px] px-2 sm:px-5 xl:px-14 text-lg lg:text-xl xl:text-2xl text-center text-neutral-100 grid place-items-center overflow-hidden"
      >
        {activeStrategy?.content}
      </SlideUp>
    </div>
  );
}
