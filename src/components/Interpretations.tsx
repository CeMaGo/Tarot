// src/components/Interpretation.tsx
import React from "react";
import { TarotCard } from "@/types/card";

interface InterpretationProps {
  card: TarotCard | null;
  interpretations: any[];
}

const Interpretation: React.FC<InterpretationProps> = ({
  card,
  interpretations,
}) => {
  if (!card) {
    return <p>No card drawn yet.</p>;
  }

  const cardInterpretation = interpretations.find(
    (interpretation) => interpretation.name_short === card.name_short
  );

  if (!cardInterpretation) {
    return <p>Interpretations not found for this card.</p>;
  }

  return (
    <div className="mt-4 p-4 rounded-lg bg-gray-800">
      <h2 className="text-2xl font-bold mb-2">{card.name} Interpretations</h2>
      {/* <div className="mb-4">
        <h3 className="text-lg font-semibold">General:</h3>
        <p>{cardInterpretation.meanings.general}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Love:</h3>
        <p>{cardInterpretation.meanings.love}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Career:</h3>
        <p>{cardInterpretation.meanings.career}</p>
      </div> */}
      {/* <div className="mb-4">
        <h3 className="text-lg font-semibold">Keywords:</h3>
        <p>{cardInterpretation.keywords.join(", ")}</p>
      </div> */}
      {/* <div className="mb-4">
        <h3 className="text-lg font-semibold">Numerology:</h3>
        <p>{cardInterpretation.Numerology}</p> */}
      {/* </div>
      <div>
        <h3 className="text-lg font-semibold">Element:</h3>
        <p>{cardInterpretation.element}</p>
      </div> */}
      <div>
        <h3 className="text-lg font-semibold">Meaning Up:</h3>
        <p>{cardInterpretation.meaning_up}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Meaning Reversed:</h3>
        <p>{cardInterpretation.meaning_rev}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Description:</h3>
        <p>{cardInterpretation.desc}</p>
      </div>
    </div>
  );
};

export default Interpretation;
