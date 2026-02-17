import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCertificate,
  FaGraduationCap,
  FaTasks,
  FaTools,
  FaAddressBook,
} from "react-icons/fa";

const CircularNavigation = () => {
  const [activeSection, setActiveSection] = useState("introduc");

  const navItems = [
    { id: "introduc", label: "Home", icon: FaHome },
    { id: "about", label: "About", icon: FaUser },
    { id: "education", label: "Education", icon: FaBriefcase },
    { id: "work-experience", label: "Experience", icon: FaBriefcase },
    { id: "certificate", label: "Certificate", icon: FaCertificate },
    { id: "skills", label: "Skills", icon: FaGraduationCap },
    { id: "project", label: "Project", icon: FaTasks },
    { id: "services", label: "Services", icon: FaTools },
    { id: "contact", label: "Contacts", icon: FaAddressBook },
  ];

  // Scroll-based section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="fixed right-[20px] top-[180px] xl:right-[18px] text-center gap-[18px] p-4 bg-dark border border-gray-medium rounded-[30px] z-20 flex flex-col">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.id} className="inline-block text-base list-none">
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.id);
              }}
              className="relative group"
            >
              <span className="absolute right-full transition-all duration-300 text-xs bg-[#404042] text-white px-2 py-1 rounded-md invisible opacity-0 group-hover:visible group-hover:opacity-100 whitespace-nowrap mr-2 before:content-[''] before:w-2.5 before:h-2.5 before:bg-[#404042] before:absolute before:-right-1 before:top-1/2 before:-translate-y-1/2 before:rotate-45">
                {item.label}
              </span>
              <Icon
                className={`text-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-primary scale-125"
                    : "text-gray-light hover:text-primary hover:scale-110"
                }`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default CircularNavigation;