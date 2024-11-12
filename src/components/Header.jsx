import React, { useState } from "react";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleChange = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full sticky top-0 bg-red-600 text-white z-30 ">
      <div className="md:container flex justify-between px-4 py-5">
        {/* Logo and Desktop Nav */}
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <img src={`/images/Vector.png`} alt="logo" />
            <h1 className="text-[29px] font-semibold">Restaurant</h1>
          </Link>
          <nav className="hidden lg:flex gap-4 text-[15px] font-medium">
            <Link
              to="/"
              className="hover:text-[#FEBF00] transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/"
              className="hover:text-[#FEBF00] transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="#"
              className="hover:text-[#FEBF00] transition-colors duration-200"
            >
              Portfolio
            </Link>
            <Link
              to="#"
              className="hover:text-[#FEBF00] transition-colors duration-200"
            >
              Clients
            </Link>
            <Link
              to="#"
              className="hover:text-[#FEBF00] transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              to="#"
              className="hover:text-[#FEBF00] transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Book Button Desktop */}
        <div className="hidden lg:flex items-center">
          <button className="text-[16px] font-bold bg-[#FEBF00] px-5 py-4 text-black rounded-md hover:bg-yellow-500 transition-colors duration-200">
            Book a Table
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex" onClick={handleChange}>
          {nav ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={nav ? "flex flex-col gap-5 p-4 lg:hidden" : "hidden"}>
        <nav className="flex flex-col items-center gap-4 text-[15px] font-medium">
          <Link
            to="/"
            onClick={handleChange}
            className="hover:text-[#FEBF00] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="#"
            onClick={handleChange}
            className="hover:text-[#FEBF00] transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="#"
            onClick={handleChange}
            className="hover:text-[#FEBF00] transition-colors duration-200"
          >
            Portfolio
          </Link>
          <Link
            to="#"
            onClick={handleChange}
            className="hover:text-[#FEBF00] transition-colors duration-200"
          >
            Clients
          </Link>
          <Link
            to="#"
            onClick={handleChange}
            className="hover:text-[#FEBF00] transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
            to="#"
            onClick={handleChange}
            className="hover:text-[#FEBF00] transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>
        <div className="flex justify-center items-center  py-3">
          <button className="text-[16px] font-bold bg-[#FEBF00] px-5 py-4 text-black rounded-sm hover:bg-yellow-500 transition-colors duration-200">
            Book a Table
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
