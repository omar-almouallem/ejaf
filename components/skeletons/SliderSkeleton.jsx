const SliderSkeleton = () => {
  return (
    <div className="w-full mt-8 md:mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-800/30 rounded-lg p-6 animate-pulse"
          >
            <div className="w-full h-48 md:h-56 bg-white/15 rounded-lg mb-4"></div>
            <div className="space-y-2 mb-3">
              <div className="h-6 bg-white/15 rounded w-3/4"></div>
              <div className="h-6 bg-white/15 rounded w-1/2"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-4 bg-white/10 rounded w-5/6"></div>
              <div className="h-4 bg-white/10 rounded w-4/5"></div>
              <div className="h-4 bg-white/10 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SliderSkeleton;
