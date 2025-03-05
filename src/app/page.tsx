import CardComponent from "@/components/Card";
import { getCards } from "@/utils/cardUtils";

export default async function Home() {
  const cards = await getCards();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardComponent card={cards[0]} />
    </main>
  );
}
