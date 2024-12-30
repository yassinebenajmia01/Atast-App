import React, { useContext, useRef } from "react";
import { ThemeContext } from "./ThemeContext";
import { motion, useInView } from "framer-motion";

const Project = () => {
  const { isDarkMode } = useContext(ThemeContext);
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
      className={`flex flex-col items-start justify-center px-16 min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Header Section */}
      <motion.div
        className="flex items-center justify-between w-full"
        variants={textVariants}
      >
        <p className="italic text-2xl mt-36">(Selected Work)</p>
        <p className="italic text-2xl mt-36">(01)</p>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-[20rem] font-extrabold leading-none mt-64"
        variants={textVariants}
      >
        PROJECTS
      </motion.h1>

      {/* Description */}
      <motion.p className="text-8xl font-bold mt-24" variants={textVariants}>
        Explore our recent projects
      </motion.p>
      <motion.p className="text-8xl font-bold" variants={textVariants}>
        showcasing creativity, innovation
      </motion.p>
      <motion.p className="text-8xl font-bold" variants={textVariants}>
        and impactful design solutions.
      </motion.p>
    </motion.div>
  );
};

export default Project;
