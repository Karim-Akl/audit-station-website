import React from "react";
import yellowCircle from "@../../../public/assets/yellowCircle.svg";

import bottomBlueCircle from "@../../../public/assets/bottomBlueCircle.svg";
import leftBlueCircle from "@../../../public/assets/leftBlueCircle.svg";
import leftDots from "@../../../public/assets/leftDots.svg";
import rightDots from "@../../../public/assets/rightDots.svg";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import GlobalBreadcrumbHeader from "./breadcrumb";
import { BackButton } from "./backButton";

interface IProps {
  title: string;
}
const HeroBackground = ({ title }: IProps) => {
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
            <BackButton />
            <h2 className="text-4xl font-semibold capitalize">{title}</h2>
          </div>
          <GlobalBreadcrumbHeader
            MainLink="/"
            MainTitle="Home"
            items={[{ title: "toogle", link: "goole" }]}
          />
        </div>
      </div>
    </main>
  );
};

export default HeroBackground;
