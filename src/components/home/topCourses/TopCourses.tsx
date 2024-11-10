"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import prize from "@../../../public/assets/prize.svg";
import topcourses from "@../../../public/assets/topcourse.svg";
import Link from "next/link";
import { useLocale } from "next-intl";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";

export function TopCourses() {
  const locale = useLocale();
  const [selectedTab, setSelectedTab] = useState("all");

  const tabs = [
    { id: 1, title: "All", value: "all" },
    { id: 2, title: "Development", value: "development" },
    { id: 3, title: "Management", value: "management" },
    { id: 4, title: "IT", value: "it" },
    { id: 5, title: "Business", value: "business" },
    { id: 6, title: "Accounting", value: "accounting" },
  ];

  const instructors = [
    {
      id: 1,
      title: "Modern Front-End Development with js",
      name: "Software Engineer",
      rating: 4.5,
      department: "Enstrumentals",
      imageUrl: topcourses,
      category: "development",
      price: "50",
      flag: false,
    },
    {
      id: 2,
      title: "Modern Front-End Development with js",
      name: "Product Manager",
      rating: 4.7,
      department: "Enstrumentals",
      imageUrl: topcourses,
      category: "management",
      price: "50",
      flag: false,
    },
    {
      id: 3,
      title: "Modern Front-End Development with js",
      name: "IT Specialist",
      rating: 4.6,
      department: "Enstrumentals",
      imageUrl: topcourses,
      category: "it",
      price: "50",
      flag: false,
    },
    {
      id: 4,
      title: "Modern Front-End Development with js",
      name: "Business Analyst",
      rating: 4.8,
      department: "Enstrumentals",
      imageUrl: topcourses,
      category: "business",
      price: "50",
      flag: false,
    },
    {
      id: 5,
      title: "Modern Front-End Development with js",
      name: "Accountant",
      rating: 4.9,
      department: "Enstrumentals",
      imageUrl: topcourses,
      category: "accounting",
      price: "50",
      flag: false,
    },
    // ... other instructors
  ];

  return (
    <div className=" content-center w-full h-full py-16 m-auto">
      <div className="flex items-center justify-center space-x-2 pl-4 py-6">
        <span className="block w-12 h-[2px] bg-blue-200"></span>
        <span className="text-blue-400 text-sm">Top Courses</span>
        <span className="block w-12 h-[2px] bg-blue-200"></span>
      </div>
      <h2 className="md:max-w-3xl  mx-auto text-center  text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Check out the most demanding courses right now
      </h2>
      <Tabs
        defaultValue={tabs[0].value}
        onValueChange={setSelectedTab}
        className="container"
      >
        <div className="md:flex items-center justify-between">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:border-b pt-14 md:pb-20 pb-36 md:my-10">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <Link href={`/${locale}/top-courses`}>
            <Button className="bg-transparent hover:bg-gray-200 hover:border border pe-0 md:h-14 md:mt-12 justify-between md:w-48 rounded-full border-[#22B9DD] text-[#22B9DD]">
              <span>See More</span>
              <span className="rounded-full border p-4 border-[#22B9DD]">
                <BsArrowRightShort size={22} />
              </span>
            </Button>
          </Link>
        </div>
        <Carousel
          opts={{
            align: "center",
          }}
          className=" md:my-6 my-2  overflow-hidden "
        >
          <CarouselContent className="ml-0 ">
            {instructors
              .filter(
                (instructor) =>
                  selectedTab === "all" || instructor.category === selectedTab
              )
              .map((instructor) => (
                <CarouselItem
                  key={instructor.id}
                  className="md:w-full rounded-lg sm:basis-1/2 md:basis-1/3 xl:basis-1/3 "
                >
                  <Link
                    href={`/${locale}/top-courses/${instructor.id}`}
                    className="bg-white  rounded-2xl border-1 border-[#E2E8F0] "
                  >
                    <Card className="relative  p-0  rounded-xl hover:border-8 hover:border-[#5C5C5C] hover:border-opacity-5 transition-all">
                      {instructor.flag && (
                        <div className="absolute top-0 right-0 text-white  flex items-center justify-center ">
                          <Image
                            src={prize}
                            width={50}
                            height={50}
                            alt={"Instructor"}
                            lazyBoundary={""}
                          />
                        </div>
                      )}
                      <CardContent className="p-6">
                        <Image
                          src={instructor.imageUrl}
                          width={100}
                          height={100}
                          alt={instructor.name}
                          className="w-full  "
                        />
                        <div className="pt-4 pb-2 flex justify-between px-2 font-semibold items-center">
                          <p className="text-sm  text-gray-600 rounded-full bg-[#EBEBEB] p-2">
                            {instructor.department}
                          </p>
                          <div className="flex items-center">
                            <svg
                              className="w-5 h-5 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c-.3-.921-1.598-.921-1.898 0L5.317 6.23l-3.905.568c-1.011.147-1.416 1.392-.683 2.104l2.828 2.758-.668 3.892c-.172 1.002.883 1.753 1.785 1.284L10 15.347l3.49 1.834c.902.469 1.957-.282 1.785-1.284l-.668-3.892 2.828-2.758c.733-.712.328-1.957-.683-2.104l-3.905-.568-1.834-3.303z" />
                            </svg>
                            <span className="ml-2">{instructor.rating}</span>
                          </div>
                        </div>
                        <div className="py-4">
                          <div className="font-bold text-xl max-w-[18rem] text-wrap mb-4">
                            {instructor.title}
                          </div>
                          <p className="text-gray-700 text-base">
                            By {instructor.name}
                          </p>
                        </div>
                        <div className="pt-4 pb-2 flex  justify-between   items-center ">
                          <Button className="flex items-center p-2 rounded-full font-semibold text-[#0F1A29] text-[16px] bg-[#22B9DD] ">
                            <span className="ml-2">Add to Cart </span>
                            <BsArrowRightShort size={20} />
                          </Button>
                          <p className="text-xl font-bold  text-gray-600">
                            {instructor.price} C
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Tabs>
    </div>
  );
}
