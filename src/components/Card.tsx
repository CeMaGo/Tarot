// src/components/Card.tsx
import { Card } from "@/types/card";

interface CardProps {
  card: Card;
}

const CardComponent: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <img className="w-full" src={card.image} alt={card.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card.name}</div>
        <p className="text-gray-700 text-base">{card.uprightMeaning}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {card.keywords.map((keyword) => (
          <span
            key={keyword}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
