import React from 'react';

function EveryoneCanBeAChef() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 ">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl font-bold mb-4 ml-10">Everyone can be a </h1>
        <h1 className="text-5xl font-bold mb-4 ml-10">chef in their own kitchen</h1>
        <p className="text-gray-500 text-xl ml-10 mt-6">
          Lorem ipsum dolor sit amet, consectetuipiscing elit, sed do 
        </p>
        <p className="text-gray-500 text-xl  ml-10">
        eiusmod tempor incididunt ut labore et dolore magna aliqut enim
        </p>
        <p className="text-gray-500 text-xl ml-10">
        ad minim

        </p>
        <button className="px-14 py-5 bg-black text-white font-semibold rounded-xl mt-36 ml-16">Learn More</button>
      </div>
      <div className="relative md:w-1/2 flex items-center justify-center">
        <img src="https://i.ibb.co/MRFNJHb/Capture-d-cran-2024-08-31-021500.png" alt="Chef" className="w-[80%] h-auto" />
        {/* Floating vegetables */}
      </div>
    </div>
  );
}

export default EveryoneCanBeAChef;
