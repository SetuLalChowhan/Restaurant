import React from "react";
import Herosection from "../components/Herosection";
import About from "../components/About";
import DataSlide from "../components/DataSlide";
import FormSection from "../components/FormSection";
import ItemCard from "../components/ItemCard";
import ReviewCard from "../components/ReviewCard";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <Herosection />
      {/* About Section */}
      <About />
      {/* Menu slide section */}
      <div className=" relative  p-5  space-y-10  w-full lg:h-[600px] mt-20 ">
        <div className=" sm:container  space-y-4">
          <div className="flex justify-start items-center gap-2">
            <p className=" border-1px w-3 h-3 bg-[#B52B1D]"></p>
            <p className="text-[20px] font-[700] font-roboto text-[#BD1F17] ">
              Crispy, Every Bite Taste
            </p>
          </div>
          <h1 className="sm:text-[62px] text-[40px] font-[700] font-bebas">
            POPULAR FOOD ITEMS
          </h1>
        </div>
        <div className="absolute lg:flex top-4 hidden ">
          <img src="/images/salad.png" />
        </div>
        <div className="sm:container mt-5 ">
          <DataSlide cards={<ItemCard />} />
        </div>
      </div>
      {/* Form Section */}
      <FormSection />
      {/* Testimonial Section */}
      <div className=" relative space-y-10  w-full mt-20 lg:h-[966px]  ">
        <div className=" sm:container p-5 space-y-4">
          <div className="flex justify-start items-center gap-2">
            <p className=" border-1px w-3 h-3 bg-[#B52B1D]"></p>
            <p className="text-[20px] font-[700] font-roboto text-[#BD1F17] ">
              Crispy, Every Bite Taste
            </p>
          </div>
          <h1 className="sm:text-[62px] text-[40px] font-[700] font-bebas">
            What Some of my Customers Say
          </h1>
        </div>
        <div className="absolute lg:flex top-4 hidden ">
          <img src="/images/tomatoo.png" />
        </div>
        <div className="xl:container p-10">
          <DataSlide cards={<ReviewCard />} />
        </div>
        <div className="absolute right-2  lg:flex top-20 hidden ">
          <img src="/images/veg.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
