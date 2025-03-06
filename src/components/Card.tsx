// src/components/Card.tsx
import { TarotCard } from "@/types/card";
import { useState, useEffect } from "react";

interface CardProps {
  card: TarotCard | null;
  isLoading: boolean;
  resetCards: boolean;
}

const CardComponent: React.FC<CardProps> = ({
  card,
  isLoading,
  resetCards,
}) => {
  const [showMeanings, setShowMeanings] = useState(false);
  const [isReversed, setIsReversed] = useState(Math.random() < 0.5);
  const [showFront, setShowFront] = useState(false);
  const [transitionClass, setTransitionClass] = useState("");

  const toggleMeanings = () => {
    setShowMeanings(!showMeanings);
  };

  const handleCardClick = () => {
    if (card && !showFront) {
      setShowFront(true);
    }
  };

  useEffect(() => {
    if (showFront) {
      setTransitionClass("transition-transform duration-500 ease-in-out");
    } else {
      setTransitionClass("");
    }
  }, [showFront]);

  useEffect(() => {
    if (resetCards) {
      setShowFront(false);
    }
  }, [resetCards]);

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

  const getImagePath = (card: TarotCard): string => {
    if (card.name_short.startsWith("ar")) {
      // Major Arcana
      return `/images/Cards/Major Arcana/${card.name_short}.png`;
    } else {
      // Minor Arcana
      const suit = card.name_short.substring(0, 2); // Get the suit (cu, wa, sw, pe)
      const suitFolder = {
        cu: "Cups-Hearts-Water",
        wa: "Wands-Clubs-Fire",
        pe: "Pentacles-Diamonds-Earth",
        sw: "Swords-Spades-Air",
      }[suit];
      return `/images/Cards/Minor Arcana/Suits/${suitFolder}/${card.name_short}.png`;
    }
  };

  const imageSrc = getImagePath(card);
  const cardBackSrc = "/images/Cards/card-back.png";

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg p-4 m-2 ${
        isReversed ? "bg-gray-700" : "bg-gray-800"
      } text-white`}
      onClick={handleCardClick}
    >
      <div className="px-6 py-4">
        <div className="font-bold font-serif text-xl mb-2">{card.name}</div>
        <p
          className={`text-sm ${
            isReversed ? "text-pink-500" : "text-emerald-500"
          }`}
        >
          {isReversed ? "Reversed" : "Upright"}
        </p>
        {showFront ? (
          <img
            src={imageSrc}
            alt={card.name}
            className={`mt-4 w-full opacity-100 transform ${transitionClass} ${
              isReversed ? "rotate-180" : ""
            }`}
          />
        ) : (
          <img src={cardBackSrc} alt="Card Back" className="mt-4 w-full" />
        )}
        <button
          className="text-sky-400 hover:text-sky-300 mt-2"
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
