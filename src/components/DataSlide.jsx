
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwipernavButton from "./SwipernavButton";
import { DataStorage } from "../assets/Data";

const DataSlide = ({cards,custom_arrow,num1,num2}) => {
  return (
    <div className="relative">

      <Swiper
        style={{
          "--swiper-navigation-color": "000",
          "--swiper-navigation-size": "20px",
        }}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          760: {
            slidesPerView: num1,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: num2,
            spaceBetween: 40,
          },
        }}
        navigation={false}
        modules={[Autoplay]}
        className="tailwind Css"
      >
          {cards}
          {custom_arrow}
           
       
      </Swiper>
    </div>
  );
};

export default DataSlide;
