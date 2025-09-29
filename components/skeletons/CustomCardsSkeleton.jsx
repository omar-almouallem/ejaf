export default function CustomCardsSkeleton() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-gray-800 rounded-md p-4 animate-pulse">
          <div className="h-40 bg-gray-700 rounded mb-4"></div>
          <div className="h-6 bg-gray-700 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        </div>
      ))}
    </section>
  );
}
