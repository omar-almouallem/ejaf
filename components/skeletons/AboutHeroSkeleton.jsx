const AboutHeroSkeleton = () => (
  <div className="main-layout w-dvw py-10 sm:py-5 lg:h-dvh lg:-mt-[88px] lg:pt-[88px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 pt-6 pb-0 md:py-10 lg:py-0 h-full gap-8 grid items-center lg:grid-cols-2">
    <section className="grid gap-5 lg:gap-9">
      <div className="w-30 h-16 bg-white/15 rounded-md animate-pulse mx-auto md:mx-0" />
      <div className="space-y-3">
        <div className="h-6 lg:h-7 xl:h-8 bg-white/15 rounded animate-pulse" />
        <div className="h-6 lg:h-7 xl:h-8 bg-white/15 rounded animate-pulse w-4/5" />
        <div className="h-6 lg:h-7 xl:h-8 bg-white/15 rounded animate-pulse w-3/4" />
      </div>
    </section>
    <div className="min-h-96 lg:mt-0 grid place-items-center">
      <div className="w-1/2 aspect-square bg-white/15 rounded-2xl animate-pulse" />
    </div>
  </div>
);

export default AboutHeroSkeleton;
