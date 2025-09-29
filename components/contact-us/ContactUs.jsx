"use client";

import { Fade, SlideUp } from "@/app/_animations";
import Link from "next/link";
import { GifBackground } from "../gif-background";
import { useQuery } from "@tanstack/react-query";
import { getFooterContact } from "@/requests/shared";
import { ContactUsSkeleton } from "../skeletons";

export default function ContactUs() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["footerContactUs"],
    queryFn: getFooterContact,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <ContactUsSkeleton />;
  }
  if (error) {
    return <div className="text-neutral-100 text-center">{error.message}</div>;
  }
  const { title, btnText } = data;
  return (
    <GifBackground
      className="py-12 sm:py-16 md:pb-40 md:pt-14 overflow-hidden flex justify-center items-center gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 bg-[50%_130%]"
      gifSrc="/assets/shared/contact-us-banner.gif"
      gradientVar={null}
    >
      <div className="w-full sm:max-w-[365px] mx-auto relative flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-9">
        <SlideUp delay={0.1} duration={0.4}>
          <h2 className="font-normal xl:font-medium text-2xl md:text-3xl lg:text-[32px] text-neutral-100 text-center">
            {title}
          </h2>
        </SlideUp>
        <Fade>
          <Link
            href="/contact"
            className="general-button footer"
            role="link"
            aria-label="link to contact us page"
          >
            {btnText}
          </Link>
        </Fade>
      </div>
    </GifBackground>
  );
}
