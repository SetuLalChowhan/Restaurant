import React from "react";



const Herosection = () => {
  return (
    <section className="w-full  bg-red-600">
      <div className="xl:container p-3 flex lg:flex-row flex-col lg:py-32 gap-8 items-center 2">
        {/* Text Section */}
        <div className=" lg:absolute lg:top-[35%] z-10 space-y-5">
          <h1 className=" bg-red-500 bg-opacity-40  text-[40px] lg:text-[120px] lg:w-[830px] text-white leading-tight font-bebas">
            Taste the authentic Saudi cuisine
          </h1>

          <p className=" custom-width md:text-[24px] font-[400] text-white font-roboto ">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.{" "}
          </p>
          <button className="bg-[#FEBF00] text-[18px] font-[700] px-4 py-4">
            {" "}
            Explore Menu
          </button>
        </div>

        {/* Image Section */}
        <div className=" custom-left">
          <img src={`/images/Banner.png`} alt="Banner" className="w-full object-contain " />

          {/* Star Image positioned at a responsive location on the banner */}
          <img
            src={`/images/Vector2.png`}
            alt="Star"
            className="absolute -top-[5%] right-[4%]  transform" // Adjust as needed
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
