import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen flex ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Left Section */}
      <div className="w-1/2 p-1 relative">
        <a
          className="absolute top-4 left-16 mt-6 text-5xl font-extrabold"
          href="#"
        >
          KAYO
        </a>
        <div className="flex flex-wrap gap-5 h-full">
          {/* Main Hero Image */}
          <img
            src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/6706520a607216d450a352f6_home-hero-p-800.webp"
            className="w-full h-full"
            alt="Hero"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col items-start p-8">
        {/* Navigation */}
        <div className="flex justify-between w-full items-center mb-8">
          <nav className="space-x-12 text-3xl font-semibold p-6">
            <a
              href="#"
              className={`hover:underline ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Work
            </a>
            <a
              href="#"
              className={`hover:underline ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Service
            </a>
            <a
              href="#"
              className={`hover:underline ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              About
            </a>
            <a
              href="#"
              className={`hover:underline ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Blog
            </a>
          </nav>
          <a
            href="#"
            className={`underline font-semibold hover:no-underline text-3xl mr-24 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Content */}
        <div>
          <h1 className="text-[12rem] leading-none font-extrabold mb-4 ml-16">
            ©KAYO STUDIO
          </h1>
          <p className="italic mb-8 mt-9 text-2xl ml-16">(Based in Prague)</p>
          <p className="text-6xl font-semibold ml-16 space-y-10 space-x-16">
            Crafting impactful brands and websites that drive growth and
            success.
          </p>
          <div className="flex flex-col space-y-4 mt-12">
            <h1 className="text-8xl font-black ml-16">CREATIVE</h1>
            <h1 className="text-8xl font-black ml-16">BRANDS.</h1>
            <h1 className="text-8xl font-black ml-16">POWERFUL</h1>
            <h1 className="text-8xl font-black ml-16">WEBSITES.</h1>
          </div>
        </div>

        {/* Our Partner Section */}
        <div className="mt-16 w-full">
          <h2
            className={`text-2xl font-semibold mb-16 ml-16 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            (Our Partner)
          </h2>
          <div className="grid grid-cols-3 gap-8 ml-16">
            {[
              "6706385909cfb76fad4d683f_logo-01.svg",
              "67063859c31ce213c2d0fbfd_logo-02.svg",
              "67063859c26c5aadf98cd980_logo-03.svg",
              "67063859d2dd382de8738e62_logo-04.svg",
              "67063859e448c33db5374982_logo-05.svg",
              "6706385920cd9f77df36fa3a_logo-06.svg",
            ].map((logo, index) => (
              <img
                key={index}
                src={`https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/${logo}`}
                alt={`Partner ${index + 1}`}
                className={`h-12 mt-10 ${
                  darkMode ? "filter invert brightness-200" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          className="fixed bottom-5 left-5 bg-gray-800 dark:bg-gray-200 w-14 h-8 flex items-center rounded-full p-1 cursor-pointer shadow-md"
        >
          <div
            className={`bg-white dark:bg-black w-6 h-6 rounded-full transform duration-300 ${
              darkMode ? "translate-x-6" : ""
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
