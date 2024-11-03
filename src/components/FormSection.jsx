import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    people: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.date) tempErrors.date = "Date is required";
    if (!formData.people) tempErrors.people = "Number of people is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", formData);
      alert("Reservation request sent successfully!");

      setFormData({
        name: "",
        email: "",
        date: "",
        people: "",
        message: "",
      });
    }
  };

  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat p-12 h-[900px] mt-28"
      style={{ backgroundImage: "url('/images/formImage.png')" }}
    >
      <div className="absolute sm:container lg:p-28 p-6 inset-0 h-full w-full text-white bg-opacity-60">
        <div className="space-y-6">
          <div className="flex justify-start items-center gap-2">
            <p className="border-1px w-3 h-3 bg-[#B52B1D]"></p>
            <p className="text-[20px] font-[700] font-roboto text-[#BD1F17]">
              Book Now
            </p>
          </div>
          <h1 className="sm:text-[62px] text-[40px] font-[500] font-bebas uppercase">
            Book Your Table
          </h1>
          <p className="md:w-[545px] sm:text-[16px] font-[400] font-roboto text-[#F7F8F9]">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <form onSubmit={handleSubmit} className="md:w-[635px] space-y-6">
            <div className="flex md:flex-row flex-col gap-10">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-6 py-3 border-[1px] border-[#E5E7EB] bg-transparent w-full md:w-[302px]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-6 py-3 border-[1px]  w-full  border-[#E5E7EB] bg-transparent md:w-[302px]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-10">
              <div className="relative md:w-[302px]">
                <input
                  type="text"
                  name="date"
                  placeholder="Reservation Date"
                  value={formData.date}
                  onChange={handleChange}
                  className="px-6 py-3 border-[1px]  border-[#E5E7EB] bg-transparent w-full "
                />
                <AiOutlineCalendar className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  name="people"
                  placeholder="Total People"
                  value={formData.people}
                  onChange={handleChange}
                  className="px-6 py-3 border-[1px]  w-full  border-[#E5E7EB] bg-transparent md:w-[302px]"
                />
                {errors.people && (
                  <p className="text-red-500 text-sm mt-1">{errors.people}</p>
                )}
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="px-6 py-3 border-[1px] border-[#E5E7EB] bg-transparent w-full h-[140px]"
            />
            <button
              type="submit"
              className="uppercase px-5 py-4 bg-[#FEBF00] text-[18px] font-[700] text-black font-roboto rounded-sm"
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
