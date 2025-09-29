const SkeletonItem = ({ className }) => (
  <div className={`bg-white/15  animate-pulse rounded ${className}`} />
);
const OptionCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 justify-center min-h-[241px] rounded-2xl border border-white/10 py-11 px-14 bg-white/15 animate-pulse">
      <div className="absolute top-6 left-6">
        <SkeletonItem className="w-6 h-6 rounded-full border-2 border-white/10 animate-pulse" />
      </div>
      <SkeletonItem className="w-16 h-16 rounded-xl mx-auto" />
      <SkeletonItem className="h-7 w-24 mx-auto" />
    </div>
  );
};
const MultiStepSkeleton = () => {
  return (
    <div className="w-full lg:max-w-[832px] mx-auto">
      <div className="mb-8">
        <SkeletonItem className="h-6 lg:h-7 xl:h-8 w-64 lg:w-80" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <OptionCardSkeleton />
        <OptionCardSkeleton />
      </div>
      <div className="flex justify-between items-center gap-5 pt-5">
        <SkeletonItem className="h-12 w-30 ml-auto rounded-full" />
      </div>
    </div>
  );
};
export default MultiStepSkeleton;
