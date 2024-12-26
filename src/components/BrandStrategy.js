import React from "react";


const BrandStrategy = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-gray-50 ">
      {/* Left Section: Image */}
      <div className="relative h-full">
        <img
          src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670651e251647021f7e8db79_service-01-p-800.webp"
          alt="Brand Strategy Cards"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section: Text */}
      <div className="flex flex-col justify-center p-10">
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
      </div>
    </div>
  );
};

export default BrandStrategy;
