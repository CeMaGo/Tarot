// src/components/Card.tsx
import { TarotCard } from "@/types/card";
import { useState } from "react";

interface CardProps {
  card: TarotCard | null;
  isLoading: boolean; // Corrected prop type
}

const CardComponent: React.FC<CardProps> = ({ card, isLoading }) => {
  const [showMeanings, setShowMeanings] = useState(false);
  const [isReversed, setIsReversed] = useState(Math.random() < 0.5);

  const toggleMeanings = () => {
    setShowMeanings(!showMeanings);
  };

  if (isLoading) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-2 bg-gray-800 text-white">
        Loading...
      </div>
    );
  }

  if (!card) {
    return null;
  }

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg p-4 m-2 ${
        isReversed ? "bg-gray-700" : "bg-gray-800"
      } text-white`}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card.name}</div>
        <p
          className={`text-sm ${
            isReversed ? "text-red-400" : "text-green-400"
          }`}
        >
          {isReversed ? "Reversed" : "Upright"}
        </p>
        <button
          className="text-blue-400 hover:text-blue-300 mt-2"
          onClick={toggleMeanings}
        >
          {showMeanings ? "Hide Meanings" : "Show Meanings"}
        </button>
        {showMeanings && (
          <div>
            <p className="text-gray-300 text-base mt-2">
              <strong>Upright:</strong> {card.meaning_up}
            </p>
            <p className="text-gray-300 text-base mt-2">
              <strong>Reversed:</strong> {card.meaning_rev}
            </p>
            <p className="text-gray-300 text-base mt-2">{card.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
