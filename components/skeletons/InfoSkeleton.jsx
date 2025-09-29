const InfoSkeleton = () => {
  return (
    <div className="main-layout mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-[82px] py-20 text-center">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-full xl:max-w-[364px] rounded-[20px] border px-[22px] py-8 lg:py-[60px] grid gap-4 lg:gap-[30px] border-white/10 bg-white/15 animate-pulse"
        >
          <div className="w-16 h-16 mx-auto bg-white/15 rounded animate-pulse"></div>
          <div className="w-32 h-7 mx-auto bg-white/15 rounded animate-pulse"></div>
          <div className="space-y-3">
            {i === 1 ? (
              <div className="w-40 h-5 mx-auto bg-white/15 rounded animate-pulse"></div>
            ) : i === 2 ? (
              <>
                <div className="w-48 h-4 mx-auto bg-white/15 rounded animate-pulse"></div>
                <div className="w-44 h-4 mx-auto bg-white/15 rounded animate-pulse"></div>
                <div className="w-40 h-4 mx-auto bg-white/15 rounded animate-pulse"></div>
              </>
            ) : (
              <div className="w-36 h-5 mx-auto bg-white/15 rounded animate-pulse"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default InfoSkeleton;
