import React from 'react';
import RecipeCard from '../component/recipeCard';
import recipes from '../db/recipesdb';

const RecipeList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-32 ml-32">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
