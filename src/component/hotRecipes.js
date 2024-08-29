import React from 'react';

function HotRecipes() {
  return (
    <div className="flex bg-blue-50 rounded-lg overflow-hidden shadow-lg">
      {/* Left Section */}
      <div className="p-6 space-y-4 flex-1">
        <div className="flex items-center space-x-2">
          <div className="bg-white text-black py-1 px-3 rounded-full shadow-md">
            <span role="img" aria-label="hot">🔥</span> Hot Recipes
          </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800">
          Spicy delicious chicken wings
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex space-x-4">
          <div className="flex items-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v3a2 2 0 100 4v3a2 2 0 100 4v2a2 2 0 002 2h8a2 2 0 002-2v-2a2 2 0 100-4v-3a2 2 0 100-4V4a2 2 0 00-2-2H6z" clipRule="evenodd" />
            </svg>
            30 Minutes
          </div>
          <div className="flex items-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm4 0a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zM5 5a2 2 0 114 0v10a2 2 0 01-4 0V5zm0-2a4 4 0 00-4 4v10a4 4 0 008 0V7a4 4 0 00-4-4z" clipRule="evenodd" />
            </svg>
            Chicken
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://via.placeholder.com/40" alt="Author" className="rounded-full w-10 h-10" />
          <div>
            <p className="font-semibold text-gray-700">John Smith</p>
            <p className="text-gray-500 text-sm">15 March 2022</p>
          </div>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded-full shadow-md hover:bg-gray-800 flex items-center">
          View Recipes
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Right Section */}
      <div className="relative w-1/2">
        <img src="https://via.placeholder.com/400" alt="Dish" className="w-full h-full object-cover" />
        <div className="absolute top-0 right-0 bg-black text-white rounded-full p-2 transform translate-x-1/2 -translate-y-1/2">
          HANDPICKED RECIPES <span role="img" aria-label="thumbs up">👍</span>
        </div>
      </div>
    </div>
  );
}

export default HotRecipes;
