const HomepageHeroSkeleton = () => (
  <section className="w-dvw py-15 sm:py-10 lg:min-h-dvh xl:min-h-dvh lg:-mt-[88px] lg:pt-40 lg:pb-[70px]">
    <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 h-full flex flex-col justify-center items-center text-center gap-4 xl:gap-2">
      <div className="w-30 xl:w-[185px] h-[43px] xl:h-[89px] bg-white/15 animate-pulse rounded"></div>
      <section className="w-full md:max-w-[625px] mx-auto space-y-4 xl:space-y-14 mb-4 xl:mb-30">
        <div className="space-y-4 xl:space-y-14">
          <div className="w-80 xl:w-96 h-6 xl:h-8 bg-white/15 animate-pulse rounded mx-auto"></div>
          <div className="w-72 xl:w-88 h-6 xl:h-8 bg-white/15 animate-pulse rounded mx-auto"></div>
        </div>
        <div className="min-w-fit sm:min-w-[500px] lg:max-w-[525px] mx-auto flex gap-[10px] justify-center">
          <div className="w-32 xl:w-48 h-8 xl:h-12 bg-white/15 animate-pulse rounded"></div>
          <div className="w-24 xl:w-36 h-8 xl:h-12 bg-white/15 animate-pulse rounded"></div>
        </div>
      </section>
    </div>
  </section>
);
export default HomepageHeroSkeleton;
