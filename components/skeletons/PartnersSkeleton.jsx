const PartnersSkeleton = () => (
  <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
    <div className="flex justify-center items-center mb-8 space-x-2">
      <div className="h-8 md:h-10 xl:h-12 bg-white/15 rounded animate-pulse w-32 md:w-50"></div>
    </div>
    <div className="grid gap-2 sm:gap-4 justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {Array.from({ length: 18 }).map((_, index) => (
        <div
          key={index}
          className="w-full md:max-w-[200px] mx-auto min-h-28 px-4 grid place-items-center bg-partner-card-bg border border-white/10 rounded-[10px] animate-pulse"
        ></div>
      ))}
    </div>
  </div>
);
export default PartnersSkeleton;
