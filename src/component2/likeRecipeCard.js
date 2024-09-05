import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const DelicioussRecipeCard = ({ title, category, time, image }) => {
    // State to track if the recipe is liked
    const [liked, setLiked] = useState(false);

    // Function to toggle the liked state
    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="relative rounded-3xl overflow-hidden text-center max-w-xs mx-auto">
            {/* Heart icon with white rounded background positioned at the top-right corner */}
            <button 
                className="absolute top-2 right-2 text-xl bg-white rounded-full p-2 shadow-md"
                onClick={toggleLike}
            >
                <FontAwesomeIcon 
                    icon={liked ? solidHeart : regularHeart} 
                    className={liked ? 'text-red-600' : 'text-gray-400'} // Proper condition for color
                />
            </button>
            
            <img
                src={image}
                alt={title}
                className="w-full h-60 object-cover rounded-2xl"
            />
            <div className="p-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-600 font-bold mt-4">{time} • {category}</p>
            </div>
        </div>
    );
};

export default DelicioussRecipeCard;
