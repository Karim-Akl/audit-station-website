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
import Logo1 from "@../../../public/assets/img-4.png";
import group from "@../../../public/assets/Group.svg";
import arrow from "@../../../public/assets/arrow-4.png";
import dots from "@../../../public/assets/Frame-2.png";
import { Button } from "../../ui/button";
import Image from "next/image";
import { VideoPlayer } from "../../helper/videoPlayer";

export const SliderFour: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="swiper-2 w-full">
<div className="w-full background-color relative h-[calc(100vh-10px)] text-white overflow-hidden">
<div className="flex  justify-between m-auto items-center h-full">
            <div className="p-20 my-10 flex flex-col gap-4 w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl ">

          <h1 className="text-4xl text-[#666] font-bold flex-wrap w-full ">
          Become an Instructor
          </h1>
          <p className="text-[#767676] text-md">
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
        <div className=" relative hidden lg:block top-60 w-[479.06px]  mr-4  mt-20   ">
          <Image
            src={Logo1}
            alt="logo"
            loading="lazy"
            className="absolute z-30 object-contain  right-14 bottom-4  rounded-xl w-[479.06px] h-[479.06px] "
          />
          <div className="relative z-10">
            <Image
              src={group}
              alt="logo"
              loading="lazy"
              className="absolute right-8 bottom-96  "
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
              className="absolute bottom-80 -left-full"
            />
          </div>



          <div className="absolute  bottom-2  right-52 w-[400px] bg-white text-[#5C5C5C] p-4    border shadow_hover rounded-xl z-30">
            <div className="flex space-x-2">
              <div className="bg-[#E0F2FE] h-12  px-2 pt-1 rounded-full w-12 ">
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    className="mt-2 ml-1"
                  >
                    <path
                      d="M6.89209 20.9435H5.33161C4.18251 20.9435 3.25098 20.012 3.25098 18.8629V4.29841C3.25098 3.14931 4.18251 2.21777 5.33161 2.21777H19.8961C21.0452 2.21777 21.9767 3.14931 21.9767 4.29841V18.8629C21.9767 20.012 21.0452 20.9435 19.8961 20.9435H18.3356M12.6138 19.9032C14.3375 19.9032 15.7348 18.5059 15.7348 16.7822C15.7348 15.0586 14.3375 13.6613 12.6138 13.6613C10.8902 13.6613 9.49288 15.0586 9.49288 16.7822C9.49288 18.5059 10.8902 19.9032 12.6138 19.9032ZM12.6138 19.9032L12.6361 19.903L9.31465 23.2245L6.37218 20.282L9.51333 17.1408M12.6138 19.9032L15.9354 23.2245L18.8778 20.282L15.7367 17.1408M9.49288 6.37904H15.7348M7.41225 10.0202H17.8154"
                      stroke="#35D2FC"
                      strokeWidth="2.08064"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

              </div>

              <div className="flex flex-col space-y-6">
                <span className="text-[20px] font-medium">Congratulations</span>
                <span className="text-xl font-semibold">100,000+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Image
        src={dots}
        alt="logo"
        loading="lazy"
        className="absolute bottom-2 p-0 m-0 left-28  "
      /> */}
    </div>

  </div>
  );
};
