import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Resume = () => {
  const timeline = [
    {
      date: "Sept 2022 – Sept 2024",
      title: "Higher Diploma in Software Engineering (GDSE)",
      subtitle: "Institute of Software Engineering (IJSE)",
    },
    {
      date: "2021 – 2022",
      title: "G.C.E. Advanced Level (Mathematics Stream)",
      subtitle: "Hikkaduwa Sri Sumangala College",
    },
    {
      date: "2018",
      title: "G.C.E. Ordinary Level",
      subtitle: "Hikkaduwa Sri Sumangala College",
    },
  ];

  return (
    <section id="education" className="overflow-hidden relative py-10 sm:py-14 md:py-16 lg:py-20">
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
            <FaBriefcase />
            Education
          </h4>
        </div>

        {/* Main Title */}
        <div className="mt-4 mb-4 lg:mt-[2%] lg:mb-[2%]">
          <h2 className="
            text-white font-sans font-normal inline-block m-0 mr-2
            text-[30px] sm:text-[38px] md:text-[44px] lg:text-[49px] xl:text-[54px]
          ">
            My
          </h2>
          <h1 className="
            text-primary font-sans font-medium inline-block m-0
            text-[38px] sm:text-[46px] md:text-[54px] lg:text-[61px] xl:text-[66px]
          ">
            Education
          </h1>
        </div>

        {/* Timeline */}
        <section className="pl-0 border-l border-gray-dark">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative pb-10 lg:pb-[68px] cursor-pointer group
                pl-6 sm:pl-10 lg:pl-[74px]
                before:content-[''] before:absolute before:w-3 before:h-3
                before:bg-[#656565] before:rounded-full before:-left-1.5 before:top-2
                before:transition-all before:duration-300 hover:before:bg-primary
                after:content-[''] after:bg-gray-dark after:w-px after:h-full
                after:absolute after:left-0 after:top-2.5 after:-z-10"
            >
              <span className="block mb-3 text-sm transition-colors duration-300 lg:mb-5 text-gray-light sm:text-base group-hover:text-primary">
                {item.date}
              </span>
              <h1 className="mb-0 text-lg font-light text-white sm:text-xl lg:text-2xl">
                {item.title}
              </h1>
              <h4 className="mt-1 mb-0 text-sm lg:text-md text-gray-light">
                {item.subtitle}
              </h4>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Resume;