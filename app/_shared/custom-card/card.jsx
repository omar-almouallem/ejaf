export default function Cards({ Data }) {
  return (
    <section className="w-full min-h-screen flex flex-col items-center gap-16 bg-cover bg-no-repeat bg-top py-20">
      <div className="flex flex-col items-center gap-16 max-w-[1258px] w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {Data.map((card, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center gap-8 px-5 py-8 rounded-[20px] border border-[#1E1E21] bg-[#001B20] w-full md:max-w-none max-w-full overflow-hidden"
            >
              <div
                className="absolute left-0 bottom-[-34px] opacity-20 w-[80px] h-[220px] sm:w-[115px] sm:h-[311px] z-0"
                style={{
                  background: "url('/assets/service/CardLeft.png')",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="absolute right-0 bottom-[-34px] opacity-20 w-[170px] h-[220px] sm:w-[246px] sm:h-[311px] z-0"
                style={{
                  background: "url('/assets/service/CardReight.png')",
                  backgroundSize: "cover",
                }}
              ></div>

              <div className="z-10 flex flex-col items-center gap-5">
                <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#0081EA]">
                  <span className="text-white text-[20px] font-outfit font-bold">
                    {i + 1}
                  </span>
                </div>

                <p className="text-white text-center font-outfit text-[20px] sm:text-[22px] font-normal">
                  {card.title}
                </p>

                <p className="text-[#C6C6C6] text-center font-outfit text-[14px] sm:text-[15px] font-normal leading-[140%] tracking-[-0.32px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
