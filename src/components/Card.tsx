// src/components/Card.tsx
import { TarotCard } from "@/types/card";
import { BARREL_OPTIMIZATION_PREFIX } from "next/dist/shared/lib/constants";
import { useState } from "react";

interface CardProps {
  card: TarotCard;
}

const CardComponent: React.FC<CardProps> = ({ card }) => {
  const [showMeanings, setShowMeanings] = useState(false);

  const toggleMeanings = () => {
    setShowMeanings(!showMeanings);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card.name}</div>
        <button
          className="bg-purple-950 text-slate-300 hover:text-slate-500 font-bold py-2 px-4 rounded m-2"
          onClick={toggleMeanings}
        >
          {showMeanings ? "Hide Meanings" : "Show Meanings"}
        </button>
        {showMeanings && (
          <div>
            <p className="text-gray-500 text-base">
              <strong>Upright:</strong> {card.meaning_up}
            </p>
            <p className="text-gray-500 text-base">
              <strong>Reversed:</strong> {card.meaning_rev}
            </p>
            <p className="text-gray-500 text-base">{card.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
