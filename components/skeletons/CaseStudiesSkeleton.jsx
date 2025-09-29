// components/skeletons/CaseStudiesSkeleton.tsx

export default function CaseStudiesSkeleton() {
  return (
    <div className="flex flex-col items-center gap-[66px]">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="w-full max-w-5xl animate-pulse flex flex-col gap-6"
        >
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-[113px] bg-neutral-700 rounded"></div>
            <div className="flex-1 h-6 bg-neutral-700 rounded"></div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, j) => (
              <div
                key={j}
                className="p-4 border border-neutral-600 rounded bg-neutral-800 flex flex-col gap-3"
              >
                <div className="h-12 w-12 bg-neutral-700 rounded-full" />
                <div className="h-4 w-3/4 bg-neutral-700 rounded" />
                <div className="h-3 w-full bg-neutral-700 rounded" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
