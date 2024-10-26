"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoIosArrowForward } from "react-icons/io";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";

export function BlogsTabs() {
  const { pathname, router, searchParams } = UseSearchParamsHook();
  const pushTaptoParams = (e: string) => {
    const params = new URLSearchParams();
    params.set("category", e);
    router.push(`${pathname}?${params.toString()}`);
    // router.push(selectedTab);
  };

  return (
    <Tabs
      className="inline-block   "
      defaultValue={tabs[0].value}
      onValueChange={(e) => {
        pushTaptoParams(e);
      }}
    >
      <TabsList className="flex flex-col gap-5 items-start justify-end ">
        <h2 className="font-bold text-xl text-[#0F1A29] ">Category</h2>

        {tabs.map((tab) => (
          <TabsTrigger
            className="data-[state=active]:border-none data-[state=active]:font-bold items-start justify-start bordre-b-0 p-0 text-[16px] font-normal text-[#5C5C5C]"
            key={tab.value}
            value={tab.value}
          >
            <IoIosArrowForward color="#22B9DD" className="inline-block mr-2" />
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

const tabs = [
  { id: 1, title: "All", value: "all" },
  { id: 2, title: "Education", value: "education" },
  { id: 3, title: "Evaluation", value: "evaluation" },
  { id: 4, title: "Health", value: "health" },
  { id: 5, title: "Involvement", value: "involvement" },
  { id: 6, title: "Psychology", value: "psychology" },
  { id: 6, title: "Strategies", value: "strategies" },
  { id: 6, title: "Technology", value: "technology" },
];
