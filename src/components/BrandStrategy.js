import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BrandStrategy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
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
      {/* Left Section: Image */}
      <motion.div
        className="relative h-full"
        variants={imageVariants}
      >
        <img
          src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670651e251647021f7e8db79_service-01-p-800.webp"
          alt="Brand Strategy Cards"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right Section: Text */}
      <motion.div
        className="flex flex-col justify-center p-10"
        variants={textVariants}
      >
        <h1 className="text-[8rem] leading-none font-extrabold">
          BRAND STRATEGY
        </h1>
        <p className="text-6xl font-semibold mt-10">
          Crafting impactful brands and websites that drive growth and success.
        </p>
        <p className="text-2xl italic text-gray-400 mt-10">
          (Branding Services)
        </p>
        <div className="grid grid-cols-2 gap-4 mt-16 text-3xl font-semibold">
          <p>Brand Discovery</p>
          <p>Brand Positioning</p>
          <p>Visual Identity Design</p>
          <p>Brand Guidelines</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BrandStrategy;
