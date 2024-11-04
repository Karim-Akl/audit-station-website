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
import { VideoPlayer } from "../helper/videoPlayer";

export const Background: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <div className="w-full background-color relative h-[calc(100vh-50px)] text-white overflow-hidden">
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

            <VideoPlayer />

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
          <div className="absolute top-28 right-10 bg-white text-[#5C5C5C] p-4  text-center border shadow_hover rounded-sm z-30">
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M6.89209 20.9435H5.33161C4.18251 20.9435 3.25098 20.012 3.25098 18.8629V4.29841C3.25098 3.14931 4.18251 2.21777 5.33161 2.21777H19.8961C21.0452 2.21777 21.9767 3.14931 21.9767 4.29841V18.8629C21.9767 20.012 21.0452 20.9435 19.8961 20.9435H18.3356M12.6138 19.9032C14.3375 19.9032 15.7348 18.5059 15.7348 16.7822C15.7348 15.0586 14.3375 13.6613 12.6138 13.6613C10.8902 13.6613 9.49288 15.0586 9.49288 16.7822C9.49288 18.5059 10.8902 19.9032 12.6138 19.9032ZM12.6138 19.9032L12.6361 19.903L9.31465 23.2245L6.37218 20.282L9.51333 17.1408M12.6138 19.9032L15.9354 23.2245L18.8778 20.282L15.7367 17.1408M9.49288 6.37904H15.7348M7.41225 10.0202H17.8154"
                  stroke="#35D2FC"
                  stroke-width="2.08064"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex flex-col space-y-6">
                <span className="text-[16px] font-medium">Number of hired</span>
                <span className="text-3xl font-semibold"> 100,000+</span>
              </div>
            </div>
          </div>
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
