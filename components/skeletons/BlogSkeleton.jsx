const BlogSkeleton = () => {
  return (
    <div className="max-w-[1256px] w-full flex justify-center pb-[160px] pt-[50px] md:pt-[80px] sm:pt-[10px] flex-col gap-8 mx-auto">
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-full max-w-[832px]">
          <div className="w-full h-[400px] md:h-[500px] bg-white/15 rounded-[12px] animate-pulse"></div>
        </div>
        <div className="flex-1 flex flex-col gap-4 px-4 md:px-0 max-w-[832px] w-full">
          <div className="space-y-2">
            <div className="h-8 md:h-10 bg-white/15 rounded w-3/4 animate-pulse"></div>
            <div className="h-8 md:h-10 bg-white/15 rounded w-1/2 animate-pulse"></div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-4 md:px-0 w-full max-w-[832px] mx-auto animate-pulse">
          <div className="h-8 bg-white/15 rounded w-5/6 mb-5"></div>
          <div className="h-8 bg-white/15 rounded w-4/5"></div>
          <div className="h-8 bg-white/15 rounded w-3/4"></div>
          <div className="h-8 bg-white/15 rounded w-2/3"></div>
          <div className="h-8 bg-white/15 rounded w-5/6 mb-5"></div>
          <div className="h-8 bg-white/15 rounded w-4/5"></div>
          <div className="h-8 bg-white/15 rounded w-3/4"></div>
          <div className="h-8 bg-white/15 rounded w-2/3"></div>
          <div className="h-8 bg-white/15 rounded w-5/6 mb-5"></div>
          <div className="h-8 bg-white/15 rounded w-4/5"></div>
          <div className="h-8 bg-white/15 rounded w-3/4"></div>
          <div className="h-8 bg-white/15 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
};
export default BlogSkeleton;
