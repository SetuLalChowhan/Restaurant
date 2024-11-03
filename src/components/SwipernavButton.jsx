import React from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SwipernavButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-4 mt-5 justify-center items-center">
      {/* Prev Button */}
      <button
        className=" transition duration-300 ease-in-out transform "
        onClick={() => swiper.slidePrev()}
        aria-label="Previous slide"
      >
        <IoIosArrowBack size={20} />
      </button>

      {/* Next Button */}
      <button
        className="transition duration-300 ease-in-out transform "
        onClick={() => swiper.slideNext()}
        aria-label="Next slide"
      >
        <IoIosArrowForward size={20} />
      </button>
    </div>
  );
};

export default SwipernavButton;