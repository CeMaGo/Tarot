import { TarotCard } from "@/types/card";
import { getThreeCards } from "@/utils/cardUtils";
import { error, log } from "console";

/// ---------------------->> NEW BEGINNINGS <<------------------------\\

export async function getRandomCard(): Promise<TarotCard> {
  try {
    const response = await fetch("/interpretations.json");
    if (!response) {
      throw new Error("HTTP error! status: ${response.status}");
    }

    const data = await response.json();
    return data.cards[0];
  } catch (error) {
    console.error("Error fetching random card: ", error);
    throw error;
  }
}
export async function getThreeRandomCards(): Promise<TarotCard[]> {
  try {
    console.log("start fetch");
    const response = await fetch("/interpretations.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("data in fetch: ", data);
    const shuffledCards = data.sort(() => 0.5 - Math.random());
    console.log("Shuffle:", shuffledCards.slice(0, 3));
    return shuffledCards.slice(0, 3);
  } catch (error) {
    console.error("Error fetching three cards from JSON:", error);
    return [];
  }
}
