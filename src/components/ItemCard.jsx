import React from "react";
import { DataStorage } from "../assets/Data";
import { SwiperSlide } from "swiper/react";
import DataSlide from "./DataSlide";
import SwipernavButton from "./SwipernavButton";

const ItemCard = () => {
  const cards = DataStorage.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="flex flex-col  gap-3 justify-center items-center">
        <img src={item.image} alt="image" />
        <p className="md:text-[26px] font-[500] font-bebas">{item.name}</p>
        <p className="text-[16px] font-[400] text-[#0A1425]">{item.details}</p>
      </div>
    </SwiperSlide>
  ));

  return (
    <DataSlide
      cards={cards}
      num1={2}
      num2={4}
      custom_arrow={<SwipernavButton />}
    />
  );
};

export default ItemCard;
