import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

function Startout() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Section 1: Question */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">How did you start out in the food industry?</h2>
        <p className='font-bold text-lg text-nowrap ml-[110%] mb-7'>SHARE THIS ON :</p>
        <div className="flex space-x-4 ml-[113%]">
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaFacebookF size={24} />
            </a>
          </div>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, 
          at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. 
          Praesent feugiat elementum ex ut suscipit.
        </p>
      </div>

      {/* Section 2: Question */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What do you like most about your job?</h2>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, 
          at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. 
          Praesent feugiat elementum ex ut suscipit.
        </p>
      </div>

      {/* Section 3: Question with Image */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Do you cook at home on your days off?</h2>
        <img
          className="rounded-lg w-full mb-4"
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQh5hu_A-Bd-0HedTMc3kcddV6EqVXYK0UZArzt_9nUA4XLL6jT"
          alt="Chef cooking"
        />
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, 
          at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. 
          Praesent feugiat elementum ex ut suscipit.
        </p>
      </div>

      {/* Section 4: Advice */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What would your advice be to young people looking to get their foot in the door?</h2>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, 
          at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. 
          Praesent feugiat elementum ex ut suscipit.
        </p>
      </div>

      {/* Section 5: Quote */}
      <div className="mb-10">
        <blockquote className="italic text-2xl font-semibold text-gray-700 bg-gray-100 p-6 rounded-lg">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio."
        </blockquote>
      </div>

      {/* Section 6: Misconception */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What is the biggest misconception that people have about being a professional chef?</h2>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, 
          at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. 
          Praesent feugiat elementum ex ut suscipit.
        </p>
      </div>
    </div>
  );
}

export default Startout;
