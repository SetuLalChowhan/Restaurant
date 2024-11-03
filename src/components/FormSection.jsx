import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const FormSection = () => {
  return (
    <div
      className="relative overflow-hidden  bg-cover bg-no-repeat p-12 h-[900px] mt-28 "
      style={{ backgroundImage: "url('/images/formImage.png')" }}
    >
      <div className="absolute sm:container lg:p-28 p-6 inset-0 h-full w-full text-white  bg-opacity-60">
        <div className="space-y-6">
          <div className="flex justify-start items-center gap-2">
            <p className=" border-1px w-3 h-3 bg-[#B52B1D]"></p>
            <p className="text-[20px] font-[700] font-roboto text-[#BD1F17] ">
              Book Now
            </p>
          </div>
          <h1 className="sm:text-[62px] text-[40px] font-[500] font-bebas uppercase">
            Book Your Table
          </h1>
          <p className=" md:w-[545px] sm:text-[16px] font-[400] font-roboto text-[#F7F8F9]">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <form className="md:w-[635px] space-y-6">
            <div className="flex md:flex-row flex-col gap-10">
              <input
                type="text"
                placeholder="Your Name*"
                className=" px-6 py-3 border-[1px] border-[#E5E7EB] bg-transparent md:w-[302px]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className=" px-6 py-3 border-[1px] border-[#E5E7EB] bg-transparent md:w-[302px]"
              />
            </div>
            <div className="flex md:flex-row flex-col gap-10">
              <div className="relative md:w-[302px]">
                <input
                  type="text" // Keep this as 'text' if you want to use a custom date picker, otherwise use 'date'
                  placeholder="Reservation Date"
                  className="px-6 py-3 border-[1px] border-[#E5E7EB] bg-transparent w-full pr-12" // Added padding on the right
                />
                <AiOutlineCalendar className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>

              <input
                type="number"
                placeholder="Total People"
                className="px-6 py-3 border-[1px] border-[#E5E7EB] bg-transparent md:w-[302px]"
              />
            </div>
            <textarea
              type="text"
              placeholder="Message"
              className=" px-6 py-3 border-[1px] border-[#E5E7EB] bg-transparent w-full h-[140px] "
            />
            <div></div>
            <button
              type="submit "
              className="uppercase px-5 py-4 bg-[#FEBF00] text-[188px ] font-[700] text-black font-roboto rounded-sm "
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
