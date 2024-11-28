"use client";

import React, { useState } from "react";
import AddOffer from "./_add-offer";
import SentOffer from "./_send-offer";

const Page = ({ params: { accountantId } }: { params: { accountantId: number } }) => {
  const [step, setStep] = useState(1);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div>
      {step === 1 && <SentOffer />}
      {step === 2 && (
        <AddOffer
          params={{
            accountantId: 0, // Replace with the actual ID if needed
          }}
        />
      )}
      <div>
        {step > 1 && <button onClick={handlePreviousStep}>Previous</button>}
        {step < 2 && <button onClick={handleNextStep}>Next</button>}
      </div>
    </div>
  );
};

export default Page;
