
export default function WhatWeOfferSkeleton() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full animate-pulse">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-44 bg-gray-800 rounded-xl shadow-md"
          />
        ))}
      </div>
    );
  }
  