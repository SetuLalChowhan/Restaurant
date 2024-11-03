import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat lg:p-6 md:p-12 h-[1000px] lg:h-[600px]"
      style={{ backgroundImage: "url('/images/footerImage.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="container ">
          <h1 className="text-[24px] md:text-[36px] lg:text-[48px] xl:text-[63px] font-bold font-bebas text-center">
            We’re ready to give you the best dining experiences
          </h1>

          <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around gap-8 mt-10 text-center">
            <div className="w-full md:w-[312px] flex flex-col items-center gap-1">
              <img src="/images/clock.png" alt="clock" className="w-8 h-8" />
              <p className="text-[20px] md:text-[24px]  font-bebas uppercase">Opening Hours</p>
              <p className="text-[14px] md:text-[16px] font-roboto">Monday-Sunday</p>
              <p className="text-[14px] md:text-[16px] font-roboto">9 AM to 11:30 PM</p>
            </div>

            <div className="w-full md:w-[312px] flex flex-col items-center gap-1">
              <img src="/images/call.png" alt="phone" className="w-8 h-8" />
              <p className="text-[20px] md:text-[24px]  font-bebas uppercase">Let's Talk</p>
              <p className="text-[14px] md:text-[16px] font-roboto">Phone: 1-800-222-4545</p>
              <p className="text-[14px] md:text-[16px] font-roboto">9 AM to 11:30 PM</p>
            </div>

            <div className="w-full md:w-[312px] flex flex-col items-center gap-1">
              <img src="/images/mail.png" alt="email" className="w-8 h-8" />
              <p className="text-[20px] md:text-[24px]  font-bebas uppercase">Book a Table</p>
              <p className="text-[14px] md:text-[16px] font-roboto">Email: demo@website.com</p>
              <p className="text-[14px] md:text-[16px] font-roboto">Support: support@website.com</p>
            </div>

            <div className="w-full md:w-[312px] flex flex-col items-center gap-1">
              <img src="/images/map.png" alt="location" className="w-8 h-8" />
              <p className="text-[20px] md:text-[24px] font-bebas uppercase">Location</p>
              <p className="text-[14px] md:text-[16px] font-roboto">123 Street, New York City</p>
              <p className="text-[14px] md:text-[16px] font-roboto">United States Of America</p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10 lg:mt-16">
            <div className="flex flex-col items-center gap-6">
              <div className="flex gap-4 md:gap-6 lg:gap-8">
                <Link to="#"><img src="/images/facebook.png" alt="facebook" className="w-6 h-6 md:w-8 md:h-8" /></Link>
                <Link to="#"><img src="/images/twitter.png" alt="twitter" className="w-6 h-6 md:w-8 md:h-8" /></Link>
                <Link to="#"><img src="/images/instagram.png" alt="instagram" className="w-6 h-6 md:w-8 md:h-8" /></Link>
                <Link to="#"><img src="/images/linkdin.png" alt="linkedin" className="w-6 h-6 md:w-8 md:h-8" /></Link>
              </div>
              <div className="text-center text-[14px] md:text-[16px] lg:text-[21px]">
                © 2023 <span className="text-[#FEBF00]">Niomax</span> All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
