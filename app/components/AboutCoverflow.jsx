'use client'
import React from "react";
import CarouselCard from "./CarouselCard";
import { Swiper, SwiperSlide } from "swiper/react";
import GlassMorphCard from "./GlassMorphCard";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";


const Coverflow = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        initialSlide={1}
      >
        <SwiperSlide>
          <Image width={100} height={100} src="/assets/pexels-lara-jameson-9324359.jpg" className="w-full h-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={100} height={100} src="/assets/pexels-mizuno-k-12912157.jpg" className="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={100} height={100} src="/assets/pexels-sora-shimazaki-5668839.jpg" className="" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Coverflow;
