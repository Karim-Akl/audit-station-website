import React from "react";
import yellowCircle from "@../../../public/assets/yellowCircle.svg";
import Ellipse from "@../../../public/assets/Ellipse 8328.svg";
import { FaArrowRight } from "react-icons/fa6";

import bottomBlueCircle from "@../../../public/assets/bottomBlueCircle.svg";
import leftBlueCircle from "@../../../public/assets/leftBlueCircle.svg";
import leftDots from "@../../../public/assets/leftDots.svg";
import rightDots from "@../../../public/assets/rightDots.svg";
import Image from "next/image";

import {
  MdKeyboardArrowLeft,
  MdOutlineArrowForwardIos,
  MdOutlineEmail,
} from "react-icons/md";
import Link from "next/link";
import { Button } from "../ui/button";
import { getLocale } from "next-intl/server";
import { BackButton } from "./backButton";

interface IProps {
  title: string;
  email: string;
}
const SecondHeroBackground = async ({ title, email }: IProps) => {
  const locale = await getLocale();
  return (
    <main className="relative overflow-hidden">
      <div className="w-[100vw]  h-[270px]">
        <Image
          src={leftBlueCircle}
          alt="blue circle"
          className="absolute left-0 top-0 z-10"
          loading="lazy"
        />
        <Image
          src={leftDots}
          alt="dots"
          className="absolute left-0 top-0 z-50"
          loading="lazy"
        />
        <Image
          src={bottomBlueCircle}
          alt="blue circle"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 z-50"
          loading="lazy"
        />
        <Image
          src={yellowCircle}
          alt="blue circle"
          className="absolute right-0 top-0 z-50"
          loading="lazy"
        />
        <Image
          src={rightDots}
          alt="dots"
          className="absolute right-0 bottom-0 z-50"
          loading="lazy"
        />
        <div className="content-center container h-full">
          <div className="md:flex justify-between   items-center ">
            <div className="flex space-x-3  items-center z-50">
              <Image
                src={Ellipse}
                alt="yellow circle"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-semibold capitalize">{title}</h2>
                <div className="flex items-center gap-2">
                  <BackButton />

                  <span className="flex items-center gap-1">
                    {" "}
                    <MdOutlineEmail />
                    {email}
                  </span>
                </div>
              </div>
            </div>
            <div className=" z-50">
              <Button className="bg-[#22B9DD] space-x-2 text-white rounded-full ">
                <span>Upgrade Profile</span>
                <FaArrowRight className="" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SecondHeroBackground;