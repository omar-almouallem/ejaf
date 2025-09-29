const ContainerSkeleton = ({ gridSystem, numberCards, showButton }) => (
  <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-4 xl:px-0">
    <div className="w-full lg:max-w-[814px] mx-auto grid gap-5 my-12">
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="h-8 md:h-10 xl:h-12 bg-white/15 rounded w-2/3 animate-pulse"></div>
        </div>
        <div className="flex justify-center">
          <div className="h-5 bg-white/15 rounded w-1/2 animate-pulse"></div>
        </div>
      </div>
    </div>
    <div className={gridSystem}>
      {Array.from({ length: numberCards }).map((_, index) => (
        <div
          key={index}
          className="bg-transparent border border-white/10 rounded-lg p-6 animate-pulse"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 bg-white/15 rounded-lg" />
            <div className="space-y-2 w-full">
              <div className="h-6 bg-white/15 rounded w-4/5 mx-auto"></div>
              <div className="h-6 bg-white/15 rounded w-3/5 mx-auto"></div>
            </div>
            <div className="space-y-3 w-full">
              <div className="h-4 bg-white/15 rounded w-full"></div>
              <div className="h-4 bg-white/15 rounded w-5/6 mx-auto"></div>
              <div className="h-4 bg-white/15 rounded w-4/5 mx-auto"></div>
              <div className="h-4 bg-white/15 rounded w-3/5 mx-auto"></div>
            </div>
            {showButton && (
              <div className="w-full pt-4">
                <div className="h-12 bg-white/15 rounded-full w-40 mx-auto"></div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default ContainerSkeleton;
