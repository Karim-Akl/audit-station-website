import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import instractor from "@../../../public/assets/instractor.svg";
import Link from "next/link";
import { getLocale } from "next-intl/server";

export async function Blogs() {
  const locale = await getLocale();

  const instructors = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet.",
      title: "Software Engineer",
      rating: 4.5,
      students: 1200,
      imageUrl: instractor,
      category: "NEWS",
      flag: true,
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit amet.",
      title: "Product Manager",
      rating: 4.7,
      students: 1500,
      imageUrl: instractor,
      category: "NEWS",
      flag: false,
    },
    {
      id: 3,
      name: "Lorem ipsum dolor sit amet.",
      title: "IT Specialist",
      rating: 4.6,
      students: 1100,
      imageUrl: instractor,
      category: "NEWS",
      flag: false,
    },
    {
      id: 4,
      name: "Lorem ipsum dolor sit amet.",
      title: "Business Analyst",
      rating: 4.8,
      students: 1300,
      imageUrl: instractor,
      category: "NEWS",
      flag: false,
    },
    {
      id: 5,
      name: "Lorem ipsum dolor sit amet.",
      title: "Accountant",
      rating: 4.9,
      students: 1400,
      imageUrl: instractor,
      category: "NEWS",
      flag: true,
    },
  ];

  return (
    <div className=" relative w-full h-full py-20">
      <div className="flex items-center space-x-2 pl-4 py-6">
        <span className="block w-12 h-[2px] bg-blue-200"></span>
        <span className="text-blue-400 text-sm">Blogs</span>
      </div>
      <h2 className="md:max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Lastest News and Resources
      </h2>

      <Carousel
        opts={{
          align: "start",
        }}
        className="overflow-hidden my-6  "
      >
        <CarouselContent className="ml-0">
          {instructors.map((instructor) => (
            <CarouselItem
              key={instructor.id}
              className="md:w-full rounded-lg  sm:basis-1/2 md:basis-1/3 xl:basis-1/5"
            >
              <Card className="relative  overflow-hidden p-0  bg-white">
                <div className="absolute top-4 right-4 text-white bg-[#22B9DD] px-4 py-2 rounded-md  flex items-center justify-center ">
                  {instructor.category}
                </div>

                <CardContent className="p-2">
                  <Image
                    src={instructor.imageUrl}
                    width={100}
                    height={100}
                    alt={instructor.name}
                    className="w-full h-auto "
                  />
                  <div className="flex justify-between py-2  items-center">
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
                    <p className="text-sm text-gray-600">
                      {instructor.students} Students
                    </p>
                  </div>
                  <div className="">
                    <div className="font-bold text-xl mb-2">
                      {instructor.name}
                    </div>
                    {/* <p className="text-gray-700 text-base">
                      {instructor.title}
                    </p> */}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex items-center justify-end">
        <Link href={`/${locale}/blogs`}>
          {" "}
          <Button className="bg-white hover:bg-gray-200 hover:border border pe-0 md:h-14 md:mt-12 justify-between md:w-72 rounded-full border-[#22B9DD] text-[#22B9DD]">
            <span>See More</span>
            <span className="rounded-full border p-2 border-[#22B9DD]">
              <ArrowRight />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
