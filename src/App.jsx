import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Introduction from "./components/Introduction";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SignupSuccess from "./components/SignupSuccess";
import Content from "./components/Atast/Content";
import Profile from "./components/Atast/Profile";
import SettingsComponent from "./components/Atast/Settings";
import PrivacyPolicy from "./components/Atast/Privacy";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} /> 
        <Route path="/introduction" element={<Introduction />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/signupsuccess" element={<SignupSuccess />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<SettingsComponent />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route  inde path="/content" element={<Content />} />
         
      </Routes>
    </Router>
  );
};

export default App;