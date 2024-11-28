"use client";
import React, { useState } from "react";
// import Swiper  platform 
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import Logo1 from "@../../../public/assets/slider-3.png";
import group from "@../../../public/assets/Group-3.png";
import arrow from "@../../../public/assets/arrow.svg";
import dots from "@../../../public/assets/Frame-3.png";
import { Button } from "../../ui/button";
import Image from "next/image";
import { VideoPlayer } from "../../helper/videoPlayer";
import { useLocale } from 'next-intl';


export const SliderThree: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  const openVideo = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const headerStyle = locale === 'en' ? 'mr-0 md:mr-10' : locale === 'ar' ? 'ml-32 mr-0' : 'bg-gray text-center';

  return (
    <div className="swiper-3">


<div className="w-full background-color relative h-[calc(100vh-10px)] text-white overflow-hidden">
          <div className="flex  justify-between m-auto items-center h-full">
          <div className="p-20 my-10 flex flex-col gap-4 max-w-xl ">

              <h1 className="text-4xl text-[#666] font-bold flex-wrap">
                Get a job in the country of your choice with the right salary!
              </h1>
              <p className="text-[#22B9DD] text-md">
                At Audit Station, our experts work on your tax reports with great precision and accuracy, which will ensure no errors or mistakes in them, saving you from the hassle and save your business from having any financial risks or issues with the authorities.
              </p>
              <div className="flex items-center gap-4">
                <Button className="bg-[#22B9DD] hover:bg-[#22a8dd] text-white rounded-2xl font-semibold">
                  Become An Accountant
                </Button>

                <VideoPlayer link="" />

                <p className="text-[#161439] text-md  max-w-24 leading-tight">
                  Watch Our
                  Class Demo
                </p>
              </div>
            </div>
            <div className={`relative hidden lg:block top-60  mr-10 ${headerStyle} `}>
              <Image
                src={Logo1}
                alt="logo"
                loading="lazy"
                className="absolute z-30 -right-20  md:right-44 bottom-32 object-contain w-[479.06px] h-[479.06px] "
              />
              <div className="relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="636"
                  height="240"
                  viewBox="0 0 636 240"
                  fill="none"
                  className="z-20 w-[80%]"
                >
                  <path
                    d="M329.214 235.669C504.662 218.495 641.817 152.742 635.558 88.8048C629.3 24.8681 481.998 -13.0406 306.55 4.13346C131.102 21.3075 -6.05262 87.0608 0.205949 150.998C6.46452 214.934 153.767 252.843 329.214 235.669Z"
                    fill="#FACC15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="636"
                  height="240"
                  viewBox="0 0 636 240"
                  fill="none"
                  className="absolute  -z-10 top-4  w-[80%] md:w-[80%]"
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
          <div className="absolute  bottom-20  right-10 bg-white text-[#5C5C5C] p-4    border shadow_hover rounded-xl z-30">
              <div className="flex space-x-2">
                <div className="bg-[#F88C3D] h-8  px-2 pt-1 rounded-sm ">
                  <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.9294 4.28516H1.07227L15.0008 15.758L29.0869 4.3173C29.0353 4.30223 28.9827 4.2915 28.9294 4.28516Z" fill="white" />
                    <path d="M15.676 17.9742C15.2813 18.2974 14.7133 18.2974 14.3186 17.9742L0 6.17773V24.6427C0 25.2345 0.479694 25.7142 1.07145 25.7142H28.9285C29.5203 25.7142 30 25.2345 30 24.6427V6.33631L15.676 17.9742Z" fill="white" />
                  </svg>

                </div>

                <div className="flex flex-col space-y-6">
                  <span className="text-[20px] font-medium">Congratulations</span>
                  <span className="text-sm font-semibold">Your promotion completed</span>
                </div>
              </div>
            </div>
            </div>
          </div>

        </div>
    </div>
  );
};
