const AimSkeleton = () => (
  <div className="w-full min-h-dvh lg:max-w-[1051px] px-2 sm:px-4 lg:px-0 mx-auto py-10 lg:py-16 xl:py-20 flex flex-col gap-4 items-center">
    <div className="h-7 lg:h-8 xl:h-9 w-80 lg:w-96 bg-white/15 rounded-lg animate-pulse" />
    <div className="grid gap-5 lg:grid-cols-2">
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="w-full min-w-[310px] sm:min-w-[470px] h-[280px] relative overflow-hidden border border-white/10 bg-white/15 rounded-2xl animate-pulse"
        >
          <div className="h-full w-full bg-white/15 animate-pulse" />
        </div>
      ))}
    </div>
    <div className="my-4 text-center grid gap-4 w-full max-w-4xl">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={`h-7 lg:h-8 xl:h-9 bg-white/15 rounded-lg animate-pulse mx-auto ${
            index === 0 ? "w-full" : index === 1 ? "w-5/6" : "w-3/4"
          }`}
        />
      ))}
    </div>
  </div>
);
export default AimSkeleton;
