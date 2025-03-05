// src/app/page.tsx
"use client";

import CardComponent from "@/components/Card";
import { getRandomCard, getThreeCards } from "@/utils/cardUtils";
import { TarotCard } from "@/types/card";
import { useState, useEffect } from "react";

export default function Home() {
  const [card, setCard] = useState<TarotCard | null>(null);
  const [cards, setCards] = useState<TarotCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    try {
      const newCard = await getRandomCard();
      setCard(newCard);
      setCards([]);
    } catch (error) {
      console.error("Error drawing card:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrawThreeCards = async () => {
    setIsLoading(true);
    try {
      const newCards = await getThreeCards();
      setCards(newCards);
      setCard(null);
    } catch (error) {
      console.error("Error drawing three cards:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gradient-to-b from-purple-900 to-indigo-900 text-white bg-[url('/tarot-background1.jpg')] bg-cover">
      <h1 className="text-4xl font-bold mb-8 text-orange-200">
        Tarot Card Reader
      </h1>
      <div className="flex flex-wrap justify-center mb-8">
        {card && cards.length === 0 && (
          <CardComponent card={card} isLoading={isLoading} />
        )}
        {cards &&
          cards.length > 0 &&
          cards.map((card) => (
            <CardComponent
              key={card.name_short}
              card={card}
              isLoading={isLoading}
            />
          ))}
      </div>
      <div className="flex justify-center flex-wrap">
        <button
          className="bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded m-2"
          onClick={handleDrawCard}
        >
          Draw Card
        </button>
        <button
          className="bg-purple-950 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded m-2"
          onClick={handleDrawThreeCards}
        >
          Draw Three Cards
        </button>
      </div>
    </main>
  );
}
