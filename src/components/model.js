import React from "react";

const Model = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-screen mt-20 ">
      {/* Left Section */}
      <div className="relative">
        <img
          src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0be10/6706510820cd9f77df4de5f9_project-01-p-2000.webp" // Replace with the actual image URL
          alt="Acme Shoe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-3xl font-bold flex items-center">
            <a href="#">
              <img
                src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670b794d8fb5f4edc862d857_logo-01-inverse.svg"
                alt="Acme Logo"
                className="w-64 h-32 mr-3"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative">
        <img
          src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0be10/6706512747b41873f58976f1_project-02-p-2000.webp" // Replace with the actual image URL
          alt="Kanba"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-3xl font-bold flex items-center">
            <a href="#">
              <img
                src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670b794d3a7238b621283d0a_logo-02-inverse.svg" // Replace with the actual logo URL
                alt="Kanba Logo"
                className="w-64 h-32 mr-3"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Unified Text Section */}
      <div className="col-span-2 flex justify-center items-center space-x-5">
        <div className="flex items-center mb-16">
          <span className="text-5xl font-bold absolute right-[88%]">Acme</span>
          <span className="text-gray-500 ml-8 text-4xl">(2024)</span> {/* Increased margin to move (2024) further right */}
        </div>
        <div className="flex items-center mb-16">
          <span className="text-6xl font-bold ml-24">Kanba</span> {/* Added margin-right to move Kanba left */}
          <span className="text-gray-500 absolute right-[5%] text-4xl">(2024)</span>
        </div>
      </div>

      <div className="relative">
        <img
          src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0be10/67065142169e0a1ab98e7760_project-03-p-2000.webp" // Replace with the actual image URL
          alt="utosia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-3xl font-bold flex items-center">
            <a href="#">
              <img
                src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670b794d9cc50bc4bf3cc369_logo-05-inverse.svg"
                alt="utosia"
                className="w-64 h-32 mr-3 mt-5"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0be10/6706516d43ca798d76192d02_project-04-gallery-02.webp" // Replace with the actual image URL
          alt="godline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-3xl font-bold flex items-center">
            <a href="#">
              <img
                src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670b794dfc4e2e91ce62a453_logo-03-inverse.svg"
                alt="godline"
                className="w-64 h-32 mr-3 mt-5"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Unified Text Section */}
      <div className="col-span-2 flex justify-center items-center space-x-5">
        <div className="flex items-center mb-16">
          <span className="text-5xl font-bold absolute right-[88%]">Utosia</span>
          <span className="text-gray-500 ml-8 text-4xl">(2023)</span> {/* Increased margin to move (2024) further right */}
        </div>
        <div className="flex items-center mb-16">
          <span className="text-6xl font-bold ml-24">Goldine</span> {/* Added margin-right to move Kanba left */}
          <span className="text-gray-500 absolute right-[5%] text-4xl">(2023)</span>
        </div>
      </div>
      


    </div>
     

    
    


  );
};

export default Model;
