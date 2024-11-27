import Image from "next/image";
import React from "react";
import { CustomCard } from "@/components/ui/customCard";
import { PersonStanding } from "lucide-react";
import { FaUser } from "react-icons/fa6";
import { PiVideoFill } from "react-icons/pi";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { FaPersonChalkboard } from "react-icons/fa6";
import { GiArchiveRegister } from "react-icons/gi";
import { getLocale } from "next-intl/server";

export async function StepsChart() {
  const locale = await getLocale();
  return (
    <div className="relative w-full h-full py-20 bg-white dark:bg-black ">
      <style>
        {`    @media only screen and (max-width:1100px) {
          .map{
          align-items: center;
          justify-content: center;

          }
      }`}

      </style>
      <div className="mx-auto ms-10 flex">
        <h2 className="text-xl md:text-4xl font-bold text-[#242424] dark:text-neutral-200 font-sans bg-[#E9F8FC]">
          Select Your Next Step To Upgrade Your Profile
        </h2>
      </div>
      <div className="md:mt-10 flex flex-col  map">
        <CustomCard
          step="1"
          icon={<FaUser className="text-white text-2xl" />}
          title="User"
          description="Browse the platform's sections and increase your experience through our courses."
          className=" bg-cyan-500 border-cyan-500 text-cyan-500 max-w-[150px]"
          style={"  hover:shadow-cyan-500 text-cyan-500 border-cyan-500"}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="121"
          viewBox="0 0 9 121"
          fill="none"
          className="mx-auto sm:hidden text-center"
        >
          <path
            d="M4.43538 9.11887C6.83589 9.11887 8.78187 7.11297 8.78187 4.63854C8.78187 2.16411 6.83589 0.158203 4.43538 0.158203C2.03488 0.158203 0.0888672 2.16411 0.0888672 4.63854C0.0888672 7.11297 2.03488 9.11887 4.43538 9.11887Z"
            fill="#C0C0C0"
          />
          <path
            d="M4.43538 120.896C6.83589 120.896 8.78187 118.89 8.78187 116.416C8.78187 113.941 6.83589 111.936 4.43538 111.936C2.03488 111.936 0.0888672 113.941 0.0888672 116.416C0.0888672 118.89 2.03488 120.896 4.43538 120.896Z"
            fill="#C0C0C0"
          />
          <path
            d="M3.8877 4.37402V113.742"
            stroke="#C0C0C0"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        
        <div
          dir={`${locale == "ar" ? "ltr" : ""}`}
          className="absolute top-52 right-0 left-0 content-center hidden lg:flex gap-5 justify-around mx-auto "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="224"
            height="274"
            viewBox="0 0 224 274"
            fill="none"
          >
            <path
              d="M221.874 2.00488C83.8698 2.00488 1.62489 66.1026 1.62489 142.9V272.287"
              stroke="#BAE9F4"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="221"
            height="271"
            viewBox="0 0 221 271"
            fill="none"
          >
            <path
              d="M2.03711 1.70996C141.782 1.70996 218.863 63.1026 218.863 139.9V268.66"
              stroke="#BAE9F4"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="121"
            viewBox="0 0 9 121"
            fill="none"
            className="mx-auto sm:hidden"
          >
            <path
              d="M4.43538 9.11887C6.83589 9.11887 8.78187 7.11297 8.78187 4.63854C8.78187 2.16411 6.83589 0.158203 4.43538 0.158203C2.03488 0.158203 0.0888672 2.16411 0.0888672 4.63854C0.0888672 7.11297 2.03488 9.11887 4.43538 9.11887Z"
              fill="#C0C0C0"
            />
            <path
              d="M4.43538 120.896C6.83589 120.896 8.78187 118.89 8.78187 116.416C8.78187 113.941 6.83589 111.936 4.43538 111.936C2.03488 111.936 0.0888672 113.941 0.0888672 116.416C0.0888672 118.89 2.03488 120.896 4.43538 120.896Z"
              fill="#C0C0C0"
            />
            <path
              d="M3.8877 4.37402V113.742"
              stroke="#C0C0C0"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="lg:flex items-center !justify-between">
          <CustomCard
            icon={<PiVideoFill className="text-white text-3xl" />}
            title="Instructor"
            description="Become an instructor on our famous platform in a famous world, and share your experience with partners around the world. Easily upload your courses and achieve agreement while establishing yourself as an expert in your field."
            className=" bg-cyan-500 border-cyan-500 text-cyan-500 "
            style={"  hover:shadow-cyan-500 text-cyan-500 border-cyan-500"}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="477"
            viewBox="0 0 4 477"
            fill="none"
            className="hidden lg:flex"
          >
            <path
              d="M1.59766 2.44336L1.78962 475.106"
              stroke="#BAE9F4"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="121"
            viewBox="0 0 9 121"
            fill="none"
            className="mx-auto sm:hidden"
          >
            <path
              d="M4.43538 9.11887C6.83589 9.11887 8.78187 7.11297 8.78187 4.63854C8.78187 2.16411 6.83589 0.158203 4.43538 0.158203C2.03488 0.158203 0.0888672 2.16411 0.0888672 4.63854C0.0888672 7.11297 2.03488 9.11887 4.43538 9.11887Z"
              fill="#C0C0C0"
            />
            <path
              d="M4.43538 120.896C6.83589 120.896 8.78187 118.89 8.78187 116.416C8.78187 113.941 6.83589 111.936 4.43538 111.936C2.03488 111.936 0.0888672 113.941 0.0888672 116.416C0.0888672 118.89 2.03488 120.896 4.43538 120.896Z"
              fill="#C0C0C0"
            />
            <path
              d="M3.8877 4.37402V113.742"
              stroke="#C0C0C0"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <CustomCard
            icon={<GiArchiveRegister className="text-white text-3xl " />}
            title="Company"
            description="Register your company today on our leading accounting platform, and expand your business by accessing the best global competencies and expertise approved by us."
            className=" bg-cyan-500 border-cyan-500 text-cyan-500"
            style={" hover:shadow-cyan-500 text-cyan-500 border-cyan-500"}
          />
        </div>
        <CustomCard
          step="2"
          icon={<FaPersonChalkboard className="text-white text-3xl" />}
          title="Accountant"
          description="Browse the platform's sections and increase your experience through our courses."
          className=" bg-cyan-500 border-cyan-500 text-cyan-500"
          style={" hover:shadow-cyan-500 text-cyan-500 border-cyan-500"}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="121"
          viewBox="0 0 9 121"
          fill="none"
          className="mx-auto "
        >
          <path
            d="M4.43538 9.11887C6.83589 9.11887 8.78187 7.11297 8.78187 4.63854C8.78187 2.16411 6.83589 0.158203 4.43538 0.158203C2.03488 0.158203 0.0888672 2.16411 0.0888672 4.63854C0.0888672 7.11297 2.03488 9.11887 4.43538 9.11887Z"
            fill="#C0C0C0"
          />
          <path
            d="M4.43538 120.896C6.83589 120.896 8.78187 118.89 8.78187 116.416C8.78187 113.941 6.83589 111.936 4.43538 111.936C2.03488 111.936 0.0888672 113.941 0.0888672 116.416C0.0888672 118.89 2.03488 120.896 4.43538 120.896Z"
            fill="#C0C0C0"
          />
          <path
            d="M3.8877 4.37402V113.742"
            stroke="#C0C0C0"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <CustomCard
          step="3"
          icon={<PiVideoFill className="text-white text-3xl" />}
          title="Certified"
          description="Browse the platform's sections and increase your experience through our courses."
          className=" bg-[#C0C0C0] border-[#C0C0C0] text-[#C0C0C0]"
          style={" hover:shadow-[#C0C0C0] text-[#C0C0C0] border-[#C0C0C0]"}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="121"
          viewBox="0 0 9 121"
          fill="none"
          className="mx-auto"
        >
          <path
            d="M4.43538 9.11887C6.83589 9.11887 8.78187 7.11297 8.78187 4.63854C8.78187 2.16411 6.83589 0.158203 4.43538 0.158203C2.03488 0.158203 0.0888672 2.16411 0.0888672 4.63854C0.0888672 7.11297 2.03488 9.11887 4.43538 9.11887Z"
            fill="#C0C0C0"
          />
          <path
            d="M4.43538 120.896C6.83589 120.896 8.78187 118.89 8.78187 116.416C8.78187 113.941 6.83589 111.936 4.43538 111.936C2.03488 111.936 0.0888672 113.941 0.0888672 116.416C0.0888672 118.89 2.03488 120.896 4.43538 120.896Z"
            fill="#C0C0C0"
          />
          <path
            d="M3.8877 4.37402V113.742"
            stroke="#C0C0C0"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <CustomCard
          step="4"
          icon={<HiOutlineVideoCamera className="text-white text-3xl" />}
          title="Interviewer"
          description="Browse the platform's sections and increase your experience through our courses."
          className=" bg-[#C0C0C0] border-[#C0C0C0] text-[#C0C0C0]"
          style={" hover:shadow-[#C0C0C0]  text-[#C0C0C0] border-[#C0C0C0]"}
        />
      </div>
    </div>
  );
}

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
