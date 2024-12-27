import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WebsiteDesign = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
  };

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 gap-4 bg-gray-50 min-h-screen"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Left Section: Text */}
      <motion.div
        className="flex flex-col justify-center p-10 mb-72"
        variants={textVariants}
      >
        <h1 className="text-[8rem] leading-none font-extrabold">
          WEBSITE DESIGN
        </h1>
        <p className="text-5xl font-medium mt-10">
          Custom & responsive websites that engage users and drive conversions.
        </p>
        <p className="text-2xl italic text-gray-500 mt-10">(Website Services)</p>
        <div className="grid grid-cols-2 gap-4 mt-16 text-3xl font-semibold">
          <p>Website Design</p>
          <p>Website Support</p>
          <p>Framer</p>
          <p>Webflow</p>
        </div>
      </motion.div>

      {/* Right Section: Image */}
      <motion.div
        className="relative h-full"
        variants={imageVariants}
      >
        <img
          src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670651e2ea930c91af4a6bf7_service-02-p-800.webp"
          alt="Website Design MacBook"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default WebsiteDesign;
