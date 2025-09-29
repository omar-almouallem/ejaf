import Image from "next/image";
import Link from "next/link";

export default function Card({
  src,
  size: [width, height],
  alt,
  title,
  description,
  address: { type, value },
  focused,
}) {
  let formattedAddress = "";
  switch (type) {
    case "email":
      formattedAddress = `mailto:${value}`;
      break;
    case "phone":
      formattedAddress = `tel:${value}`;
      break;
    default:
      formattedAddress = value;
      break;
  }
  return (
    <div
      className={`support-card group ${
        focused ? "min-h-full lg:min-h-[344px]" : "min-h-full lg:min-h-[278px]"
      }`}
    >
      <Link href={formattedAddress}>
        <Image
          src={src[0]}
          alt={alt}
          width={width}
          height={height}
          className="mx-auto"
        />
        <div className="w-full xl:max-w-[320px] flex flex-col gap-4">
          <h3 className="text-xl sm:text-2xl text-center text-neutral-100 transition-all duration-200 ease-out group-hover:text-main-color">
            {title}
          </h3>
          <p className="text-lg sm:text-base text-center text-neutral-300 transition-all duration-200 ease-out group-hover:text-neutral-100 whitespace-pre-line">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}
