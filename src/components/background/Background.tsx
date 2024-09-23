"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Logo1 from "@../../../public/assets/background.png";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { VscDebugStart } from "react-icons/vsc";
import Image from "next/image";

export const Background: React.FC = () => {
  return (
    <div className="w-full background-color relative h-screen bg-fit text-white">
      <div className="flex justify-center items-center ">
        <div className="p-20 my-10 flex flex-col gap-4 max-w-2xl ">
          <h1 className="text-4xl text-[#666] font-bold flex-wrap">
            Register your company today on our leading accounting platform..
          </h1>
          <p className="text-[#22B9DD] text-md">
            Register your company today on our leading accounting platform, and
            expand your business by accessing the best global competencies and
            expertise approved by us.
          </p>
          <div className="flex items-center gap-4">
            <Button className="bg-[#22B9DD] hover:bg-[#22a8dd] text-white rounded-2xl font-semibold">
              Login As Company
            </Button>
            <Button className="bg-[#22B9DD] hover:bg-[#22a8dd] rounded-full text-white ">
              <VscDebugStart size={22} className=" " />
            </Button>
            <p className="text-[#161439] text-md  max-w-20 leading-tight">
              Watch Our Class Demo
            </p>
          </div>
        </div>
        <div>
          <Image src={Logo1} alt="logo"  />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="636"
            height="240"
            viewBox="0 0 636 240"
            fill="none"
            className="pt-15"
          >
            <path
              d="M329.214 235.669C504.662 218.495 641.817 152.742 635.558 88.8048C629.3 24.8681 481.998 -13.0406 306.55 4.13346C131.102 21.3075 -6.05262 87.0608 0.205949 150.998C6.46452 214.934 153.767 252.843 329.214 235.669Z"
              fill="#B2DDFF"
            />
          </svg>
        </div>
      </div>
      <span className="relative h-[40rem] flex items-center justify-center w-full group"></span>
    </div>
  );
};
