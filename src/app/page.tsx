// src/app/page.tsx
"use client";

import CardComponent from "@/components/Card";
import { getRandomCard, getThreeCards } from "@/utils/cardUtils";
import { TarotCard } from "@/types/card";
import { useState, useEffect } from "react";

export default function Home() {
  const [card, setCard] = useState<TarotCard | null>(null);
  const [cards, setCards] = useState<TarotCard[]>([]); // Initialize with an empty array
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCard() {
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
      setCards([]); // Clear three-card spread
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
      // console.log(newCards); // Log the data
      setCards(newCards);
      setCard(null); // Clear single card
    } catch (error) {
      console.error("Error drawing three cards:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardComponent card={card} isLoading={isLoading} />
      {card && <CardComponent card={card} />}
      {cards &&
        cards.length > 0 && ( // Add cards exists check
          <div className="flex">
            {cards.map((card) => (
              <CardComponent
                key={card.name_short}
                card={card}
                isLoading={isLoading}
              />
            ))}
          </div>
        )}
      <button
        className="bg-sky-900 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded m-2"
        onClick={handleDrawCard}
      >
        Draw Card
      </button>
      <button
        className="bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded m-2"
        onClick={handleDrawThreeCards}
      >
        Draw Three Cards
      </button>
    </main>
  );
}
