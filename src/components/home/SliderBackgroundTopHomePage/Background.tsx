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
      <style>
        {`.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
}

.swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
}
.swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: #23b9dd !important;
    width: 90px !important;
    border-radius: 20px !important;
    opacity: 1 !important;

}
.swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 25px));
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 25px));
    display: inline-block;
    border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
    background: var(--swiper-pagination-bullet-inactive-color, #000);
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
    }
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{
    position: absolute;
    left: 0;  
    background:#000;
    }
    .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    left: -35% !important;
}
    @media only screen and (max-width:800px) {
      .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    left: 0px !important;
}

`}
      </style>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Thumbs]}
        // loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
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
