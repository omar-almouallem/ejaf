import Image from "next/image";
import Link from "next/link";

export default function Card({
  src,
  alt,
  size: [width, height],
  url,
  title,
  description,
  showButton,
}) {
  return (
    <div className="grid gap-[12px] h-full full sm:max-w-[270px] px-2 sm:px-0 mx-auto">
      <Image
        src={src[0]}
        alt={alt}
        width={width}
        height={height}
        className="mx-auto"
      />
      <h3 className="text-main-color font-semibold text-xl text-center">
        {title}
      </h3>
      <p className="text-neutral-100 text-center text-lg sm:text-base">
        {description}
      </p>
      {showButton && (
        <Link
          href={`/services/${url}`}
          className="w-fit mx-auto general-button service mt-auto"
          role="link"
          aria-label={`link to ${title} page`}
        >
          Learn more
        </Link>
      )}
    </div>
  );
}
