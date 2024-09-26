
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React, { useEffect, useState } from "react";
import FristCard from "@../../../public/assets/Icon1.svg";
import SecCard from "@../../../public/assets/Icon2.svg";
import ThirdCard from "@../../../public/assets/Icon3.svg";

export function StepsComponent() {
  return (
    <div className="h-[40rem] w-full rounded-md flex flex-col antialiased   dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
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
