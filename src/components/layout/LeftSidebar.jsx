import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const LeftSidebar = () => {
  return (
    <aside
      className="
        /* ── Mobile (< 640px) ── */
        w-[88vw] max-w-[88vw] mx-auto my-4
        border border-gray-medium rounded-[30px] p-6 z-10

        /* ── Small mobile (≤ 375px) ── */
        max-[375px]:w-[92vw] max-[375px]:max-w-[92vw] max-[375px]:p-5

        /* ── Tablet (640px – 767px) ── */
        sm:w-[72vw] sm:max-w-[72vw] sm:p-8 sm:mx-auto

        /* ── Large Tablet (768px – 1023px) ── */
        md:w-[45vw] md:max-w-[45vw] md:p-8 md:mx-auto

        /* ── Desktop (≥ 1024px) ── fixed left sidebar ── */
        lg:fixed lg:left-5 lg:top-1/2 lg:-translate-y-1/2
        lg:w-[25vw] lg:max-w-[70vw] lg:mx-0 lg:p-6 lg:my-0
      "
    >
      {/* Portfolio Branding */}
      <div className="mb-4 lg:mb-5">
        <h2 className="
          text-white font-josefin font-bold inline-block m-0
          text-[26px] sm:text-[30px] md:text-[32px]
          lg:text-[26px] xl:text-[30px] 2xl:text-[34px]
        ">
          Port
        </h2>
        <h1 className="
          text-primary font-josefin font-bold inline-block m-0
          text-[32px] sm:text-[36px] md:text-[38px]
          lg:text-[32px] xl:text-[36px] 2xl:text-[40px]
        ">
          folio
        </h1>
      </div>

      {/* Profile Image */}
      <img
        src="/assets/images/myImg/my6.png"
        alt="Sithum Imesh"
        className="rounded-[30px] block mb-6 lg:mb-5 xl:mb-6 w-[85%] mx-auto"
      />

      {/* Email */}
      <h2 className="m-0 text-lg font-light leading-tight text-center text-white sm:text-xl md:text-xl lg:text-base xl:text-lg 2xl:text-xl">
        hello@SithumImesh
      </h2>

      {/* Address */}
      <h2 className="m-0 mt-2 mb-5 text-lg font-light leading-tight text-center text-gray-light sm:text-xl md:text-xl sm:mb-7 lg:text-sm lg:mb-4 xl:text-base xl:mb-5 2xl:text-lg 2xl:mb-6">
        Base in Hikkaduwa, SL
      </h2>

      {/* Copyright */}
      <p className="mb-5 text-xs text-center text-gray-light sm:text-sm sm:mb-7 lg:text-xs lg:mb-4 xl:text-xs xl:mb-5 2xl:text-sm 2xl:mb-6">
        © 2023 Sithum. All Rights Reserved
      </p>

      {/* Social Links */}
      <nav className="mb-5 text-center sm:mb-7 lg:mb-4 xl:mb-5 2xl:mb-6">
        <ul className="flex flex-row gap-2 justify-center">
          {[
            { href: "https://twitter.com/SithumImesh", Icon: FaTwitter, label: "Twitter" },
            { href: "www.linkedin.com/in/sithum-imesh-0331b9295", Icon: FaLinkedin, label: "LinkedIn" },
            { href: "https://www.facebook.com/share/1bJEzYVw9R/?mibextid=wwXIfr", Icon: FaFacebook, label: "Facebook" },
            { href: "https://github.com/Sithum1220", Icon: FaGithub, label: "GitHub" },
          ].map(({ href, Icon, label }) => (
            <li key={label} className="list-none">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  flex items-center justify-center
                  border-2 border-gray-medium rounded-full
                  text-gray-light transition-all duration-300
                  hover:text-primary hover:border-primary

                  w-10 h-10 text-lg
                  sm:w-[45px] sm:h-[45px] sm:text-xl
                  lg:w-9 lg:h-9 lg:text-base
                  xl:w-10 xl:h-10 xl:text-lg
                  2xl:w-[45px] 2xl:h-[45px] 2xl:text-xl
                "
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hire Me Button */}
      <a
        href="#contact"
        className="
          flex items-center justify-center gap-2
          bg-primary text-dark rounded-[30px] uppercase
          border-2 border-primary transition-all duration-300
          hover:bg-transparent hover:text-primary no-underline

          py-2 px-8 text-sm
          sm:py-3 sm:px-12 sm:text-base
          lg:py-2 lg:px-6 lg:text-xs lg:gap-1.5
          xl:py-2.5 xl:px-8 xl:text-sm
          2xl:py-3 2xl:px-10 2xl:text-base
        "
      >
        <FaEnvelope className="text-lg sm:text-xl lg:text-base xl:text-lg 2xl:text-xl" />
        Hire Me!
      </a>

      {/* Download CV Button */}
      <a
        href="assets/cv/sithum_imesh_cv_se.pdf"
        download
        className="
          flex items-center justify-center gap-2
          bg-transparent text-primary rounded-[30px] uppercase
          border-2 border-primary transition-all duration-300
          hover:bg-primary hover:text-dark no-underline
          mt-3

          py-2 px-8 text-sm
          sm:py-3 sm:px-12 sm:text-base
          lg:py-2 lg:px-6 lg:text-xs lg:gap-1.5
          xl:py-2.5 xl:px-8 xl:text-sm
          2xl:py-3 2xl:px-10 2xl:text-base
        "
      >
        <FaDownload className="text-lg sm:text-xl lg:text-base xl:text-lg 2xl:text-xl" />
        Download CV
      </a>
    </aside>
  );
};

export default LeftSidebar;