import { ScrollReveal, SlideUp } from "@/app/_animations";
import Image from "next/image";

export default function WeProvide({
  provide: { title, support, additional, image },
}) {
  return (
    <div className="mt-[86px] grid gap-5 md:gap-10 lg:gap-14 w-full">
      <SlideUp delay={0.1} duration={0.4}>
        <h2 className="w-full lg:max-w-[815px] mx-auto text-center text-neutral-100 text-lg lg:text-xl xl:text-2xl">
          {title}
        </h2>
      </SlideUp>
      <div className="w-full lg:max-w-[990px] mx-auto flex flex-col xl:flex-row gap-8 items-center justify-center xl:justify-between">
        <div className="w-full xl:min-w-[478px] mx-auto text-neutral-100 text-lg lg:text-xl xl:text-2xl">
          <ul className="list-disc pl-5 mb-9">
            <ScrollReveal
              staggerChildren={0.15}
              direction="up"
              distance={60}
              delay={0.2}
            >
              {support.map((supp, index) => (
                <li key={`${supp}-${index + 1}`}>{supp}</li>
              ))}
            </ScrollReveal>
          </ul>
          <SlideUp delay={0.1} duration={0.4}>
            <h3 className="font-medium text-lg lg:text-xl xl:text-2xl mb-4">
              Our additional services include:
            </h3>
          </SlideUp>
          <ul className="list-disc pl-5">
            <ScrollReveal
              staggerChildren={0.15}
              direction="up"
              distance={60}
              delay={0.2}
            >
              {additional.map((add, index) => (
                <li key={`${add}-${index + 1}`}>{add}</li>
              ))}
            </ScrollReveal>
          </ul>
        </div>
        <div className="w-full max-w-full md:max-w-[479px] md:min-h-[478px] border border-main-color rounded-2xl overflow-hidden">
          <SlideUp delay={0.1} duration={0.4}>
            <Image
              src={image[0]}
              alt="we provide image"
              className="w-full md:aspect-square object-cover"
              width={479}
              height={478}
            />
          </SlideUp>
        </div>
      </div>
    </div>
  );
}
