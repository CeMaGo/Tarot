// src/components/Card.tsx
import { TarotCard } from "@/types/card";
import { useState } from "react";

interface CardProps {
  card: TarotCard;
}

const CardComponent: React.FC<CardProps> = ({ card }) => {
  const [showMeanings, setShowMeanings] = useState(false);
  const [isReversed, setIsReversed] = useState(Math.random() < 0.5); // Simulate reversed state

  const toggleMeanings = () => {
    setShowMeanings(!showMeanings);
  };

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg p-4 m-2 ${
        isReversed ? "bg-gray-400" : "bg-white"
      }`}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card.name}</div>
        <p
          className={`text-sm ${
            isReversed ? "text-red-500" : "text-green-500"
          }`}
        >
          {isReversed ? "Reversed" : "Upright"}
        </p>
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={toggleMeanings}
        >
          {showMeanings ? "Hide Meanings" : "Show Meanings"}
        </button>
        {showMeanings && (
          <div>
            <p className="text-gray-700 text-base">
              <strong>Upright:</strong> {card.meaning_up}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Reversed:</strong> {card.meaning_rev}
            </p>
            <p className="text-gray-700 text-base">{card.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
