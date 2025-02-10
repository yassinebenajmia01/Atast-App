import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Introduction from "./components/Introduction";
import Login from "./components/Login";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} /> {/* Default Home Page */}
        <Route path="/introduction" element={<Introduction />} /> {/* Introduction Page */}
        <Route path="/login" element={<Login />} /> {/* Default Home Page */}
      </Routes>
    </Router>
  );
};

export default App;
