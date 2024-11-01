import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React, { useEffect, useState } from "react";
import FristCard from "@../../../public/assets/Icon1.svg";
import SecCard from "@../../../public/assets/Icon2.svg";
import ThirdCard from "@../../../public/assets/Icon3.svg";
import { getLocale } from "next-intl/server";

export async function Steps() {
  const locale = await getLocale();
  return (
    <div className="h-[40rem] w-full rounded-md flex flex-col antialiased   dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800">
          Your steps to be <span className="text-blue-500">unique</span>
        </h2>
        <p className="text-gray-500 mt-2 md:max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis donec
          massa at risus, Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction={`${locale == "ar" ? "left" : "right"}`}
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image: FristCard,
    name: " Develop your skills through the courses on the platform!",
    title: "01.",
  },
  {
    image: SecCard,
    name: " Develop your skills through the courses on the platform!",
    title: "02.",
  },
  {
    image: ThirdCard,
    name: " Develop your skills through the courses on the platform!",
    title: "03.",
  },
];
