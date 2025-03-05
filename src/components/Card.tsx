// src/components/Card.tsx
import { TarotCard } from "@/types/card";

interface CardProps {
  card: TarotCard;
}

const CardComponent: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card.name}</div>
        <p className="text-gray-700 text-base">{card.meaning_up}</p>
        <p className="text-gray-700 text-base">{card.meaning_rev}</p>
        <p className="text-gray-700 text-base">{card.desc}</p>
      </div>
    </div>
  );
};

export default CardComponent;
