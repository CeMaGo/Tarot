import { TarotCard, TarotApiResponse } from "@/types/card";

export async function getRandomCard(): Promise<TarotCard> {
  const apiUrl = "https://tarotapi.dev/api/v1/cards/random";

  try {
    const response = await fetch(apiUrl);

    if (!response) {
      throw new Error("HTTP error! status: ${response.status}");
    }

    const data: TarotApiResponse = await response.json();
    return data.cards[0];
  } catch (error) {
    console.error("Error fetching random card: ", error);
    throw error;
  }
}
