import React, { useState } from "react";
import { FaAddressBook } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="overflow-hidden relative py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="
  px-5
  sm:px-8
  md:px-12
  lg:pl-[320px] lg:pr-[100px]
  xl:pl-[450px] xl:pr-[100px]
      ">
        {/* Title Badge */}
        <div className="inline-flex items-center justify-center h-10 px-5 rounded-[32px] border border-gray-medium bg-dark min-w-[140px]">
          <h4 className="flex gap-2 items-center m-0 text-sm font-light text-white uppercase">
            <FaAddressBook />
            Contact
          </h4>
        </div>

        {/* Main Title */}
        <div className="mt-4 mb-4 lg:mt-[2%] lg:mb-[2%]">
          <h2 className="
            text-white font-sans font-normal inline-block m-0 mr-2
            text-[30px] sm:text-[38px] md:text-[44px] lg:text-[49px] xl:text-[54px]
          ">
            Let's Work
          </h2>
          <h1 className="
            text-primary font-sans font-medium inline-block m-0
            text-[38px] sm:text-[46px] md:text-[54px] lg:text-[61px] xl:text-[66px]
          ">
            Together!
          </h1>
          <h4 className="mt-3 text-base text-white break-all sm:mt-4 sm:text-xl sm:break-normal">
            sithumimesh0729@gmail.com
          </h4>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 w-full sm:space-y-6">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="mb-2 text-sm sm:text-base text-gray-light">
              Full Name <sup className="text-primary">*</sup>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="px-4 py-3 text-sm text-white bg-transparent rounded-lg border transition-colors sm:text-base border-gray-medium focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm sm:text-base text-gray-light">
              Email <sup className="text-primary">*</sup>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="px-4 py-3 text-sm text-white bg-transparent rounded-lg border transition-colors sm:text-base border-gray-medium focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="mobile" className="mb-2 text-sm sm:text-base text-gray-light">
              Mobile <sup className="text-primary">*</sup>
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Your Mobile Number"
              className="px-4 py-3 text-sm text-white bg-transparent rounded-lg border transition-colors sm:text-base border-gray-medium focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm sm:text-base text-gray-light">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="WRITE YOUR MESSAGE HERE ..."
              rows="5"
              className="px-4 py-3 text-sm text-white bg-transparent rounded-lg border transition-colors resize-none sm:text-base border-gray-medium focus:outline-none focus:border-primary"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="
                py-2.5 sm:py-3 text-sm sm:text-base
                px-10 sm:px-14
                bg-primary text-dark rounded-[30px] uppercase
                border-2 border-primary transition-all duration-300
                hover:bg-transparent hover:text-primary cursor-pointer
                w-full sm:w-auto
              "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;