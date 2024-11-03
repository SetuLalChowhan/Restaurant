import React from "react";
import { ReviewData } from "../assets/Data";
import { SwiperSlide } from "swiper/react";
import DataSlide from "./DataSlide";
import SwipernavButton from "./SwipernavButton";

const ReviewCard = () => {
  const cards = ReviewData.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="w-full lg:w-[1320px] h-auto lg:h-[556px] text-black flex flex-col lg:flex-row-reverse justify-center items-center px-4 lg:px-0">
        
        {/* Image and Play Button */}
        <div className="relative w-full lg:w-[764px] h-[300px] lg:h-[555px]  lg:mb-0">
          <img
            src={item.video}
            alt="video thumbnail"
            className="object-cover h-full w-full"
          />
          <button>
            <img
              src="/images/Play.png"
              alt="play"
              className="absolute w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] inset-0 m-auto"
              style={{
                top: "10%",
                left: "10%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </button>
        </div>

        {/* Review Text and User Info */}
        <div className="w-full lg:w-[557px] h-auto lg:h-[555px] bg-[#FEBF00] p-6 lg:px-20 lg:py-20">
          <svg
            className="w-6 mb-4"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18V10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983V18H0Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-[16px] lg:text-[20px] font-[400]">{item.review}</p>
          <div className="w-full lg:w-[361px] h-[57px] mt-8 lg:mt-40">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[16px] lg:text-[18px] font-bebas font-[500]">{item.name}</p>
                <p className="text-[12px] lg:text-[14px] font-roboto font-[400]">
                  {item.location}
                </p>
              </div>
              <img src={item.avatar} alt="user avatar" className="w-10 h-10 lg:w-12 lg:h-12 object-contain" />
            </div>
            <div className="border-b-[1px] border-b-black"></div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return <DataSlide cards={cards} num1={1} num2={1} custom_arrow={<SwipernavButton />} />;
};

export default ReviewCard;
