import { OfferCard } from "./OfferCard";
import WhatWeOffer from "./WhatWeOfferTitle";

export default function WhatWeOfferSection({ cards, columns = 3 }) {
  const chunkedCards = [];
  for (let i = 0; i < cards.length; i += columns) {
    chunkedCards.push(cards.slice(i, i + columns));
  }

  function getGridColsClass(rowIndex, lastRowLength) {
    const isLastRow = rowIndex === chunkedCards.length - 1;

    if (isLastRow && columns === 3 && lastRowLength === 2) {
      return "grid-cols-1 lg:grid-cols-2";
    }

    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 lg:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-1";
    }
  }

  return (
    <section className="flex max-w-[1256px] flex-col items-center gap-8 mx-auto relative px-2 sm:px-6 lg:px-0">
      <WhatWeOffer />
      <div className="flex flex-col w-full gap-8">
        {chunkedCards.map((row, rowIndex) => {
          const lastRowLength = chunkedCards[chunkedCards.length - 1].length;
          const gridColsClass = getGridColsClass(rowIndex, lastRowLength);
          return (
            <div
              key={rowIndex}
              className={`grid gap-5 w-full ${gridColsClass}`}
            >
              {row.map((card, colIndex) => (
                <OfferCard
                  key={colIndex}
                  icone={card.icone}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
