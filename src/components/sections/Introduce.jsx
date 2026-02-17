import React from "react";
import { FaHome, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Introduce = () => {
  return (
    <section
      id="introduc"
      className="overflow-hidden relative py-10 sm:py-14 md:py-16 lg:py-20"
    >
      {/* ── Responsive padding: mobile full-width → desktop sidebar-aware ── */}
      <div
        className="
  px-5
  sm:px-8
  md:px-12
  lg:pl-[320px] lg:pr-[100px]
  xl:pl-[450px] xl:pr-[100px]
"
      >
        {/* ── Title Badge ── */}
        <div
          className="
          inline-flex items-center justify-center
          h-10 px-5 rounded-[32px]
          border border-gray-medium bg-dark
          min-w-[140px]
        "
        >
          <h4 className="flex gap-2 items-center m-0 text-sm font-light text-white uppercase">
            <FaHome />
            Introduce
          </h4>
        </div>

        {/* ── Hero Content ── */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 sm:mt-14 md:mt-16 lg:mt[5%]"
        >
          {/* Hey There */}
          <h2
            className="
            text-white font-josefin font-normal m-0 leading-tight
            text-[23px]
            sm:text-[42px]
            md:text-[50px]
            lg:text-[38px]
            xl:text-[42px]
            2xl:text-[46px]
          "
          >
            Hey There,
          </h2>

          {/* Name */}
          <h1
            className="
            text-primary font-sans font-medium m-0 leading-none
            text-[42px]
            sm:text-[58px]
            md:text-[68px]
            lg:text-[70px]
            xl:text-[75px]
            2xl:text-[80px]
          "
          >
            I'm Sithum Imesh
          </h1>

          {/* Role */}
          <h3
            className="
            text-white font-josefin font-light
            mt-0
            text-[16px]
            sm:text-[18px]
            md:text-[20px]
            lg:text-[22px]
            xl:text-[25px]
            2xl:text-[28px]
          "
          >
            Associate Software Engineer
          </h3>

          {/* Description */}
          <h4 className="mt-6 text-sm font-normal leading-relaxed text-gray-light font-josefin sm:mt-8 lg:mt-10 sm:text-base md:text-lg lg:text-xl xl:text-xl">
            Specialized in Flutter mobile development and Spring Boot RESTful
            APIs, with expertise in MQTT, WebSockets, and JWT-based security
          </h4>
        </motion.section>

        {/* ── Go to Project Button ── */}
        <div className="flex justify-end mt-14 sm:mt-20 lg:mt-28">
          <a
            href="#project"
            className="
              flex items-center justify-center
              rounded-full border border-gray-medium
              relative overflow-hidden group
              p-2
              w-[130px] h-[130px]
              sm:w-[150px] sm:h-[150px]
              md:w-[160px] md:h-[160px]
              lg:w-[175px] lg:h-[175px]
              xl:w-[185px] xl:h-[185px]
              transition-transform duration-300 hover:scale-105
            "
          >
            <img
              src="/assets/images/round-text.png"
              alt="Go to projects"
              className="block object-contain w-full h-full animate-rotate"
            />
            <FaArrowDown className="absolute text-2xl text-white sm:text-3xl lg:text-4xl" />
          </a>
        </div>

        {/* ── Stats Section ── */}
        <section className="flex flex-row items-start gap-8 sm:gap-14 lg:gap-16 mt-10 sm:mt-12 lg:mt-[70px]">
          {/* Stat 1 */}
          <div className="flex flex-col">
            <h1
              className="
              text-primary font-sans font-normal leading-none m-0
              text-[38px] sm:text-[46px] md:text-[52px] lg:text-[56px] xl:text-[60px]
            "
            >
              1.5+
            </h1>
            <p
              className="m-0 mt-1 leading-snug text-gray-light
              text-[11px] sm:text-xs md:text-xs lg:text-sm"
            >
              Years of
              <br />
              Experience
            </p>
          </div>

          {/* Vertical Divider */}
          <div
            className="w-px bg-gray-medium opacity-40
            h-[60px] sm:h-[70px] lg:h-[80px] mt-1"
          />

          {/* Stat 2 */}
          <div className="flex flex-col">
            <h1
              className="
              text-primary font-sans font-normal leading-none m-0
              text-[38px] sm:text-[46px] md:text-[52px] lg:text-[56px] xl:text-[60px]
            "
            >
              10+
            </h1>
            <p
              className="m-0 mt-1 leading-snug text-gray-light
              text-[11px] sm:text-xs md:text-xs lg:text-sm"
            >
              Completed
              <br />
              Projects
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Introduce;
