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
import { SliderOne } from "./_SliderOne";
import { SliderTow } from "./_SliderTow";
import { SliderThree } from "./_SliderThree";
import { SliderFour } from "./_SliderFour";
import { SliderFive } from "./_SliderFive";
export const Background: React.FC = () => {
  return (
    <div className="swiper">
      <Swiper
        modules={[  Autoplay, Thumbs]}
        // loop={true}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        // autoplay={{ delay: 6000 }}
      >
        <SwiperSlide>
          <SliderOne />
        </SwiperSlide>
        <SwiperSlide>
          <SliderTow />
        </SwiperSlide>
        <SwiperSlide>
          <SliderThree />
        </SwiperSlide>
        <SwiperSlide>
          <SliderFour />
        </SwiperSlide>
        <SwiperSlide>
          <SliderFive />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
