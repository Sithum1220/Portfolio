import React, { useState } from "react";
import { FaCertificate, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      image: "/assets/images/diploma.JPG",
      title: "Graduate Diploma in Software Engineering (GDSE)",
      institution: "Institute of Software Engineering (IJSE)",
    },
    {
      image: "/assets/images/IMG_1059.jpg",
      title: "Certificate of Merit (Batch Rank 6)",
      institution: "Institute of Software Engineering (IJSE)",
    },
    {
      image: "/assets/images/IMG_1060.jpg",
      title: "Innovesta Group Project Certification",
      institution: "Institute of Software Engineering (IJSE)",
    },
  ];

  return (
    <section id="certificate" className="overflow-hidden relative py-10 sm:py-14 md:py-16 lg:py-20">
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
            <FaCertificate />
            Certificate
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
            Certificates
          </h1>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 gap-4 w-full sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="rounded-[20px] border border-gray-medium bg-dark p-4 transition-all duration-500 hover:border-primary hover:scale-105 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden rounded-[15px] mb-3">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mt-3 mb-1 text-base font-light text-white sm:text-lg">
                {cert.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-light">{cert.institution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black bg-opacity-90 sm:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-black/80 via-black/40 to-transparent rounded-bl-[100px] pointer-events-none z-10"></div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCert(null);
                }}
                className="flex absolute top-4 right-4 z-20 justify-center items-center w-10 h-10 text-white rounded-full border-2 transition-all duration-300 sm:w-12 sm:h-12 bg-gray-dark border-gray-medium hover:text-primary hover:border-primary hover:scale-110"
              >
                <FaTimes className="text-xl sm:text-2xl" />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg shadow-2xl mx-auto block"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="px-4 mt-4 text-center">
                <h3 className="mb-1 text-base font-light text-white sm:text-xl">
                  {selectedCert.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-light">
                  {selectedCert.institution}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificate;