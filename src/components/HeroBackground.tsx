import React from "react";
import yellowCircle from "../../public/assets/yellowCircle.svg";
import bottomBlueCircle from "@../../../public/assets/bottomBlueCircle.svg";
import leftBlueCircle from "@../../../public/assets/leftBlueCircle.svg";
import leftDots from "../../public/assets/leftDots.svg";
import rightDots from "../../public/assets/rightDots.svg";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";

interface IProps {
  title: string;
  pageRoute: JSX.Element;
}

const HeroBackground = ({ title, pageRoute }: IProps) => {
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
        <div className="absolute left-20 top-1/2 -translate-y-1/2 z-50">
          <div className="flex items-center">
            <Link href={"/"} className="w-10">
              <MdKeyboardArrowLeft className="text-3xl" />
            </Link>
            <h2 className="text-4xl font-semibold capitalize">{title}</h2>
          </div>
          <p className="flex items-center gap-1 ml-10 mt-5 capitalize">
            {pageRoute}
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroBackground;
