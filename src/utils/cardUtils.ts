// src/utils/cardUtils.ts
import { Card } from "@/types/card"; // Using the alias

export async function getCards(): Promise<Card[]> {
  const res = await fetch("/data/cards.json");

  if (!res.ok) {
    throw new Error("Failed to fetch cards");
  }

  const cards: Card[] = await res.json();
  return cards;
}
