import { TarotCard } from "@/types/card";
import CardComponent from "./Card";

interface ThreeCardSpreadProps {
  cards: TarotCard[];
  isLoading: boolean;
}

const ThreeCardSpread: React.FC<ThreeCardSpreadProps> = ({
  cards,
  isLoading,
}) => {
  return (
    <div className="flex justify-center items-center">
      {cards.map((card, index) => (
        <div key={card.name_short} className="m-4">
          <h3 className="text-xl font-bold mb-2">
            {index === 0 ? "Past" : index === 1 ? "Present" : "Future"}
          </h3>
          <CardComponent card={card} isLoading={isLoading} resetCards={false} />
        </div>
      ))}
    </div>
  );
};

export default ThreeCardSpread;
