import React from 'react';

function FriedRice() {
  return (
    <div className="max-w-4xl p-6">
      {/* Title */}
      <div className="mr-[50%]">
        <h1 className="text-6xl font-bold text-gray-900 mb-4 absolute top-[30%] ml-5">
          Health Japanese Fried Rice
        </h1>
      </div>

      {/* Author and Recipe Info */}
      <div className="flex items-center space-x-4 mt-44 ml-5">
        <img src="" alt="Author" className="w-12 h-12 rounded-full mb-10" />
        <div>
          <p className="text-gray-800 font-bold text-lg mb-16">John Smith</p>
          <p className="text-gray-500 text-sm absolute top-[51%] font-semibold">
            15 March 2022
          </p>
        </div>
        <div className="h-16 w-px bg-gray-300 absolute left-[15%] mb-6"></div>

        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-1 ml-24">
            <p className="font-bold text-black text-lg mb-16">
              <span className="text-3xl">⏱︎</span> Prep Time
            </p>
            <p className="font-semibold text-lg absolute right-[75%]">
              15 Minutes
            </p>
          </div>
          <div className="h-16 w-px bg-gray-300 absolute left-[30%] mb-6"></div>
          <div className="flex items-center space-x-1 ml-36">
            <p className="font-bold text-black text-lg mb-16 ml-28">
              <span className="text-3xl">⏱︎</span> Cook Time
            </p>
            <p className="font-semibold text-lg absolute right-[59%]">
              15 Minutes
            </p>
          </div>
          <div className="h-16 w-px bg-gray-300 absolute left-[45%] mb-6"></div>

          <div className="flex items-center space-x-1 ml-32">
            <p className="text-lg font-semibold absolute right-[45%] top-[49%]">
              <span className="text-2xl">🍴</span>Chicken
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="absolute right-[13%] top-[50%] bg-sky-200 rounded-full p-4 flex justify-center items-center h-20 w-20">
          <svg
            className="h-8 w-8 text-slate-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
        </button>
        <p className='absolute right-[14%] mt-8 font-semibold text-lg '>PRINT</p>

        <button className="bg-sky-200 rounded-full p-4 flex justify-center items-center h-20 w-20 absolute top-[50%] right-[6%]">
          <svg
            className="h-8 w-8 text-slate-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
        </button>
        <p className='absolute right-[7%] mt-8 font-semibold text-lg'>SHARE</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Video Section */}
        <div className="flex-1 mb-6 md:mb-0 w-[100%]">
          <video
            src="https://m.youtube.com/watch?v=B8PcVBqLM2g" // Sample video URL
            className="rounded-lg object-cover"
            controls
            width="100%" // Adjust width if needed
          />
        </div>

        {/* Nutrition Information */}
        <div className="bg-blue-50 p-4 rounded-lg w-full md:w-60 text-gray-700">
          <h3 className="font-bold text-lg mb-4">Nutrition Information</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Calories</span>
              <span>219.9 kcal</span>
            </li>
            <li className="flex justify-between">
              <span>Total Fat</span>
              <span>10.7 g</span>
            </li>
            <li className="flex justify-between">
              <span>Protein</span>
              <span>7.9 g</span>
            </li>
            <li className="flex justify-between">
              <span>Carbohydrate</span>
              <span>22.3 g</span>
            </li>
            <li className="flex justify-between">
              <span>Cholesterol</span>
              <span>37.4 mg</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6 text-gray-600">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default FriedRice;
