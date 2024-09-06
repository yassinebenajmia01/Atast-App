import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center py-4 px-8 border-b border-gray-300">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <img 
          src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0eHE_9kGEizSy8wRogdQssys4Gjs3RXhm9RSqx6SWCzxXDXCF' 
          className='w-[66%]' 
          alt="Logo"
        />
      </div>
      
      {/* Menu Items */}
      <div className="flex space-x-12 text-lg font-bold mr-[10%]">
        <button className="hover:text-orange-500" aria-label="Home" onClick={() => { navigate("/home") }}>Home</button>
        <button className="hover:text-orange-500" aria-label="Recipes" onClick={() => { navigate("/recipes") }}>Recipes</button>
        <button className="hover:text-orange-500" aria-label="Blog" onClick={() => { navigate("/blog") }}>Blog</button>
        <button className="hover:text-orange-500" aria-label="Contact">Contact</button>
        <button className="hover:text-orange-500" aria-label="About Us">About Us</button>
      </div>
      
      {/* Social Media Icons */}
      <div className="flex space-x-6 text-xl mr-7">
        <button className="hover:text-orange-500" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </button>
        <button className="hover:text-orange-500" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </button>
        <button className="hover:text-orange-500" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
