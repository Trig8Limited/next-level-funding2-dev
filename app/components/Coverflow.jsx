import React from "react";
import CarouselCard from "./CarouselCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination,  Autoplay } from "swiper/modules";
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
        modules={[EffectCoverflow, Pagination, Autoplay,]}
        className="mySwiper"
        initialSlide={1}
      >
        <SwiperSlide>
          <CarouselCard
            img="/assets/crown-blue.png"
            title="Trading Evaluation at its best"
            text="During the first month, enjoy an 80% profit split on all accounts. In the second month, elevate your returns with a 90% share of all profits earned!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img="/assets/crown-pink.svg"
            title="High Profit Splits"
            text="We shoulder all the risks on live accounts, allowing you to trade comfortably without concerns about losses.
              "
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img="/assets/Asset 3.png"
            title="No Risk"
            text=" Our evaluation account empowers traders to showcase their skills, qualifying them to trade with our live funds."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Coverflow;
