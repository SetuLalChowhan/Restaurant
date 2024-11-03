import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

const Details = () => {
  return (
    <section className="w-full xl:h-[800px] mt-32">
      <div className="relative">
        <div className="flex sm:container p-5  lg:flex-row flex-col  gap-16 ">
          <div className="relative ">
            <img
              src={`/images/Details.png`}
              alt="aboutImage"
              className="w-full h-auto"
            />
            <div className="absolute flex justify-center items-center gap-4  lg:gap-8  lg:px-6 top-[5%] left-[2%] rounded-lg w-[180px] h-[90px] lg:w-[242px] lg:h-[137px] text-black bg-[#FFFFFF] ">
              <div className="relative flex ml-5 items-center justify-center">
                {/* Outer ring */}
                <div
                  className="absolute  w-16 h-16 lg:w-20 lg:h-20 border-4 border-[#FEBF00] rounded-full"
                  style={{
                    clipPath: "inset(10% 0 0 0)",
                    transform: "rotate(-45deg)", // Adjust the angle as needed
                  }}
                />
                <div
                  className=" lg:flex hidden  absolute w-4 h-4 border-4 border-[#FEBF00] rounded-full"
                  style={{
                    // Positioning the small circle at the end of the rotated line
                    top: "35%", // Center vertically
                    left: "-35%", // Position to the right of the outer circle
                    transform:
                      "translate(-50%, -50%) rotate(-45deg) translate(10px, 0)", // Adjust position and rotation
                  }}
                />
                <p className="lg:text-[26px] lg:font-[700]">50+</p>
              </div>
              <p className="lg:text-[16px] font-[600] xl:w-[93px] xl:h-[48px]">
                Market Experiences
              </p>
            </div>
          </div>
          <div className="xl:w-[624px]  text-black space-y-5 flex-1">
            <div className="flex justify-start items-center gap-10 border-b-2 border-[#B52B1D] text-[14px] font-[500] ">
              <p className="px-4 py-2 bg-[#B52B1D] text-white">About</p>
              <p>Experience</p>
              <p>Contact</p>
            </div>
            <p className="font-bebas md:text-[62px] text-[50px] font-[500] leading-none ">
              Exceptional culinary experience and delicious food
            </p>
            <p className="text-[16px] font-[400] text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
              consectetur adipiscing elit do eiusmod tempor incididunt ut labore
              et dolore magna minim veniam nostrud exercitation.
            </p>
            <div className="flex justify-start items-center gap-5">
              <Link
                className="px-4 py-3 bg-[#FEBF00] font-[700] text-[18px] rounded-sm"
                to="#"
              >
                About More
              </Link>
              <div className="flex gap-2">
                <FiPhoneCall size={30} color="#B52B1D" />
                <p className="font-[700] text-[18px]">+88 3426 739 485</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden lg:flex absolute lg:right-2  top-80 ">
          <img src={`/images/sliced-1.png`} alt="sliced1" />
        </div>
        <div className="lg:container p-6 flex lg:flex-row font-bebas   flex-col">
          <div className="flex justify-center items-center  gap-3">
            <img src={`/images/group1.png`} alt="group1" />
            <div className="xl:w-[374px] lg:h-[70px]">
              <p className=" md:text-[26px] ]">Fast Delivery</p>
              <p className="md:text-[20px]  text-[#0A1425]">
                within 30 Minutes
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center  gap-3">
            <img src={`/images/group2.png`} alt="group2" />
            <div className="xl:w-[374px] lg:h-[70px]">
              <p className=" md:text-[26px] ">Absolute Dining</p>
              <p className="md:text-[20px]  text-[#0A1425]">
                Best buffet restaurant
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center  gap-3">
            <img src={`/images/group3.png`} alt="group3" />
            <div className="xl:w-[374px] lg:h-[70px]">
              <p className=" md:text-[26px] ">Pickup Delivery</p>
              <p className="md:text-[20px]  text-[#0A1425]">
                Grab your food order
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
