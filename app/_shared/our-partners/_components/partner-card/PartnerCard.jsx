import Image from "next/image";

export default function PartnerCard({
  image: {
    src,
    alt,
    size: [width, height],
  },
}) {
  return (
    <div className="w-full md:max-w-[200px] mx-auto min-h-28 px-4 grid place-items-center bg-partner-card-bg border border-neutral-100 rounded-[10px] group hover:bg-neutral-100 transition duration-300">
      <Image
        src={src[0]}
        alt={alt}
        className="brightness-0 invert group-hover:filter-none object-contain transition duration-300"
        width={width}
        height={height}
      />
    </div>
  );
}
