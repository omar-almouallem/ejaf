const FeaturesSkeleton = ({
  titleClasses = "text-3xl md:text-4xl xl:text-5xl font-semibold text-neutral-100 text-center mb-[30px]",
  contentWidth = "w-full md:max-w-[762px] mx-auto",
}) => (
  <section className="grid py-16 xl:py-36 place-items-center">
    <div
      className={`px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 relative z-10 ${contentWidth}`}
    >
      <div className={titleClasses}>
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 md:h-10 xl:h-18 bg-white/15 rounded-lg animate-pulse w-3/4"></div>
        </div>
      </div>
      <div className="text-center mt-8 space-y-3">
        <div className="h-6 lg:h-7 xl:h-8 bg-white/15 rounded-lg animate-pulse w-full"></div>
        <div className="h-6 lg:h-7 xl:h-8 bg-white/15 rounded-lg animate-pulse w-4/5 mx-auto"></div>
        <div className="h-6 lg:h-7 xl:h-8 bg-white/15 rounded-lg animate-pulse w-3/5 mx-auto"></div>
      </div>
    </div>
  </section>
);
export default FeaturesSkeleton;
