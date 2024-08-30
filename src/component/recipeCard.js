import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={recipe.image} alt={recipe.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{recipe.title}</div>
        <p className="text-gray-700 text-base">{recipe.category}</p>
        <p className="text-gray-600">{recipe.time}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
