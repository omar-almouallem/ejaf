import { dateFormatter } from "@/utils/dateFormatter";
import Image from "next/image";
import Link from "next/link";

export default function Slide({
  id,
  image: [
    {
      size: [width, height],
      src: [url],
      alt,
    },
  ],
  title,
  date,
  summary,
}) {
  return (
    <div className="w-full h-[485px] p-[6px] group rounded-[10px] overflow-hidden shadow-md transition-all duration-300 border border-slider-border hover:border-main-color relative">
      <div className="h-full bg-slider-bg overflow-clip rounded-sm">
        <div className="relative h-[240px] lg:h-[302px] lg:group-hover:h-[240px] transition-all duration-300 ease-in-out overflow-hidden">
          <Image
            src={url}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover rounded-t-md transition-all duration-300"
          />
          <time className="absolute -top-0 -left-0 z-10 flex items-center gap-2 rounded-tl-md rounded-br-[10px] bg-main-color py-1 px-2 text-neutral-100">
            {dateFormatter(date)}
          </time>
        </div>
        <div className="p-[10px] pt-2 lg:group-hover:pt-8 text-neutral-100 flex flex-col gap-2 transition-all duration-300 lg:group-hover:-translate-y-6">
          <h2 className="md:min-h-14 text-main-color text-lg md:text-xl font-semibold md:line-clamp-2">
            {title}
          </h2>
          <p className="md:min-h-[84px] text-lg lg:text-xl font-normal md:line-clamp-3">
            {summary}
          </p>
          <Link
            className="general-button slider mt-3 md:mt-2.5"
            href={`/blog/${id}`}
            role="link"
            aria-label={`read more about ${title}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
