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
import Logo1 from "@../../../public/assets/image-slider-2.png";
import group from "@../../../public/assets/Group-2.png";
import arrow from "@../../../public/assets/arrow.svg";
import dots from "@../../../public/assets/Frame-2.png";
import { Button } from "../../ui/button";
import Image from "next/image";
import { VideoPlayer } from "../../helper/videoPlayer";

export const SliderTow: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <div className="swiper-2 w-full">
      <div className=" background-color relative h-[calc(100vh-50px)] text-white overflow-hidden   ">
        <div className="flex  justify-between m-auto  items-center h-full ">
          <div className="p-10 my-10 flex flex-col gap-4 max-w-xl   ">
            <h1 className="text-4xl text-[#666] font-bold flex-wrap">
              Become a certified accountant at Audit Station..
            </h1>
            <p className="text-[#22B9DD] text-md">
              To increase your dependability and reliability with companies in their search results and increase your chances of obtaining a job tenfold, obtain our accreditation certificate.
            </p>
            <div className="flex items-center gap-4 ">
              <Button className="bg-[#22B9DD] hover:bg-[#22a8dd] text-white rounded-2xl font-semibold">
                Become Certifited
              </Button>

              <VideoPlayer link="" />

              <p className="text-[#161439] text-md  max-w-24 leading-tight">
                Watch Our
                Class Demo
              </p>
            </div>
          </div>
          <div className="mt-5 relative hidden md:block top-36 w-[479.06px]  mr-10  ">
            <Image
              src={Logo1}
              alt="logo"
              loading="lazy"
              className="absolute z-30 object-contain  right-14 bottom-4    "
            />
            <div className="relative z-10">
              <Image
                src={group}
                alt="logo"
                loading="lazy"
                className="absolute right-8 bottom-80  "
              />
              <Image
                src={group}
                alt="logo"
                loading="lazy"
                className="absolute bottom-10 -left-48"
              />
              <Image
                src={arrow}
                alt="logo"
                loading="lazy"
                className="absolute bottom-10 -left-96"
              />
            </div>



            <div className="absolute  bottom-2  right-10 bg-white text-[#5C5C5C] p-4    border shadow_hover rounded-xl z-30">
              <div className="flex space-x-2">
                <div className="bg-[#D6BBFB] h-8  px-2 pt-1 rounded-sm ">
                  <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.9294 4.28516H1.07227L15.0008 15.758L29.0869 4.3173C29.0353 4.30223 28.9827 4.2915 28.9294 4.28516Z" fill="white" />
                    <path d="M15.676 17.9742C15.2813 18.2974 14.7133 18.2974 14.3186 17.9742L0 6.17773V24.6427C0 25.2345 0.479694 25.7142 1.07145 25.7142H28.9285C29.5203 25.7142 30 25.2345 30 24.6427V6.33631L15.676 17.9742Z" fill="white" />
                  </svg>

                </div>

                <div className="flex flex-col space-y-6">
                  <span className="text-[20px] font-medium">Congratulations</span>
                  <span className="text-xl font-semibold">Your promotion completed</span>
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

    </div>
  );
};
