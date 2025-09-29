import { Info } from "@/app/_shared";
import { SendMsg } from "../send-msg";
import { SlideUp } from "@/app/_animations";
import { GifBackground } from "@/components/gif-background";

export default async function Hero() {
  return (
    <GifBackground className="min-h-dvh">
      <SlideUp
        delay={0.1}
        duration={0.4}
        className="support-bg py-9 lg:py-12 xl:py-[54px] mb-5"
      >
        <h1 className="w-full leading-relaxed px-2 sm:px-0 sm:max-w-[478px] mx-auto text-6xl sm:text-7xl xl:text-8xl text-transparent bg-clip-text bg-title-bg-gradient text-center font-semibold transition-all duration-300 hover:bg-title-bg-gradient-hover">
          Contact Us
        </h1>
      </SlideUp>
      <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
        <Info className="mb-[38px]" />
        <SendMsg />
      </div>
    </GifBackground>
  );
}
