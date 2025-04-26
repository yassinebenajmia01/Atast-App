import React from "react";
import { Home, Search, Bookmark} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Isitomm from "../assests/isitcom.png";


const Footer = () => {
      const navigate = useNavigate();
  
  return (
    <div className="fixed bottom-0 w-full bg-gradient-to-r from-red-900 to-red-700 py-4 flex justify-around items-center rounded-t-3xl shadow-lg">
      {/* Home Icon */}
      <button className="text-white flex flex-col items-center"           onClick={() => navigate("/content")}
      > 
        <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
          <Home className="w-6 h-6 text-black" />
        </div>
      </button>

      {/* Search Icon */}
      <button className="text-white flex flex-col items-center"   onClick={() => navigate("/searchbar")}>
        <Search className="w-6 h-6 text-white" />
      </button>

      {/* Center Space for Dynamic Island */}
      <div className="w-20 h-8 bg-black rounded-b-full"></div>

      {/* Bookmark Icon */}
      <button className="text-white flex flex-col items-center" onClick={() => navigate("/saved")}>
        <Bookmark className="w-6 h-6 text-white" />
      </button>

      {/* Profile/Icon */}
      <button className="text-white flex flex-col items-center">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <img
            src={Isitomm}
            alt="Profile"
            className="w-8 h-8 rounded-full"
            onClick={() => navigate("/isitcom")}
          />
        </div>
      </button>
    </div>
  );
};

export default Footer;
