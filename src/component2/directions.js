import React from 'react';

function Directions() {
  return (
    <div className="max-w-full mx-auto p-6">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4 ml-6">Directions</h2>

      {/* Step 1 */}
      <div className="mb-8 ml-6">
        <div className="flex items-start mb-4">
          <input type="radio" className="mt-1 mr-3 scale-[150%]" />
          <h3 className="text-xl font-semibold ml-4 mb-2">1. Lorem ipsum dolor sit amet</h3>
        </div>
        <p className="text-gray-600 mb-4 text-lg max-w-[50%]">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <img 
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQh5hu_A-Bd-0HedTMc3kcddV6EqVXYK0UZArzt_9nUA4XLL6jT" 
          alt="Cooking process" 
          className="rounded-lg w-[50%] h-[800px] object-cover mb-4"
        />
        <p className="text-gray-600 text-lg max-w-[50%]">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>

      {/* Step 2 */}
      <div className="mb-8 ml-6">
        <div className="flex items-start mb-4">
          <input type="radio"  className="mt-1 mr-3 scale-[150%]" />
          <h3 className="text-xl font-semibold ml-4 mb-2">2. Lorem ipsum dolor sit amet</h3>
        </div>
        <p className="text-gray-600 mb-4 text-xl max-w-[50%]">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </div>

      {/* Step 3 */}
      <div className="mb-8 ml-6">
        <div className="flex items-start mb-4">
          <input type="radio" className="mt-1 mr-3 scale-[150%]" />
          <h3 className="text-xl font-semibold ml-4 mb-2">3. Lorem ipsum dolor sit amet</h3>
        </div>
        <p className="text-gray-600 mb-4 text-xl max-w-[50%]">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </div>
    </div>
  );
}

export default Directions;
