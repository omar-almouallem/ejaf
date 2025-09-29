"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Slide } from "../slide";
import { Controllers } from "../controllers";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/requests/shared";
import { SliderSkeleton } from "@/components/skeletons";

export default function ImageSlider() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const {
    data: blogs,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <SliderSkeleton />;
  }
  if (error) {
    return (
      <section className="min-h-dvh">
        <div className="main-layout px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 h-full flex flex-col justify-center items-center text-center">
          <div className="text-lg text-red-400">{error.message}</div>
        </div>
      </section>
    );
  }
  return (
    <div className="relative w-full mx-auto -mt-6">
      <Controllers prevRef={prevRef} nextRef={nextRef} />
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + ' custom-bullet"></span>';
          },
        }}
        spaceBetween={16}
        slidesPerView={1}
        slidesPerGroupSkip={1}
        loop={true}
        watchOverflow={false}
        modules={[Navigation, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            slidesPerGroupSkip: 0,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 8,
            slidesPerGroupSkip: 0,
          },
          1280: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 37,
            slidesPerGroupSkip: 0,
          },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <Slide id={blog.id} {...blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
