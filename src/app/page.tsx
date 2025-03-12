// "use client";

// import CardComponent from "@/components/Card";
// import { getRandomCard, getThreeRandomCards } from "@/utils/cardUtils";
// import { TarotCard } from "@/types/card";
// import { useState, useEffect } from "react";

// export default function Home() {
//   const [card, setCard] = useState<TarotCard | null>(null);
//   const [cards, setCards] = useState<TarotCard[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     async function fetchCard() {
//       setIsLoading(true);
//       try {
//         const fetchedCard = await getRandomCard();
//         setCard(fetchedCard);
//       } catch (error) {
//         console.error("Error fetching card:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchCard();
//   }, []);

//   const handleDrawCard = async () => {
//     console.log("handleDrawCard triggered");
//     setIsLoading(true);
//     try {
//       const newCard = await getRandomCard();
//       setCard(newCard);
//       setCards([]);
//     } catch (error) {
//       console.error("Error drawing card:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDrawThreeCards = async () => {
//     console.log("handleDrawThreeCards triggered");
//     setIsLoading(true);
//     try {
//       const newCards = await getThreeRandomCards();
//       setCards(newCards);
//       setCard(null);
//     } catch (error) {
//       console.error("Error drawing three cards:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-center p-8 text-white bg-[url('/tarot-background1.jpg')] bg-cover">
//       <h1 className="text-4xl font-serif font-bold mb-8 text-orange-200">
//         Tarot Card Reader
//       </h1>
//       <div className="flex flex-wrap justify-center mb-8 opacity-75">
//         {card && cards.length === 0 && (
//           <CardComponent card={card} isLoading={isLoading} resetCards={false} />
//         )}
//         {cards &&
//           cards.length > 0 &&
//           cards.map((card) => (
//             <CardComponent
//               key={card.name_short}
//               card={card}
//               isLoading={isLoading}
//               resetCards={false}
//             />
//           ))}
//       </div>
//       <div className="flex justify-center flex-wrap">
//         <button
//           className="bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded m-2 opacity-75"
//           onClick={handleDrawCard}
//         >
//           Draw Card
//         </button>
//         <button
//           className="bg-purple-950 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded m-2 opacity-85"
//           onClick={handleDrawThreeCards}
//         >
//           Draw Three Cards
//         </button>
//       </div>
//     </main>
//   );
// }

"use client";

import CardComponent from "@/components/Card";
import { getThreeRandomCards } from "@/utils/cardUtils";
import { TarotCard } from "@/types/card";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import ThreeCardSpread from "@/components/ThreeCardSpread";
import Interpretation from "@/components/Interpretations";

export default function Home() {
  const [cards, setCards] = useState<TarotCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [resetCards, setResetCards] = useState(false);
  const [interpretations, setInterpretations] = useState<any[]>([]);

  useEffect(() => {
    async function fetchInterpretations() {
      try {
        const response = await fetch("/interpretations.json");
        const data = await response.json();
        setInterpretations(data);
      } catch (error) {
        console.error("Error fetching interpretations: ", error);
      }
    }

    fetchInterpretations();
  }, []);

  const handleDrawThreeCards = async () => {
    setIsLoading(true);
    setResetCards(true);
    try {
      const newCards = await getThreeRandomCards();
      setCards(newCards);
    } catch (error) {
      console.error("Error drawing three card spread:", error);
    } finally {
      setIsLoading(false);
      setResetCards(false);
    }
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center p-8 text-white bg-[url('/tarot-background1.jpg')] bg-cover">
        <Loading />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8 text-white bg-[url('/tarot-background1.jpg')] bg-cover">
      <h1 className="text-4xl font-serif font-bold mb-8 text-orange-200">
        Tarot Card Reader
      </h1>
      <div className="flex flex-wrap justify-center mb-8 opacity-75">
        <ThreeCardSpread cards={cards} isLoading={isLoading} />
      </div>
      <div className="flex justify-center flex-wrap">
        <button
          className="bg-purple-950 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded m-2 opacity-85"
          onClick={handleDrawThreeCards}
        >
          Draw Three Cards
        </button>
      </div>
    </main>
  );
}
