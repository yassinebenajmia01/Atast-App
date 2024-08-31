import React from 'react';

function Inbox() {
  return (
    <div className="relative bg-blue-100 p-10 rounded-3xl flex justify-between items-center overflow-hidden mt-52 w-[80%] ml-44 h-[400px]">
      {/* Left Side: Floating Food Images */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8">
        <img
          src="https://i.ibb.co/cvVGv17/Capture-d-cran-2024-08-31-133137.png"
          alt="floating food left"
          className="w-64 mt-64"
        />
      </div>

      {/* Right Side: Floating Food Images */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8">
        <img
          src="https://i.ibb.co/85NfwW1/Capture-d-cran-2024-08-31-133105.png"
          alt="floating food right"
          className="w-64 mt-64"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 z-10 text-center relative">
        <h2 className="text-5xl font-bold mb-24">Deliciousness to your inbox</h2>
        <p className="text-gray-600 mt-2 font-bold text-lg absolute top-[50%] ml-72">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        </p>
        <p className="text-gray-600 font-bold text-lg absolute top-[79%] ml-96">
          incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      {/* Email Input and Button */}
      <div className="absolute flex items-center space-x-4 bottom-1 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center rounded-full overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 bg-white">
          <input
            type="email"
            placeholder="Your email address..."
            className="p-4 w-[400px] focus:outline-none"
          />
          <button className="bg-black text-white px-8 py-4 h-full rounded-2xl mr-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
