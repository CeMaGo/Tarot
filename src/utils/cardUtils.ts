import { TarotCard, TarotApiResponse } from "@/types/card";
import { error, log } from "console";

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

export async function getThreeCards(): Promise<TarotCard[]> {
  const apiUrl = "https://tarotapi.dev/api/v1/cards/random?n=3";

  console.log("Fetching from:", apiUrl);

  try {
    const response = await fetch(apiUrl);

    console.log("Response:", response);

    if (!response.ok) {
      console.error(`API Error: ${response.status} - ${response.statusText}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: TarotApiResponse = await response.json();

    console.log("Parsed Data:", data);

    if (!data || !data.cards || !Array.isArray(data.cards)) {
      console.error("Invalid API response structure");
      return [];
    }

    console.log("Cards:", data.cards);

    return data.cards; // Ensure the data is returned
  } catch (error) {
    console.error("Error fetching three cards:", error);
    return [];
  }
}
