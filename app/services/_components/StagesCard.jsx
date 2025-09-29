export const StageCard = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-start gap-3 p-[20px] w-full max-w-[406px] border border-[#001114] bg-[#001B20] rounded-[16px]">
      <div className="flex items-center gap-3 w-full">
        <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#0081EA]">
          <span className="text-white text-[20px] font-outfit font-bold">
            {number}
          </span>
        </div>
        <p className="flex-1 text-[#0081EA] font-outfit text-[20px] font-bold">
          {title}
        </p>
      </div>
      <p className="text-[#D5D5E6] text-[16px] font-outfit font-normal">
        {description}
      </p>
    </div>
  );
};
