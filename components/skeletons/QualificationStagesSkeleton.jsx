
export default function QualificationStagesSkeleton() {
    return (
      <div className="flex flex-col gap-6 w-full animate-pulse">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-24 bg-gray-800 rounded-lg shadow"
          />
        ))}
      </div>
    );
  }
  