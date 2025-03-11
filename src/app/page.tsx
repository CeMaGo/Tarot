// src/app/page.tsx
"use client";

import CardComponent from "@/components/Card";
import { getRandomCard, getThreeCards } from "@/utils/cardUtils";
import { TarotCard } from "@/types/card";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import ThreeCardSpread from "@/components/ThreeCardSpread";
import CelticCrossSpread from "@/components/CelticCrossSpread";

export default function Home() {
  const [card, setCard] = useState<TarotCard | null>(null);
  const [cards, setCards] = useState<TarotCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [resetCards, setResetCards] = useState(false);
  const [showThreeCardSpread, setShowThreeCardSpread] = useState(false);
  const [showCelticCrossSpread, setShowCelticCrossSpread] = useState(false);

  useEffect(() => {
    async function fetchCard() {
      setIsLoading(true);
      try {
        const fetchedCard = await getRandomCard();
        setCard(fetchedCard);
      } catch (error) {
        console.error("Error fetching card:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCard();
  }, []);

  const handleDrawCard = async () => {
    setIsLoading(true);
    setResetCards(true);
    try {
      const newCard = await getRandomCard();
      setCard(newCard);
      setCards([]);
      setShowThreeCardSpread(false);
      setShowCelticCrossSpread(false);
    } catch (error) {
      console.error("Error drawing card:", error);
    } finally {
      setIsLoading(false);
      setResetCards(false);
    }
  };

  const handleDrawThreeCardSpread = async () => {
    setIsLoading(true);
    setResetCards(true);
    try {
      const newCards = await getThreeCards();
      setCards(newCards);
      setCard(null);
      setShowThreeCardSpread(true);
      setShowCelticCrossSpread(false);
    } catch (error) {
      console.error("Error drawing three card spread:", error);
    } finally {
      setIsLoading(false);
      setResetCards(false);
    }
  };

  const handleDrawCelticCrossSpread = async () => {
    setIsLoading(true);
    setResetCards(true);
    try {
      const newCards = await getTenCards(); // Implement this function
      setCards(newCards);
      setCard(null);
      setShowThreeCardSpread(false);
      setShowCelticCrossSpread(true);
    } catch (error) {
      console.error("Error drawing Celtic Cross Spread:", error);
    } finally {
      setIsLoading(false);
      setResetCards(false);
    }
  };

  const getTenCards = async () => {
    const tenCards: TarotCard[] = [];
    for (let i = 0; i < 10; i++) {
      const card = await getRandomCard();
      tenCards.push(card);
    }
    return tenCards;
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center p-8 text-white bg-[url('/tarot-background1.jpg')] bg-cover">
        <Loading />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8 text-white bg-[url('/tarot-background1.jpg')] bg-cover">
      <h1 className="text-4xl font-serif font-bold mb-8 text-orange-200">
        Tarot Card Reader
      </h1>
      <div className="flex flex-wrap justify-center mb-8 opacity-75">
        {showThreeCardSpread ? (
          <ThreeCardSpread cards={cards} isLoading={isLoading} /> // Render the spread component
        ) : (
          <>
            {card && cards.length === 0 && (
              <CardComponent
                card={card}
                isLoading={isLoading}
                resetCards={resetCards}
              />
            )}
            {cards &&
              cards.length > 0 &&
              cards.map((cardItem) => (
                <CardComponent
                  key={cardItem.name_short}
                  card={cardItem}
                  isLoading={isLoading}
                  resetCards={resetCards}
                />
              ))}
          </>
        )}
      </div>
      <div className="flex justify-center flex-wrap">
        <button
          className="bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded m-2 opacity-75"
          onClick={handleDrawCard}
        >
          Draw Card
        </button>
        <button
          className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded m-2 opacity-85"
          onClick={handleDrawThreeCardSpread}
        >
          Three Card Spread
        </button>
      </div>
    </main>
  );
}
