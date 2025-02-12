import React from "react";
import { FaUser, FaShieldAlt, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Sidebar = ({ isOpen, onClose }) => {
          const navigate = useNavigate();
    
  return (
    <div
      className={`fixed top-0 left-0 h-full w-1/2 bg-black text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out shadow-lg z-50`}
    >
      <div className="bg-gradient-to-b from-red-900 to-black p-6 rounded-br-xl">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <FaUser className="text-black text-2xl" />
          </div>
          <h2 className="mt-2 text-lg font-semibold">Flen_Fouleni</h2>
          <p className="text-red-400">@Member</p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-4 cursor-pointer"  onClick={() => navigate("/profile")}>
          <FaUser />
          <span>Profile</span>
        </div>
        <div className="flex items-center space-x-4 cursor-pointer"  onClick={() => navigate("/privacy")}>
          <FaShieldAlt />
          <span>Privacy Policy</span>
        </div>
        <div className="flex items-center space-x-4 cursor-pointer"  onClick={() => navigate("/settings")}>
          <FaCog />
          <span>Settings</span>
        </div>
      </div>

      <button className="absolute bottom-6 left-6 bg-red-900 px-6 py-2 rounded-full flex items-center space-x-2 text-white"  onClick={() => navigate("/introduction")}>
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
