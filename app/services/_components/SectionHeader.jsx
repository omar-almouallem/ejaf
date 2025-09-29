export default function SectionHeader({ description }) {
  return (
    <div className="flex flex-col items-center text-center mb-4">
      <h2 className="text-neutral-50 text-3xl md:text-4xl xl:text-5xl font-bold max-w-[468px]">
        Qualification
        <span className="text-main-color"> Stages</span>
      </h2>
      <p className="text-neutral-50 text-lg sm:text-2xl font-normal max-w-[438px] mt-2">
        {description}
      </p>
    </div>
  );
}
