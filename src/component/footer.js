import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto flex justify-between items-center border-b border-gray-200 pb-4">
        {/* Left Side: Logo and Description */}
        <div>
        <img 
          src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0eHE_9kGEizSy8wRogdQssys4Gjs3RXhm9RSqx6SWCzxXDXCF' 
          className='w-[30%]' 
          alt="Logo"
        />
          <p className="text-gray-500 mt-2 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        {/* Right Side: Navigation Links */}
        <nav className="flex space-x-20 text-black font-medium text-lg">
          <button href="#" className="hover:text-black">Recipes</button>
          <button href="#" className="hover:text-black">Blog</button>
          <button href="#" className="hover:text-black">Contact</button>
          <button href="#" className="hover:text-black">About us</button>
        </nav>
      </div>

      {/* Bottom Section: Copyright and Social Media */}
      <div className="container mx-auto flex justify-between items-center mt-10 text-sm">
        <p className="text-gray-500 ml-[40%] text-lg">
          © 2020 Flowbase. Powered by <span className="text-red-500">Webflow</span>
        </p>
        <div className="flex space-x-9 text-2xl">
          <button href="#" className="text-gray-700 hover:text-black">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button href="#" className="text-gray-700 hover:text-black">
            <i className="fab fa-twitter"></i>
          </button>
          <button href="#" className="text-gray-700 hover:text-black">
            <i className="fab fa-instagram"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
