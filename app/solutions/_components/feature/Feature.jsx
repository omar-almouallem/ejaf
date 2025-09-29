import { SlideUp } from "@/app/_animations";
import { sanitizeHTML } from "@/utils/sanitize";
import Image from "next/image";

export default function Feature({
  title,
  image: {
    src,
    alt,
    size: [width, height],
  },
  description,
  order,
}) {
  const cleanDescription = sanitizeHTML(description);
  return (
    <div className="w-full xl:max-w-[1149px] mx-auto grid gap-5 lg:gap-10 xl:gap-[104px] justify-between items-center lg:grid-cols-2">
      <div className="w-full lg:max-w-[567px] grid gap-5 xl:gap-[25px]">
        <SlideUp delay={0.1} duration={0.4}>
          <h3 className="text-main-color font-medium text-2xl xl:text-[28px]">
            {title}
          </h3>
        </SlideUp>
        <SlideUp delay={0.1} duration={0.4} staggerChildren={0.1}>
          <div
            className="grid gap-[12px] font-medium text-lg text-neutral-100"
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          />
        </SlideUp>
      </div>
      <SlideUp
        delay={0.1}
        duration={0.4}
        className={`flex ${
          order < 0 ? "-order-1" : "-order-1 lg:order-1 lg:justify-end"
        }`}
      >
        <div className="w-full md:max-w-[478px] md:h-[345px] border border-main-color rounded-2xl overflow-clip">
          <Image
            src={src[0]}
            alt={alt}
            className="w-full h-full object-cover"
            width={width}
            height={height}
          />
        </div>
      </SlideUp>
    </div>
  );
}
