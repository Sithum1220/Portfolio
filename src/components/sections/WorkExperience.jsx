import React from "react";
import { FaBriefcase } from "react-icons/fa";

const WorkExperience = () => {
  const experiences = [
    {
      date: "Sept 2025 – Present",
      title: "Associate Software Engineer",
      company: "TID Global | UK-based (Remote)",
      responsibilities: [
        "Developed 4 Flutter applications for The Bryanston parking management system with MQTT device control, CCTV monitoring, and lift/gate/lighting management",
        "Developing Flutter application For SafeMesh and SPOG building management System",
        "Designed UI/UX in Figma Design for SafeMesh and SPOG mobile applications",
        "Implemented background services for continuous MQTT notifications with SQLite persistence, enabling alerts even when app is terminated",
        "Integrated WebSocket (STOMP) for real-time image delivery with global popup preview system",
        "Built authentication system, API integration, and deep linking from background notifications to specific screens",
        "Performed React frontend API integration for SPOG building management system",
        "Refactored legacy Spring Boot backend components to RESTful API architecture for improved scalability",
      ],
    },
    {
      date: "Sept 2024 – Sept 2025",
      title: "Intern Software Engineer",
      company: "TID Global | UK-based (Remote)",
      responsibilities: [
        "Developed native Android application using Kotlin with MQTT messaging for SPOG BMS system",
        "Implemented JWT authentication with refresh tokens and automated security monitoring",
        "Resolved security vulnerabilities in Spring Boot backend (SPOG BMS System)",
        "Maintained Swift iOS application (MBuild), fixed bugs, and managed App Store deployment",
      ],
    },
  ];

  return (
    <section id="work-experience" className="overflow-hidden relative py-10 sm:py-14 md:py-16 lg:py-20">
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
            Experience
          </h4>
        </div>

        {/* Main Title */}
        <div className="mt-4 mb-4 lg:mt-[2%] lg:mb-[2%]">
          <h2 className="
            text-white font-sans font-normal inline-block m-0 mr-2
            text-[30px] sm:text-[38px] md:text-[44px] lg:text-[49px] xl:text-[54px]
          ">
            Work
          </h2>
          <h1 className="
            text-primary font-sans font-medium inline-block m-0
            text-[38px] sm:text-[46px] md:text-[54px] lg:text-[61px] xl:text-[66px]
          ">
            Experience
          </h1>
        </div>

        {/* Timeline */}
        <section className="pl-0 border-l border-gray-dark">
          {experiences.map((item, index) => (
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
              <h1 className="mb-2 text-xl font-light text-white sm:text-2xl">
                {item.title}
              </h1>
              <h4 className="mt-0 mb-3 text-sm font-normal lg:text-md text-gray-light">
                {item.company}
              </h4>
              <ul className="ml-4 space-y-2 list-disc sm:ml-5">
                {item.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="pr-2 w-full text-sm sm:text-base text-gray-light wrap-break-word"
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default WorkExperience;