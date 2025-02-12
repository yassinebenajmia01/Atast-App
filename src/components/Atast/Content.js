import React, { useState } from "react";
import Navbar from "./Navbar";
import Stories from "./Stories";
import Sidebar from "./Sidebar";
import EventPosts from "./Post";
import Footer from "../Footer";

function Content() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCloseSidebar = (e) => {
    if (e.target.id === "overlay") {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
    
      <Navbar />
      <button
        className="absolute top-4 left-4 w-[44px] h-[44px] px-4 py-2 text-white rounded"
        onClick={() => setIsSidebarOpen(true)}
      >
        
      </button>
      {isSidebarOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleCloseSidebar}
        >
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>
      )}
      <Stories />
      <EventPosts/>
      <Footer/>
    </>
  );
}

export default Content;