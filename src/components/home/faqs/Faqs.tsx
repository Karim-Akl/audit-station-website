import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import unspalch from "@../../../public/assets/unsplash.svg";
import vector from "@../../../public/assets/vector3.svg";
import Link from "next/link";
import { getLocale } from "next-intl/server";
export const Faqs: React.FC = async () => {
  const locale = await getLocale();
  return (
    <div className="w-full relative block md:flex md:gap-40 items-center py-20 px-4 md:px-0">
      <div className="w-full md:w-1/2">
        <div className="flex items-center space-x-2 pl-4 py-6">
          <span className="block w-12 h-[2px] bg-blue-200"></span>
          <span className="text-blue-400 text-sm">FAQs</span>
        </div>
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-[#0F1A29] dark:text-neutral-200 font-[Saira]">
          Most Common Questions
        </h2>
        <div className="flex flex-col max-w-lg space-y-4 text-[#5C5C5C] gap-10 my-10 pl-4 text-md md:text-2xl font-normal font-sans">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-normal text-[#1C1C1C]">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-normal text-[#1C1C1C]">
                Is it styled?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-normal text-[#1C1C1C]">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="w-full md:w-1/4  md:mt-0  ">
        <div className="relative">
          <Image
            src={unspalch}
            className=" w-full h-80 z-10 "
            alt="pesone"
            width={100}
            height={100}
          />
          <Image
            src={vector}
            className="absolute -bottom-5 -right-5 overflow-hidden  "
            alt="pesone"
            width={200}
            height={200}
          />
        </div>
        <Link href={`/${locale}/faqs`}>
          <Button className="bg-transparent hover:bg-gray-200 hover:border border pe-0 md:h-14 md:mt-12 justify-between md:w-72 rounded-full border-[#22B9DD] text-[#22B9DD]">
            <span>See More</span>
            <span className="rounded-full border p-3 border-[#22B9DD]">
              <ArrowRight />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
