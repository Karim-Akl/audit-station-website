"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import personlity from "@../../../public/assets/jwaa.jpg";

export function TeamWork() {
  const cards = data.map((card, index) => (
    <Card key={card.id} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <div className="flex items-center space-x-2 pl-4 py-6">
        <span className="block w-12 h-[2px] bg-blue-200"></span>
        <span className="text-blue-400 text-sm">Our Team</span>
      </div>
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Meet Our Professional Team...
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(4).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    id: 1,
    category: "Darrell Sreward",
    title: "E-Marketing Officer",
    Image: personlity,
  },
  {
    id: 2,
    category: "Darrell Sreward",
    title: "E-Marketing Officer",
    Image: personlity,
  },
  {
    id: 3,

    category: "Darrell Sreward",
    title: "E-Marketing Officer",
    Image: personlity,
  },

  {
    id: 4,

    category: "Darrell Sreward",
    title: "E-Marketing Officer",
    Image: personlity,
  },
  {
    id: 5,

    category: "Darrell Sreward",
    title: "E-Marketing Officer",
    Image: personlity,
  },
  {
    id: 6,
    category: "Darrell Sreward",
    title: "E-Marketing Officer",
    Image: personlity,
  },
  {
    id: 7,
    category: "Darrell Sreward",
    title: "E-Marketing Officer",
    Image: personlity,
  },
];
