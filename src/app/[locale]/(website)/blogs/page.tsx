import React from "react";
import Image from "next/image";
import instractor from "@../../../public/assets/instractor.svg";
import { Card, CardContent } from "@/components/ui/card";
import { link } from "fs";

export const metadata = {
  title: "Blogs",
  description: "Blogs Page",
};
export default function Blogs({ searchParams }: any) {
  const params = searchParams.category || "all";
  console.log(params);

  return (
    <div className="w-full grid grid-cols-3 gap-3">
      {instructors
        .filter((instructor) => {
          instructor.category = params;
        })
        .map((instructor) => (
          <Card
            key={instructor.id}
            className="relative  overflow-hidden p-0  bg-white"
          >
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
                <div className="font-bold text-xl mb-2">{instructor.name}</div>
                {/* <p className="text-gray-700 text-base">
                      {instructor.title}
                    </p> */}
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
const instructors = [
  {
    id: 1,
    name: "Lorem ipsum dolor sit amet.",
    title: "Software Engineer",
    rating: 4.5,
    students: 1200,
    imageUrl: instractor,
    category: "all",
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
    category: "education",
    flag: false,
  },
  {
    id: 4,
    name: "Lorem ipsum dolor sit amet.",
    title: "Business Analyst",
    rating: 4.8,
    students: 1300,
    imageUrl: instractor,
    category: "education",
    flag: false,
  },
  {
    id: 5,
    name: "Lorem ipsum dolor sit amet.",
    title: "Accountant",
    rating: 4.9,
    students: 1400,
    imageUrl: instractor,
    category: "education",
    flag: true,
  },
  {
    id: 6,
    name: "Lorem ipsum dolor sit amet.",
    title: "Accountant",
    rating: 4.9,
    students: 1400,
    imageUrl: instractor,
    category: "NEWS",
    flag: true,
  },
  {
    id: 7,
    name: "Lorem ipsum dolor sit amet.",
    title: "Accountant",
    rating: 4.9,
    students: 1400,
    imageUrl: instractor,
    category: "NEWS",
    flag: true,
  },
  {
    id: 8,
    name: "Lorem ipsum dolor sit amet.",
    title: "Accountant",
    rating: 4.9,
    students: 1400,
    imageUrl: instractor,
    category: "NEWS",
    flag: true,
  },
  {
    id: 9,
    name: "Lorem ipsum dolor sit amet.",
    title: "Accountant",
    rating: 4.9,
    students: 1400,
    imageUrl: instractor,
    category: "NEWS",
    flag: true,
  },
  {
    id: 10,
    name: "Lorem ipsum dolor sit amet.",
    title: "Accountant",
    rating: 4.9,
    students: 1400,
    imageUrl: instractor,
    category: "NEWS",
    flag: true,
  },
  {
    id: 11,
    name: "Lorem ipsum dolor sit amet.",
    title: "Accountant",
    rating: 4.9,
    students: 1400,
    imageUrl: instractor,
    category: "NEWS",
    flag: true,
  },
  // ... other instructors
];
