import React from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="overflow-hidden relative py-10 sm:py-14 md:py-16 lg:py-20"
    >
      <div
        className="
  px-5
  sm:px-8
  md:px-12
  lg:pl-[320px] lg:pr-[100px]
  xl:pl-[450px] xl:pr-[100px]
      "
      >
        {/* Title Badge */}
        <div className="inline-flex items-center justify-center h-10 px-5 rounded-[32px] border border-gray-medium bg-dark min-w-[140px]">
          <h4 className="flex gap-2 items-center m-0 text-sm font-light text-white uppercase">
            <FaUser />
            About
          </h4>
        </div>

        {/* Main Title */}
        <div className="mt-4 mb-4 lg:mt-[2%] lg:mb-[2%]">
          <h2
            className="
            text-white font-sans font-normal inline-block m-0 mr-2
            text-[30px] sm:text-[38px] md:text-[44px] lg:text-[49px] xl:text-[54px]
          "
          >
            Interesting
          </h2>
          <h1
            className="
            text-primary font-sans font-medium inline-block m-0
            text-[38px] sm:text-[46px] md:text-[54px] lg:text-[61px] xl:text-[66px]
          "
          >
            Me
          </h1>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <p className="m-0 text-base font-normal leading-8 text-gray-light font-josefin sm:text-lg lg:text-xl">
            Junior Software Engineer with 1.5+ years of experience in
            architecting real-time Building Management Systems (BMS) for a
            UK-based firm. Specialized in Flutter mobile development and Spring
            Boot RESTful APIs, with deep expertise in MQTT, WebSockets, and
            JWT-based security. Proven track record in optimizing application
            performance by resolving production-level issues and managing
            end-to-end iOS deployments via App Store and TestFlight.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
