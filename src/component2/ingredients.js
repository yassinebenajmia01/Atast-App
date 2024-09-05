import React from 'react';

function Ingredients() {
  return (
    <div className="flex justify-between p-8 pt-9">
      {/* Ingredients Section */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-4">Ingredients</h2>

        {/* Main Dish Ingredients */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">For main dish</h3>
          <ul className="space-y-6">
            {['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'].map((ingredient, index) => (
              <li key={index} className="flex items-center text-xl font-semibold">
                <div className="flex items-center border-b border-gray-300 pb-2 mb-2 w-[100%]">
                  <input type="radio" name="main-dish" className="mr-8 scale-[220%]" />
                  <span className="text-gray-700">{ingredient}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Sauce Ingredients */}
        <div>
          <h3 className="text-xl font-bold mb-4 mt-16">For the sauce</h3>
          <ul className="space-y-6">
            {['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'].map((ingredient, index) => (
              <li key={index} className="flex items-center text-xl font-semibold">
                <div className="flex items-center border-b border-gray-300 pb-2 mb-2 w-[100%]">
                  <input type="radio" name="sauce" className="mr-8 scale-[220%]" />
                  <span className="text-gray-700">{ingredient}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Other Recipes Section */}
      <div className="w-96 ml-8">
        <h2 className="text-3xl font-bold mb-4">Other Recipe</h2>
        <div className="space-y-4">
          {[
            { title: 'Chicken Meatball with Creamy Cheese...', author: 'By Andreas Paula', img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbnM-WivqpXDsWisFKHq8cRJq3l-jLetV292-nHhXaTzJ96M2m'},
            { title: 'The Creamiest Creamy Chicken an...', author: 'By Andreas Paula', img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEgCUqFlVkpMukuDLqpGwoTIqxgXvTiMucwMYS62AXyf1Y2WkS' },
            { title: 'The Best Easy One Pot Chicken and Rice', author: 'By Andreas Paula', img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSEGr525XE5EMAjQcH4rgTVEmdfxHIGwm2mChkJ-6hWOsJVBaoI' },
          ].map((recipe, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src={recipe.img} alt={recipe.title} className="w-36 h-36 rounded-lg" /> 
              <div>
                <h4 className="text-xl font-bold">{recipe.title}</h4>
                <p className="text-sm mt-4 text-gray-500">{recipe.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Advertisement Section */}
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZXY08NVysNGQSe5wZAmG68UHBX4zDPUQCHUfdX3Qip-mOkIXa" alt="Healthy Food" className="mt-8 rounded-lg w-full h-[50%]" />
      </div>
    </div>
  );
}

export default Ingredients;
