export default function SectionHeader() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <h2 className="text-center text-neutral-50 text-3xl md:text-4xl xl:text-5xl font-bold">
        What <span className="text-main-color">We Offer</span>
      </h2>
      <p className="text-neutral-50 text-center text-lg sm:text-xl lg:text-2xl font-normal">
        Our Services Include
      </p>
    </div>
  );
}
