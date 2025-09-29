import Image from "next/image";

export const InfoSection = ({
  number,
  image: {
    src,
    size: [width, height],
  },
  title,
  cards,
}) => {
  return (
    <section className="w-full xl:max-w-[1253px] mx-auto">
      <h2 className="text-7xl md:text-8xl font-bold pb-[10px] text-center leading-none bg-gradient-to-b from-main-color to-secondary-color bg-clip-text text-transparent">
        {number}
      </h2>
      <div className="w-full xl:max-w-[374px] mx-auto flex flex-col items-center gap-[21px]">
        <div className="w-full max-w-[113px] mx-auto min-h-[48px] flex items-center justify-center">
          <Image
            src={src}
            alt="icon"
            width={width}
            height={height}
            className="h-full object-contain"
          />
        </div>
        <p className="self-stretch text-center text-[20px] font-bold leading-normal text-Line-Light">
          {title}
        </p>
      </div>
      <div className="w-full xl:max-w-[1134px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-20 mt-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1 w-full max-w-[323px] mx-auto"
          >
            <div className="max-w-[60px] aspect-square flex items-center justify-center mb-3">
              <Image
              src={card.icon}
              alt="Icon"
              width={60}
              height={60}
            />,
            </div>
            <h3 className="text-lg sm:text-base font-bold text-center text-Line-Light font-outfit whitespace-pre-line mb-0">
              {card.title}
            </h3>
            <p className="text-lg sm:text-base font-light text-center text-Line-Light font-outfit whitespace-pre-line">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
