import Image from "next/image";

const HeroSection = ({ title, description, image, logo }) => {
  return (
    <section className="relative w-dvw py-15 sm:py-10 md:py-15 lg:-mt-[88px] lg:pt-40 lg:pb-28 bg-hero-radial-gradient grid place-items-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/assets/shared/banner.webm" type="video/webm" />
        <source src="/assets/shared/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-12 xl:gap-[110px]">
        <div className="w-full md:max-w-[608px] text-neutral-50 z-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-neutral-50 mx-auto md:mx-0 max-w-[90%] md:max-w-full">
            {description}
          </p>
        </div>
        <div
          className="relative w-[300px] sm:w-[360px] md:w-[448px] h-[260px] sm:h-[320px] md:h-[376px] shrink-0 rounded-[112px_0px] bg-cover bg-center bg-no-repeat z-10 xl:mr-12"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute bottom-2 right-0 sm:right-[-10px] w-[48px] sm:w-[56px] md:w-[64px] h-[48px] sm:h-[56px] md:h-[64px] bg-[#00414E] rounded-[17px] flex items-center justify-center">
            <Image src={logo} alt="icon" width={32} height={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
