import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SettingsComponent = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
    darkMode: true,
    dataSaving: true,
    googleDrive: true,
  });

  const toggleSetting = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col">
      {/* Header Section */}
      <div className="w-full h-20 flex items-center px-6 relative border-b border-gray-700">
        {/* Back Button */}
        <button className="text-white absolute left-6" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-white text-xl font-semibold mx-auto tracking-widest">
          Settings
        </h1>
      </div>

      {/* Settings List */}
      <div className="w-[90%] max-w-md mx-auto mt-4 space-y-4">
        {[
          { key: "pushNotifications", title: "Push Notifications", desc: "Receive push notifications" },
          { key: "emailNotifications", title: "Email Notifications", desc: "Receive weekly email notifications" },
          { key: "darkMode", title: "Dark Mode", desc: "Dark mode interface" },
          { key: "dataSaving", title: "Data-saving Mode", desc: "Image located at the best resolution" },
          { key: "googleDrive", title: "Save to Google Drive", desc: "Save all files to Google Drive" },
        ].map((setting) => (
          <div key={setting.key} className="flex items-center justify-between border-b border-gray-700 pb-3">
            <div>
              <h2 className="text-white font-medium">{setting.title}</h2>
              <p className="text-gray-400 text-sm">{setting.desc}</p>
            </div>
            <button
              onClick={() => toggleSetting(setting.key)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ${
                settings[setting.key] ? "bg-red-600" : "bg-gray-700"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
                  settings[setting.key] ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        ))}

        {/* Clear Cache Button */}
        <div className="mt-4 border-b border-gray-700 pb-3">
          <h2 className="text-white font-medium">Clear Cache</h2>
          <p className="text-gray-400 text-sm">Delete all files stored in cache</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;
