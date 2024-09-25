"use client";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/ui/carouselItems";
import { ArrowRight } from "lucide-react";
import React from "react";

export const Testimonial: React.FC = () => {
  return (
    <div className="w-full relative block md:flex md:gap-40 items-center py-20 px-4 md:px-0">
      <div className="md:w-1/2">
        <div className="flex items-center space-x-2 pl-4 py-6">
          <span className="block w-12 h-[2px] bg-blue-200"></span>
          <span className="text-blue-400 text-sm">TESTIMONIAL</span>
        </div>
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-[#0F1A29] dark:text-neutral-200 font-[Saira]">
          What They Say?
        </h2>
        <div className="flex flex-col max-w-lg space-y-4 text-[#5C5C5C] gap-10 my-10 pl-4 text-md md:text-2xl font-normal font-sans">
          <p className="max-w-full flex-1">
            Audit Station has got more than 100k positive ratings from our users
            around the world.
          </p>
          <p>
            Some of the students and teachers were greatly helped by the audit
            station.
          </p>
          <p>Are you too? Please give your assessment</p>
        </div>
        <Button className="bg-white hover:bg-gray-200 hover:border border pe-0   justify-between my-2   w-52 rounded-full border-[#22B9DD] text-[#22B9DD]">
          <span>Give Your Assessment</span>
          <span className="rounded-full border p-2 border-[#22B9DD]">
            <ArrowRight />
          </span>
        </Button>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2">
        <Carousel />
      </div>
    </div>
  );
};
