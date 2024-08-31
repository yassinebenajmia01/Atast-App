import React, { useState } from 'react';

// HeartButton component
const HeartButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button 
      onClick={toggleLike} 
      className="focus:outline-none absolute top-2 right-2"
    >
      <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={liked ? "red" : "gray"}
          viewBox="0 0 24 24"
          strokeWidth="2"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </div>
    </button>
  );
};

// RecipeCard component
const RecipeCard = ({ recipe }) => {
  return (
    <div className="max-w-sm max-h-[85%] overflow-hidden shadow-lg bg-blue-100 rounded-2xl relative">
      <img 
        className={`w-full rounded-3xl ${recipe.id === 9 ? 'h-[100%]' : 'h-[70%]'} object-cover`} 
        src={recipe.image} 
        alt={recipe.title} 
      />
      {recipe.id !== 9 && <HeartButton />}
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-2xl mb-2">{recipe.title}</div>
        </div>
        <div className="flex justify-between text-gray-700 text-base">
          <p className="text-gray-600">{recipe.time}</p>
          <p>{recipe.category}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
