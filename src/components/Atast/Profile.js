import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const ProfileComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full h-32 bg-gradient-to-r from-red-900 to-black flex items-center px-6 relative">
        {/* Back Arrow - Navigate to Content Component */}
        <button className="text-white absolute left-6" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Profile Title - Centered */}
        <h1 className="text-gray-300 text-2xl font-semibold mx-auto">Profile</h1>

        {/* Edit Profile Button - Right Side */}
        <button className="absolute right-6 text-gray-300 text-sm">Edit profile</button>
      </div>

      {/* Profile Picture Section */}
      <div className="relative -top-12 flex flex-col items-center">
        <div className="w-24 h-24 border-4 border-black rounded-full bg-gray-700 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 2a5 5 0 015 5v1a5 5 0 11-10 0V7a5 5 0 015-5zm-7 16a7 7 0 1114 0v1H5v-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Profile Form Section */}
      <div className="w-[90%] max-w-md space-y-4 mb-6">
        {[
          { label: "Name", type: "text", value: "Flen_fouleni" },
          { label: "Email", type: "email", value: "flenfouleni112@gmail.com" },
          { label: "Phone", type: "text", value: "+216 12 345 678" },
          { label: "Club", type: "text", value: "Atast Club ISITCOM" },
          { label: "Post", type: "text", value: "Member" }
        ].map((field, index) => (
          <div key={index}>
            <label className="text-gray-400 text-sm">{field.label}</label>
            <input
              type={field.type}
              defaultValue={field.value}
              className="w-full bg-black text-gray-300 border border-red-600 rounded-3xl px-3 py-2 outline-none mt-2 focus:ring-2 focus:ring-red-700"
              disabled
            />
          </div>
        ))}

        {/* Password Field with Toggle */}
        <div className="relative">
          <label className="text-gray-400 text-sm">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              defaultValue="••••••••"
              className="w-full bg-black text-gray-300 border border-red-600 rounded-3xl mt-2 px-3 py-2 outline-none focus:ring-2 focus:ring-red-700 pr-10"
              disabled
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-400 mt-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
