import CardComponent from "@/components/Card";
import { getRandomCard } from "@/utils/cardUtils";

export default async function Home() {
  const card = await getRandomCard();

  return (
    <main className="flex min-h-screen flex-col items-center justify-beteen p-24">
      {card && <CardComponent card={card} />}
    </main>
  );
}
