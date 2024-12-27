import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Services = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-gray-50 flex flex-col items-start justify-center px-12 mt-[40%] min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Selected Work and 02 in the same line */}
      <motion.div
        className="flex items-center justify-between w-full"
        variants={textVariants}
      >
        <p className="text-gray-500 italic text-2xl mt-36">(What We Do)</p>
        <p className="text-gray-500 italic text-2xl mt-36">(02)</p>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-black text-[20rem] font-extrabold leading-none mt-64"
        variants={textVariants}
      >
        SERVICES
      </motion.h1>

      {/* Description */}
      <motion.div variants={textVariants}>
        <p className="text-black text-8xl font-bold mt-24">
          Discover our tailored services
        </p>
        <p className="text-black text-8xl font-bold">
          designed to elevate your brand
        </p>
        <p className="text-black text-8xl font-bold mb-16">
          enhance user experience.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Services;
