import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Web",
      skills: ["Java", "JavaScript", "Swift", "Kotlin", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Spring Boot", "Flutter", "React", "Node.js"],
    },
    {
      category: "Mobile Development",
      skills: ["Xcode", "Android Studio", "App Store Connect", "TestFlight"],
    },
    {
      category: "Backend & Security",
      skills: ["RESTful APIs", "JWT Authentication", "API Security"],
    },
    {
      category: "Real-Time Communication",
      skills: ["MQTT", "WebSocket"],
    },
  ];

  const tools = [
    { name: "Java", icon: "/assets/images/icon/icons8-java-48.png" },
    { name: "Spring Boot", icon: "/assets/images/icon/icons8-spring-boot-48.png" },
    { name: "Flutter", icon: "/assets/images/icon/icons8-flutter-48.png" },
    { name: "React JS", icon: "/assets/images/icon/icons8-react-native-48.png" },
    { name: "JavaScript", icon: "/assets/images/icon/icons8-javascript-48.png" },
    { name: "MySQL", icon: "/assets/images/icon/icons8-my-sql-48.png" },
    { name: "HTML", icon: "/assets/images/icon/icons8-html-48.png" },
    { name: "CSS", icon: "/assets/images/icon/icons8-css-48.png" },
    { name: "Git", icon: "/assets/images/icon/icons8-git-48.png" },
    { name: "Kotlin", icon: "/assets/images/icon/icons8-kotlin-48.png" },
    { name: "Swift", icon: "/assets/images/icon/icons8-swift-48.png" },
    { name: "Node.js", icon: "/assets/images/icon/icons8-node-js-48.png" },
    { name: "Tailwind CSS", icon: "/assets/images/icon/icons8-tailwind-css-48.png" },
    { name: "Figma", icon: "/assets/images/icon/icons8-figma-48.png" },
  ];

  return (
    <section id="skills" className="overflow-hidden relative py-10 sm:py-14 md:py-16 lg:py-20">
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
            <FaGraduationCap />
            Skills
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
            Skills
          </h1>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 gap-3 mb-8 w-full sm:gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-[15px] border border-gray-medium bg-dark p-4 transition-all duration-300 hover:border-primary hover:scale-105"
            >
              <h3 className="mb-3 text-sm font-normal sm:text-base text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-md border text-gray-light bg-gray-dark border-gray-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mt-6 sm:mt-8">
          <h3 className="mb-4 text-lg font-light text-white sm:text-xl">
            Technologies & Tools
          </h3>
          <div className="grid grid-cols-4 gap-3 w-full sm:gap-4 lg:gap-5 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="rounded-[15px] border border-gray-medium bg-dark cursor-pointer transition-all duration-300 hover:scale-105 hover:border-primary p-2 sm:p-3 flex flex-col items-center"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[48px] lg:h-[48px] mb-1 sm:mb-2"
                />
                <h4 className="text-[10px] sm:text-xs text-center text-gray-light leading-tight">
                  {tool.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;