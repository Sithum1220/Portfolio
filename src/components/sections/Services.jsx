import React from "react";
import {
  FaTools,
  FaMobile,
  FaServer,
  FaBroadcastTower,
  FaCode,
  FaAppStore,
  FaSitemap,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaMobile,
      title: "Mobile App Development",
      description:
        "Flutter & Native iOS/Android applications with real-time features, MQTT messaging, and background services",
      projects: "4+ Projects Completed",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description:
        "Spring Boot RESTful APIs with JWT authentication, security implementation, and database integration",
      projects: "Multiple Enterprise Systems",
    },
    {
      icon: FaBroadcastTower,
      title: "Real-Time Systems",
      description:
        "MQTT & WebSocket integration for live data communication, alerts, and device control",
      projects: "Building Management Systems",
    },
    {
      icon: FaCode,
      title: "Full-Stack Development",
      description:
        "End-to-end web applications with React frontend and Spring Boot backend",
      projects: "5+ Complete Solutions",
    },
    {
      icon: FaAppStore,
      title: "App Store Deployment",
      description:
        "iOS & Android app publishing via App Store Connect, TestFlight, and Google Play",
      projects: "Production Apps Deployed",
    },
    {
      icon: FaSitemap,
      title: "System Architecture",
      description:
        "Scalable architecture design for enterprise applications and management systems",
      projects: "BMS & Management Systems",
    },
  ];

  return (
    <section id="services" className="overflow-hidden relative py-10 sm:py-14 md:py-16 lg:py-20">
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
            <FaTools />
            Services
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
            Services
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 w-full sm:gap-6 xl:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-[20px] border border-gray-medium bg-dark p-5 sm:p-6 transition-all duration-500 hover:border-primary hover:scale-105 cursor-pointer relative"
              >
                <Icon className="absolute top-5 right-5 text-xl sm:top-6 sm:right-6 sm:text-2xl text-primary" />
                <h1 className="pr-8 mt-0 mb-3 text-lg font-light text-white sm:text-xl">
                  {service.title}
                </h1>
                <h4 className="mt-0 mb-4 text-sm font-light leading-relaxed sm:text-base text-gray-light">
                  {service.description}
                </h4>
                <h5 className="mt-4 text-xs font-light sm:text-sm text-primary">
                  {service.projects}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;