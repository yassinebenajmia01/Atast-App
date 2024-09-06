import React from 'react';
import LikeRecipes from '../db/likeRecipedb';
import DelicioussRecipeCard from '../component2/likeRecipeCard';

const LikeRecipeList = () => {
    return (
        <div className="container mx-auto ">
            <div className='mb-36'>
            <h1 className="text-5xl font-bold mb-6 text-center mt-40 mr-[3%]">You may like these recipes too </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {LikeRecipes.map(recipe => (
                    <DelicioussRecipeCard
                        key={recipe.id}
                        title={recipe.title}
                        category={recipe.category}
                        time={recipe.time}
                        image={recipe.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default LikeRecipeList;