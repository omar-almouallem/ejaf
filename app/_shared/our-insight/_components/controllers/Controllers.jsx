"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Controllers({ prevRef, nextRef }) {
  return (
    <div className="w-full xl:max-w-[1200px] mx-auto flex justify-between items-center mb-8 md:mb-4 lg:-mt-5">
      <button
        ref={prevRef}
        className="w-13 h-13 flex justify-center items-center bg-slider-bg text-main-color border border-slider-btn-border rounded-full cursor-pointer hover:bg-main-color hover:shadow-slider-btn-shadow hover:text-neutral-900 transition-all duration-300"
        role="button"
        aria-label="button to go backwards in the slider"
      >
        <ChevronLeft className="-translate-x-0.5" />
      </button>
      <button
        ref={nextRef}
        className="w-13 h-13 flex justify-center items-center bg-slider-bg text-main-color border border-slider-btn-border rounded-full cursor-pointer hover:bg-main-color hover:shadow-slider-btn-shadow hover:text-neutral-900 transition-all duration-300"
        role="button"
        aria-label="button to go forwards in the slider"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
