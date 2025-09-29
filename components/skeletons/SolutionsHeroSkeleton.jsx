const SolutionsHeroSkeleton = () => (
  <section className="py-20 lg:h-dvh lg:-mt-[88px] lg:pt-[88px] relative grid place-items-center">
    <div className="w-full lg:max-w-[854px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 grid gap-[35px] relative z-10">
      <div className="w-full md:max-w-[638px] mx-auto px-4 sm:px-0 animate-pulse space-y-4">
        <div className="h-8 md:h-9 xl:h-10 bg-white/15 rounded-lg w-full mx-auto"></div>
        <div className="h-8 md:h-9 xl:h-10 bg-white/15 rounded-lg w-3/4 mx-auto"></div>
        <div className="h-8 md:h-9 xl:h-10 bg-white/15 rounded-lg w-3/5 mx-auto"></div>
      </div>
      <section className="w-full lg:max-w-[854px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 xl:gap-[40px] text-center">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="h-8 sm:h-9 lg:h-10 bg-white/15 animate-pulse rounded w-20"></div>
              <div className="h-6 bg-white/15 animate-pulse rounded w-24"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </section>
);
export default SolutionsHeroSkeleton;
