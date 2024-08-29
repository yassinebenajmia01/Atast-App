import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0eHE_9kGEizSy8wRogdQssys4Gjs3RXhm9RSqx6SWCzxXDXCF' className=' w-[66%]'/>
      </div>
      
      {/* Menu Items */}
      <div className="flex space-x-12 text-lg font-bold mr-[10%]">
        <a href="#" className="hover:text-orange-500">Home</a>
        <a href="#" className="hover:text-orange-500">Recipes</a>
        <a href="#" className="hover:text-orange-500">Blog</a>
        <a href="#" className="hover:text-orange-500">Contact</a>
        <a href="#" className="hover:text-orange-500">About us</a>
      </div>
      
      {/* Social Media Icons */}
      <div className="flex space-x-6 text-xl mr-7">
        <a href="#" className="hover:text-orange-500">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="hover:text-orange-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-orange-500">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
