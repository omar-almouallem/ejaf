const StatsSkeleton = () => (
  <section className="w-full lg:max-w-[854px] mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 xl:gap-[40px] text-center">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center gap-2"
        >
          <div className="h-10 sm:h-9 lg:h-10 bg-white/15 animate-pulse rounded w-20"></div>
          <div className="h-8 bg-white/15 animate-pulse rounded w-24"></div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSkeleton;
