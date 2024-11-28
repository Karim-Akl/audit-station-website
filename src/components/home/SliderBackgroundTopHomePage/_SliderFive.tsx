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
import Logo1 from "@../../../public/assets/image 7.png";
import Logo2 from "@../../../public/assets/img-1.png";
import Logo3 from "@../../../public/assets/img1.png";
import Logo4 from "@../../../public/assets/1.png";
import Logo5 from "@../../../public/assets/2.png";
import Logo6 from "@../../../public/assets/3.png";
import Logo7 from "@../../../public/assets/4.png";
import group from "@../../../public/assets/Group.svg";
import arrow from "@../../../public/assets/arrow.svg";
import dots from "@../../../public/assets/Frame-2.png";
import { Button } from "../../ui/button";
import Image from "next/image";
import { VideoPlayer } from "../../helper/videoPlayer";
import { useLocale } from 'next-intl';

export const SliderFive: React.FC = () => {
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const headerStyle = locale === 'en' ? 'mr-0 md:mr-10' : locale === 'ar' ? 'ml-80 mr-0' : 'bg-gray text-center';

  return (
    <div className="swiper-2 w-full">
      <div className="w-full background-color relative h-[calc(100vh-10px)] text-white overflow-hidden ">
        <div className="flex  justify-between m-auto items-center h-full">
          <div className="p-20 my-10 flex z-50 flex-col gap-4 max-w-lg md:max-w-2xl ">
            <h1 className="text-4xl text-[#666] font-bold flex-wrap">
              Develop your skills through the courses on the platform!
            </h1>
            <p className="text-[#22B9DD] text-md">
              At Audit Station, our experts work on your tax reports with great precision and accuracy, which will ensure no errors or mistakes in them, saving you from the hassle and save your business from having any financial risks or issues with the authorities.
            </p>
            <div className="flex items-center gap-4">
              <Button className="bg-[#22B9DD] hover:bg-[#22a8dd] text-white rounded-2xl font-semibold">
                Checkout Courses
              </Button>

              <VideoPlayer link="" />

              <p className="text-[#161439] text-md  max-w-24 leading-tight">
                Watch Our
                Class Demo
              </p>
            </div>
          </div>
          <div className={`relative hidden lg:block top-36   md:px-5 px-0 mt-32 `}>
            <div className="flex  justify-center items-center text-center rounded-full w-full  h-full relative m-auto">


              <div className="flex bg-green-400 pb-20    z-30  justify-center items-center text-center rounded-full md:h-32 md:w-32  lg:h-60 lg:w-60 absolute -top-[100%] left-[-120%] m-auto">
                <Image
                  src={Logo2}
                  alt="logo"
                  loading="lazy"
                  className=" z-30 object-contain w-[90%] rounded-full "
                />
              </div>

              <div className="flex bg-yellow-400 overflow-hidden pt-3  z-30   justify-center items-center text-center rounded-full  h-60 w-60 relative m-auto ">
                <Image
                  src={Logo1}
                  alt="logo"
                  loading="lazy"
                  className=" z-30 object-cover w-[100%] h-auto  "
                />
              </div>
              <div className="flex bg-blue-400  pb-20 z-30   justify-center items-center text-center rounded-full  h-60 w-60 absolute -top-[150%] -left-[10%] m-auto">
                <Image
                  src={Logo3}
                  alt="logo"
                  loading="lazy"
                  className=" z-30 object-contain w-[100%] rounded-full"
                />
              </div>


            </div>


            <div className="relative z-10">
              <Image
                src={group}
                alt="logo"
                loading="lazy"
                className="absolute right-8 bottom-80"
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
                className="absolute bottom-80 left-[500px]  -rotate-180  "
              />
            </div>



            <div className="absolute  bottom-2  right-60 bg-white text-[#5C5C5C] p-4 w-full  border shadow_hover rounded-xl z-30">
              <div className="flex w-full m-auto justify-center items-center">
                <div className="flex bg-yellow-400 overflow-hidden z-0   justify-center items-center text-center rounded-full  h-10 w-10">
                  <Image
                    src={Logo4}
                    alt="logo"
                    loading="lazy"
                    className=" z-30 object-fill w-[100%] "
                  />
                </div>
                <div className="flex bg-green-400 overflow-hidden z-10 translate-x-[-4px] shadow-xl   justify-center items-center text-center rounded-full  h-10 w-10">
                  <Image
                    src={Logo5}
                    alt="logo"
                    loading="lazy"
                    className=" z-30 object-fill w-[100%] "
                  />
                </div>

                <div className="flex bg-green-400 overflow-hidden z-20 translate-x-[-8px] shadow-xl   justify-center items-center text-center rounded-full  h-10 w-10">
                  <Image
                    src={Logo6}
                    alt="logo"
                    loading="lazy"
                    className=" z-30 object-fill w-[100%] "
                  />
                </div>

                <div className="flex bg-green-400 overflow-hidden z-30 translate-x-[-12px] shadow-xl   justify-center items-center text-center rounded-full  h-10 w-10">
                  <Image
                    src={Logo7}
                    alt="logo"
                    loading="lazy"
                    className=" z-30 object-fill w-[100%] "
                  />
                </div>
                <div className="flex bg-green-400 overflow-hidden z-30 translate-x-[-16px] shadow-xl   justify-center items-center text-center rounded-full  h-10 w-10">
                  <Image
                    src={Logo5}
                    alt="logo"
                    loading="lazy"
                    className=" z-30 object-fill w-[100%] "
                  />
                </div>

              </div>
              <div className="flex space-x-2">

                <div className="flex flex-col space-y-6">
                  <span className="text-xl font-semibold">Join our community of 1200+ Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
