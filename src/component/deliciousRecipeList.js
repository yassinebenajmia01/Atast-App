import React from 'react';
import DeliciousRecipes from '../db/deliciousRecipedb';
import DeliciousRecipeCard from '../component/deliciousRecipeCard';

const DeliciousRecipeList = () => {
    return (
        <div className="container mx-auto ">
            <div className='mb-36'>
            <h1 className="text-5xl font-bold mb-6 text-center mt-40 mr-[60%]">Try this delicious recipe </h1>
            <h1 className="text-5xl font-bold mb-6 text-center mr-[68%]">to make your day</h1>
            <p className='ml-[45%] text-gray-500 text-lg font-semibold absolute top-[703%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
            <p className='ml-[45%] text-gray-500 text-lg font-semibold mt-4 absolute top-[707%]'>incididunt ut labore et dolore magna aliqut enim ad menim</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {DeliciousRecipes.map(recipe => (
                    <DeliciousRecipeCard
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

export default DeliciousRecipeList;