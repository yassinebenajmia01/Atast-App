import React from "react";
import { useNavigate } from "react-router-dom";
import FooterIcon from "../../assests/studentsection.png";


const Navbar = () => {
        const navigate = useNavigate();
    
  return (
    <nav style={{ backgroundColor: "rgba(18, 18, 18, 1)" }} className="text-white py-4 flex items-center justify-between px-4">
      {/* Left Icon */}
      <button className="w-11 h-11  rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba( 92, 3, 11, 1)" }}  onClick={() => navigate("/sidebar")}>
        <span className="text-white text-2xl mb-1">≡</span>          

      </button>
      
      {/* Titlee */}
      <h1 className="text-3xl font-semibold font-[montserrat]">Atastians</h1>
      
      {/* Right Icon */}
      <button className="w-[40px] h-[40px]  rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba( 92, 3, 11, 1)" }}>
        <img src={FooterIcon}
        alt="none" className="w-[35px] h-[25px]" onClick={() => navigate("/atastss")}></img>
      </button>
    </nav>
  );
};

export default Navbar;