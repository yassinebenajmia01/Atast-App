import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assests/AtastLogo.png";
import FooterIcon from "../assests/studentsection.png";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white relative px-4">
      {/* Logo */}
      <div className="relative flex flex-col items-center w-full mb-56">
        <img src={Logo} className="w-40 sm:w-52 md:w-60 lg:w-64" alt="ATAST Logo" />

        {/* Curved Text */}
        <svg width="250" height="80" viewBox="0 0 332 92" className="mt-2">
          <defs>
            <path id="curvePath" d="M 20,70 A 160,60 0 0,1 312,70" fill="transparent" />
          </defs>
          <text fontSize="20" fill="white" fontWeight="bold" letterSpacing="1px">
            <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
              ATASTIANS
            </textPath>
          </text>
        </svg>
      </div>

      {/* Get Started Button */}
      <div className="flex flex-col items-center absolute bottom-24 sm:bottom-20 w-full">
        <button
          className="bg-white text-black w-[333px] h-[53px] rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
          onClick={() => navigate("/introduction")}
        >
          Get Started
        </button>

        {/* Description Text */}
        <p className="text-sm mt-4 text-center max-w-xs sm:max-w-sm md:max-w-md" style={{ color: "rgba(167, 163, 163, 1)" }}>
          Tunisian Association For The Future Of Sciences and Technology
        </p>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-6 flex flex-col items-center w-full">
        {/* Footer Icon */}
        <img src={FooterIcon} className="w-20 sm:w-12 md:w-14 mt-2" alt="Footer Icon" />
      </div>
    </div>
  );
};

export default GetStarted;
