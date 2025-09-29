import { Info } from "@/app/_shared";
import { MultiStepForm } from "../multi-step-form";
import { SlideUp } from "@/app/_animations";
import { GifBackground } from "@/components/gif-background";

export default function Hero() {
  return (
    <GifBackground className="min-h-dvh lg:min-h-screen">
      <SlideUp
        delay={0.1}
        duration={0.4}
        className="support-bg py-9 lg:py-12 xl:py-[54px] mb-5"
      >
        <h1 className="w-full leading-relaxed px-2 sm:px-0 sm:max-w-[478px] mx-auto text-6xl sm:text-7xl xl:text-8xl text-transparent bg-clip-text bg-title-bg-gradient text-center font-semibold transition-all duration-300 hover:bg-title-bg-gradient-hover">
          Support
        </h1>
      </SlideUp>
      <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
        <MultiStepForm />
        <Info className="mt-12 lg:mt-[164px] pb-6" />
      </div>
    </GifBackground>
  );
}
