const FeatureSkeleton = ({ order }) => (
  <div className="w-full xl:max-w-[1149px] mx-auto grid gap-5 lg:gap-10 xl:gap-[104px] justify-between items-center lg:grid-cols-2">
    <div className="w-full lg:max-w-[567px] grid gap-5 xl:gap-[25px]">
      <div className="animate-pulse">
        <div className="h-8 xl:h-9 bg-white/15 rounded-lg w-3/4"></div>
      </div>
      <div className="animate-pulse grid gap-1">
        <div className="h-5 bg-white/15 rounded w-5/6"></div>
        <div className="h-5 bg-white/15 rounded w-4/5"></div>
        <div className="h-5 bg-white/15 rounded w-3/4 mb-4"></div>
        <div className="h-5 bg-white/15 rounded w-5/6"></div>
        <div className="h-5 bg-white/15 rounded w-4/5"></div>
        <div className="h-5 bg-white/15 rounded w-3/4"></div>
      </div>
    </div>
    <div
      className={`flex ${
        order < 0 ? "-order-1" : "-order-1 lg:order-1 lg:justify-end"
      }`}
    >
      <div className="w-full md:max-w-[478px] md:h-[345px] border border-white/10 rounded-2xl overflow-clip animate-pulse">
        <div className="w-full h-full bg-white/15 animate-pulse"></div>
      </div>
    </div>
  </div>
);
const WhyUsSkeleton = () => (
  <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 grid gap-10 xl:gap-[60px]">
    <FeatureSkeleton order={1} />
    <FeatureSkeleton order={-1} />
  </div>
);
export default WhyUsSkeleton;
