const Hero = ({ title, description }) => {
  return (
    <section className="relative w-full min-h-screen md:h-screen overflow-hidden lg:-mt-0 lg:pt-20 px-6 md:px-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-[110px] bg-hero-radial-gradient">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/assets/banner.webm" type="video/webm" />
        <source src="/assets/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="max-w-full md:mt-24 md:max-w-[608px] text-white z-10 text-center  md:text-left order-2 md:order-1 mt-4 md:mt-0">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 sm:mb-6 font-outfit">
          {title}
        </h1>
        <p className="text-lg sm:text-[24px] font-[400] font-outfit max-w-full md:max-w-[608px] mx-auto md:mx-0">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Hero;
