import React from "react";
import { FaTasks, FaGithub } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      title: "Shoe Shop Management System",
      description:
        "Full-stack Spring Boot application featuring JWT Authentication, managing inventory, suppliers, orders, and returns with automated stock logic.",
      technologies: ["Spring Boot", "JWT", "MySQL", "React"],
      githubLink: "#",
    },
    {
      title: "Mobile Paradise - Mobile Shop Management",
      description:
        "Comprehensive mobile shop management system with inventory tracking, sales management, and customer relationship features.",
      technologies: ["Java", "MySQL", "Hibernate"],
      githubLink: "#",
    },
    {
      title: "Fishery Harbor Management System",
      description:
        "Management system for Galle Fishery Harbor to track vessels, catches, and harbor operations efficiently.",
      technologies: ["Java", "MySQL", "JavaFX"],
      githubLink: "#",
    },
    {
      title: "Hostel Management System",
      description:
        "Complete hostel management solution for tracking rooms, students, payments, and reservations.",
      technologies: ["Java", "MySQL", "Hibernate"],
      githubLink: "#",
    },
  ];

  return (
    <section id="project" className="overflow-hidden relative py-10 sm:py-14 md:py-16 lg:py-20">
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
            <FaTasks />
            Project
          </h4>
        </div>

        {/* Main Title */}
        <div className="mt-4 mb-4 lg:mt-[2%] lg:mb-[2%]">
          <h2 className="
            text-white font-sans font-normal inline-block m-0 mr-2
            text-[30px] sm:text-[38px] md:text-[44px] lg:text-[49px] xl:text-[54px]
          ">
            My Featured
          </h2>
          <h1 className="
            text-primary font-sans font-medium inline-block m-0
            text-[38px] sm:text-[46px] md:text-[54px] lg:text-[61px] xl:text-[66px]
          ">
            Projects
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-4 w-full sm:gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-[20px] border border-gray-medium bg-dark p-5 sm:p-6 transition-all duration-500 hover:border-primary hover:scale-105 cursor-pointer"
            >
              <h3 className="mb-3 text-lg font-light text-white sm:text-xl">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed sm:text-base text-gray-light">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-full border sm:px-3 bg-gray-dark text-gray-light border-gray-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-2 items-center transition-colors duration-300 text-primary hover:text-white"
              >
                <FaGithub className="text-lg sm:text-xl" />
                <span className="text-sm">View on GitHub</span>
              </a>
            </div>
          ))}
        </div>

        {/* See More Link */}
        <div className="flex justify-center mt-10 w-full sm:mt-12">
          <a
            href="https://github.com/Sithum1220?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 items-center group"
          >
            <FaGithub className="text-3xl text-white transition-colors duration-300 sm:text-4xl group-hover:text-primary" />
            <h4 className="m-0 text-base text-white transition-colors duration-300 sm:text-lg group-hover:text-primary">
              See More
            </h4>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;