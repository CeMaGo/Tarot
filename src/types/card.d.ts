export interface TarotCard {
  type: string;
  name_short: string;
  name: string;
  value: string;
  value_int: number;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
}

export interface TarotApiResponse {
  nhits: number;
  cards: TarotCard[];
}
