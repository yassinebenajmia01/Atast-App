import React from 'react';

function Checkout() {
  return (
    <div className="flex flex-col items-center bg-blue-50 py-16">
      <h1 className="text-5xl font-bold mb-4">Check out @foodieland on Instagram</h1>
      <p className="text-gray-500 mt-7 text-center font-semibold text-xl">
        Lorem ipsum dolor sit amet, consectetuipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
      </p>
      <p className='text-gray-500 text-center font-semibold text-xl'>magna aliquat enim ad minim.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {/* Instagram Post 1 */}
        <div className="bg-white border rounded-lg shadow-md">
          <img src="https://i.ibb.co/LZmwd4N/Capture-d-cran-2024-08-31-024934.png" alt="Food Post 1" className="w-full h-96 object-cover rounded-t-lg" />
        </div>

        {/* Instagram Post 2 */}
        <div className="bg-white border rounded-lg shadow-md">
          <img src="https://i.ibb.co/59sqj9m/Capture-d-cran-2024-08-31-025551.png" alt="Food Post 2" className="w-full h-96 object-cover rounded-t-lg" />
        </div>

        {/* Instagram Post 3 */}
        <div className="bg-white border rounded-lg shadow-md">
          <img src="https://i.ibb.co/G0T8wxw/Capture-d-cran-2024-08-31-025607.png" alt="Food Post 3" className="w-full h-96 object-cover rounded-t-lg" />
        </div>

        {/* Instagram Post 4 */}
        <div className="bg-white border rounded-lg shadow-md">
          <img src="https://i.ibb.co/RSQdkw5/Capture-d-cran-2024-08-31-025617.png" alt="Food Post 4" className="w-full h-96 object-cover rounded-t-lg" />
        </div>
      </div>

      <a 
        href="https://www.instagram.com/foodieland/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg mt-20"
      >
        
        Visit Our Instagram
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="ml-2"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
    </div>
  );
}

export default Checkout;
