import React from "react";
import Image from "next/image";
import instractor from "@../../../public/assets/instractor.svg";
import { Card, CardContent } from "@/components/ui/card";
import { link } from "fs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Blogs() {
  return (
    <div className="w-full grid grid-cols-1 gap-6">
      <Accordion type="single" collapsible className="space-y-6 w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-semibold text-[#1C1C1C]">
            What We Offer?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-semibold text-[#1C1C1C]">
            What We Offer?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-semibold text-[#1C1C1C]">
            What We Offer?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl font-semibold text-[#1C1C1C]">
            What We Offer?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl font-semibold text-[#1C1C1C]">
            What We Offer?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    </div>
  );
}
