export const OfferCard = ({ icone, title, description }) => {
  return (
    <div className="offer-card relative flex flex-col items-center gap-8 px-5 py-8 rounded-[20px] border border-[#1E1E21] bg-[#001B20] w-full overflow-hidden">
      <div className="flex w-[60px] h-[60px] items-center justify-center">
        <img src={icone} alt="icon" className="w-[60px] h-[60px]" />
      </div>
      <h3 className="text-neutral-50 text-center text-xl sm:text-2xl font-normal">
        {title}
      </h3>
      <p className="text-[#C6C6C6] text-center font-outfit text-lg sm:text-base font-normal">
        {description}
      </p>
    </div>
  );
};
