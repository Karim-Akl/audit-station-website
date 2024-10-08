"use client";
import React, { useState } from "react";
import Logo1 from "@../../../public/assets/background.png";
import group from "@../../../public/assets/Group.svg";
import arrow from "@../../../public/assets/arrow.svg";
import dots from "@../../../public/assets/dots.png";
import { Button } from "../ui/button";
import { VscDebugStart } from "react-icons/vsc";
import Image from "next/image";
import VideoPlay from "../home/VideoPlay";

export const Background: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openVideo = () => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }
  return (
    <div className="w-full background-color relative h-[calc(100vh-120px)]  bg-fit text-white">
      <div className="flex justify-center items-center h-full">
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

            <Button className="bg-[#22B9DD] hover:bg-[#22a8dd] rounded-full text-black " onClick={openVideo}>
              <VscDebugStart size={22} />
            </Button>

            <VideoPlay
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />


            <p className="text-[#161439] text-md  max-w-20 leading-tight">
              Watch Our Class Demo
            </p>
          </div>
        </div>
        <div className="relative hidden md:block top-36 ">
          <Image
            src={Logo1}
            alt="logo"
            loading="lazy"
            className="absolute z-30 right-14 bottom-16"
          />
          <div className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="636"
              height="240"
              viewBox="0 0 636 240"
              fill="none"
              className="z-20"
            >
              <path
                d="M329.214 235.669C504.662 218.495 641.817 152.742 635.558 88.8048C629.3 24.8681 481.998 -13.0406 306.55 4.13346C131.102 21.3075 -6.05262 87.0608 0.205949 150.998C6.46452 214.934 153.767 252.843 329.214 235.669Z"
                fill="#B2DDFF"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="636"
              height="240"
              viewBox="0 0 636 240"
              fill="none"
              className="absolute  -z-10 top-4  "
            >
              <path
                d="M329.214 235.669C504.662 218.495 641.817 152.742 635.558 88.8048C629.3 24.8681 481.998 -13.0406 306.55 4.13346C131.102 21.3075 -6.05262 87.0608 0.205949 150.998C6.46452 214.934 153.767 252.843 329.214 235.669Z"
                fill="#1B2336"
              />
            </svg>
            <Image
              src={group}
              alt="logo"
              loading="lazy"
              className="absolute right-8 bottom-80  "
            />
          </div>

          <Image
            src={group}
            alt="logo"
            loading="lazy"
            className="absolute top-32 -left-10   "
          />
          <Image
            src={arrow}
            alt="logo"
            loading="lazy"
            className="absolute top-14  -left-48"
          />
        </div>
      </div>
      <Image
        src={dots}
        alt="logo"
        loading="lazy"
        className="absolute bottom-2 p-0 m-0 left-28  "
      />
    </div>
  );
};
