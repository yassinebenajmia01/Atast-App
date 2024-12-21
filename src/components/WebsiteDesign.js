import React from "react";

const WebsiteDesign = () => {
  return (
    <div className="grid grid-cols-2 gap-8 bg-gray-50 h-screen">
      {/* Left Section: Text */}
      <div className="flex flex-col justify-center p-10">
        {/* Heading */}
        <h1 className="text-[8rem] leading-none font-extrabold">
          WEBSITE DESIGN
        </h1>

        {/* Subheading */}
        <p className="text-4xl font-medium mt-10">
          Custom & responsive websites that engage users and drive conversions.
        </p>

        {/* Website Services */}
        <p className="text-sm italic text-gray-500 mt-10">(Website Services)</p>
        <div className="grid grid-cols-2 gap-4 mt-4 text-lg">
          <p>Website Design</p>
          <p>Website Support</p>
          <p>Framer</p>
          <p>Webflow</p>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="relative">
        <img
          src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670651e2ea930c91af4a6bf7_service-02-p-800.webp" // Replace with the actual image URL
          alt="Website Design MacBook"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default WebsiteDesign;
