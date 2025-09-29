const SkeletonItem = ({ className }) => (
  <div className={`bg-white/15 animate-pulse rounded ${className}`} />
);

const FooterSkeleton = () => {
  return (
    <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 py-5 xl:pt-11 bg-hero-radial-gradient bg-left">
      <section className="pb-7">
        <div className="flex gap-4 flex-col lg:flex-row lg:justify-between">
          <div className="space-y-5">
            <div className="space-y-5">
              <SkeletonItem className="w-32 xl:w-[175px] h-[43px] xl:h-[87px]" />
              <div className="flex gap-4">
                {[...Array(4)].map((_, i) => (
                  <SkeletonItem
                    key={i}
                    className="w-10 h-10 rounded-full border border-white/10"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 xl:gap-8">
              {[...Array(5)].map((_, i) => (
                <SkeletonItem key={i} className="h-6 xl:h-7 w-16 xl:w-20" />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-end gap-4 flex-col sm:flex-row">
            <div className="space-y-4 w-full xl:max-w-[260px]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-[10px]">
                  <SkeletonItem className="min-w-10 h-10 xl:min-w-11 xl:h-11 rounded-full" />
                  <SkeletonItem className="h-5 w-full xl:w-[205px]" />
                </div>
              ))}
            </div>
            <div className="space-y-4 w-full xl:max-w-[200px]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-[10px]">
                  <SkeletonItem className="min-w-10 h-10 xl:min-w-11 xl:h-11 rounded-full" />
                  <SkeletonItem className="h-5 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-white/10 pt-7">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center flex-wrap gap-7">
            <SkeletonItem className="h-5 w-24" />
            <SkeletonItem className="h-5 w-24" />
          </div>
          <SkeletonItem className="h-5 w-40" />
        </div>
      </section>
    </div>
  );
};
export default FooterSkeleton;
