"use client";
import Image from "next/image";
import React from "react";

import { CustomCard } from "@/components/ui/customCard";
import { PersonStanding } from "lucide-react";
import { FaUser } from "react-icons/fa6";
import { PiVideoFill } from "react-icons/pi";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { FaPersonChalkboard } from "react-icons/fa6";
import { GiArchiveRegister } from "react-icons/gi";

export function StepsChart() {
  return (
    <div className="w-full h-full py-20 bg-white  ">
      <h2 className="max-w-7xl p-4 mx-auto text-xl md:text-4xl font-normal text-[#242424] dark:text-neutral-200 font-sans">
        Select Your Next Step To Upgrade Your Profile
      </h2>
      <CustomCard
        step="1"
        icon={<FaUser className="text-white text-3xl" />}
        title="User"
        description="Browse the platform's sections and increase your experience through our courses."
        className=" bg-[#21A74F] border-[#21A74F]"
        style={" hover:shadow-[#21A74F] text-[#21A74F] border-[#21A74F]"}
      />
      <div className="md:flex items-center justify-between">
        <CustomCard
          icon={<PiVideoFill className="text-white text-3xl" />}
          title="Instructor"
          description="Become an instructor on our famous platform in a famous world, and share your experience with partners around the world. Easily upload your courses and achieve agreement while establishing yourself as an expert in your field."
          className=" bg-cyan-500 border-cyan-500 "
          style={"  hover:shadow-cyan-500 text-cyan-500 border-cyan-500"}
        />
        <CustomCard
          icon={<GiArchiveRegister className="text-white text-3xl" />}
          title="Company"
          description="Register your company today on our leading accounting platform, and expand your business by accessing the best global competencies and expertise approved by us."
          className=" bg-cyan-500 border-cyan-500"
          style={" hover:shadow-cyan-500 text-cyan-500 border-cyan-500"}
        />
      </div>
      <CustomCard
        step="2"
        icon={<FaPersonChalkboard className="text-white text-3xl" />}
        title="Accountant"
        description="Browse the platform's sections and increase your experience through our courses."
        className=" bg-cyan-500 border-cyan-500"
        style={" hover:shadow-cyan-500 text-cyan-500 border-cyan-500"}
      />
      <CustomCard
        step="3"
        icon={<PiVideoFill className="text-white text-3xl" />}
        title="Certified"
        description="Browse the platform's sections and increase your experience through our courses."
        className=" bg-[#C0C0C0] border-[#C0C0C0]"
        style={" hover:shadow-[#C0C0C0] text-[#C0C0C0] border-[#C0C0C0]"}
      />
      <CustomCard
        step="4"
        icon={<HiOutlineVideoCamera className="text-white text-3xl" />}
        title="Interviewer"
        description="Browse the platform's sections and increase your experience through our courses."
        className=" bg-[#C0C0C0] border-[#C0C0C0]"
        style={" hover:shadow-[#C0C0C0]  text-[#C0C0C0] border-[#C0C0C0]"}
      />
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(4).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="https://assets.aceternity.com/macbook.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };

const data = [
  {
    id: 1,
    steps: "Darrell Sreward",
    title: "E-Marketing Officer",
    description:
      "Browse the platform's sections and increase your experience through our courses.",
  },
  {
    id: 2,
    steps: "Darrell Sreward",
    title: "E-Marketing Officer",
    description:
      "We are one of the leading and most trusted accounting firms in the middle east. We redefine the Industry by our auditing and accounting solutions designed specially to meet your business needs. We do that while keeping a satisfaction rate of 100% by all our 200+ clients all over the world, sepcially in the GCC countries.",
  },
  {
    id: 3,

    steps: "Darrell Sreward",
    title: "E-Marketing Officer",
    description:
      "We are one of the leading and most trusted accounting firms in the middle east. We redefine the Industry by our auditing and accounting solutions designed specially to meet your business needs. We do that while keeping a satisfaction rate of 100% by all our 200+ clients all over the world, sepcially in the GCC countries.",
  },

  {
    id: 4,

    steps: "Darrell Sreward",
    title: "E-Marketing Officer",
    description:
      "We are one of the leading and most trusted accounting firms in the middle east. We redefine the Industry by our auditing and accounting solutions designed specially to meet your business needs. We do that while keeping a satisfaction rate of 100% by all our 200+ clients all over the world, sepcially in the GCC countries.",
  },
  {
    id: 5,

    steps: "Darrell Sreward",
    title: "E-Marketing Officer",
    description:
      "We are one of the leading and most trusted accounting firms in the middle east. We redefine the Industry by our auditing and accounting solutions designed specially to meet your business needs. We do that while keeping a satisfaction rate of 100% by all our 200+ clients all over the world, sepcially in the GCC countries.",
  },
  {
    id: 6,
    steps: "Darrell Sreward",
    title: "E-Marketing Officer",
    description:
      "We are one of the leading and most trusted accounting firms in the middle east. We redefine the Industry by our auditing and accounting solutions designed specially to meet your business needs. We do that while keeping a satisfaction rate of 100% by all our 200+ clients all over the world, sepcially in the GCC countries.",
  },
  {
    id: 7,
    steps: "Darrell Sreward",
    title: "E-Marketing Officer",
    description:
      "We are one of the leading and most trusted accounting firms in the middle east. We redefine the Industry by our auditing and accounting solutions designed specially to meet your business needs. We do that while keeping a satisfaction rate of 100% by all our 200+ clients all over the world, sepcially in the GCC countries.",
  },
];
