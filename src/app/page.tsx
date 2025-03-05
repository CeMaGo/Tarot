// src/app/page.tsx
"use client";

import CardComponent from "@/components/Card";
import { getRandomCard } from "@/utils/cardUtils";
import { TarotCard } from "@/types/card";
import { useState, useEffect } from "react";

export default function Home() {
  const [card, setCard] = useState<TarotCard | null>(null);
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
    } catch (error) {
      console.error("Error drawing card: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>; // Or a loading spinner?
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {card && <CardComponent card={card} />}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleDrawCard}
      >
        Draw Card
      </button>
    </main>
  );
}
