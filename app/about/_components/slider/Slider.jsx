"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Slider({ slides }) {
  const swiperRef = useRef(null);
  return (
    <div className="relative w-full mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={600}
        className="text-slider"
      >
        {slides.map(({ _id, text }) => (
          <SwiperSlide key={_id}>
            <p className="text-lg lg:text-xl xl:text-2xl text-center text-neutral-100">
              {text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
