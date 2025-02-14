import React from "react";
import { MessageCircle, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer2 = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full bg-gradient-to-r from-red-900 to-red-700 py-4 flex justify-around items-center rounded-t-3xl shadow-lg">
      {/* Users Icon */}
      <button 
        className="text-white flex flex-col items-center"
        onClick={() => navigate("/members")}
      > 
        <Users className="w-8 h-8 text-white" />
      </button>

      {/* Center Space with Creative Element */}
      <div className="w-28 h-14 bg-gradient-to-r from-red-900 to-black rounded-full flex items-center justify-center shadow-md border-4 border-white">
        
      </div>

      {/* Chat Icon */}
      <button 
        className="text-white flex flex-col items-center"
        onClick={() => navigate("/chat")}
      >
        <MessageCircle className="w-8 h-8 text-white" />
        
      </button>
    </div>
  );
};

export default Footer2;