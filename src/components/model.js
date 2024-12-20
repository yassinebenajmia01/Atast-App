import React from "react";

const Model = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-screen mt-20">
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
    </div>
    
  );
};

export default Model;
