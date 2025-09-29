const SkeletonPulse = ({ className = "" }) => (
  <div className={`animate-pulse bg-white/15 rounded ${className}`} />
);
const SelectorSkeleton = () => (
  <div className="w-full sm:max-w-[444px] xl:max-w-[820px] mx-auto flex gap-12 flex-col xl:flex-row justify-center xl:justify-between items-center my-14">
    <div className="w-full px-2 sm:px-0 sm:min-w-[328px] grid gap-2">
      {[1, 2, 3].map((index) => (
        <SkeletonPulse key={index} className="w-full h-12 rounded-[10px]" />
      ))}
    </div>
    <div className="w-full flex flex-col justify-center items-center gap-4 sm:min-w-[444px] min-h-[278px] border border-white/10 bg-white/15 rounded-[20px] px-2 sm:px-5 xl:px-14 animate-pulse">
      <SkeletonPulse className="h-6 w-3/4 mx-auto" />
      <SkeletonPulse className="h-6 w-full" />
      <SkeletonPulse className="h-6 w-5/6 mx-auto" />
    </div>
  </div>
);
const WeProvideSkeleton = () => (
  <div className="mt-[86px] grid gap-5 md:gap-10 lg:gap-14 w-full">
    <div className="w-full lg:max-w-[815px] mx-auto text-center">
      <SkeletonPulse className="h-8 w-3/4 mx-auto" />
    </div>
    <div className="w-full lg:max-w-[990px] mx-auto flex flex-col xl:flex-row gap-8 items-center justify-center xl:justify-between">
      <div className="w-full xl:min-w-[478px] mx-auto space-y-9">
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="flex items-center space-x-3">
              <SkeletonPulse className="w-3/4 h-6" />
            </div>
          ))}
        </div>
        <SkeletonPulse className="h-9 w-2/3" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="flex items-center space-x-3">
              <SkeletonPulse className="w-3/4 h-6" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-full md:max-w-[479px] md:min-h-[478px] border border-white/10 rounded-2xl overflow-hidden animate-pulse">
        <SkeletonPulse className="w-full h-full md:aspect-square" />
      </div>
    </div>
  </div>
);
const StrategySkeleton = () => (
  <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 my-40">
    <div className="w-full xl:max-w-[815px] mx-auto text-center space-y-4">
      <div className="space-y-2">
        <SkeletonPulse className="h-12 md:h-14 w-4/5 mx-auto" />
      </div>
      <SkeletonPulse className="h-6 lg:h-7 xl:h-8 w-3/4 mx-auto" />
    </div>
    <SelectorSkeleton />
    <WeProvideSkeleton />
  </div>
);

export default StrategySkeleton;
