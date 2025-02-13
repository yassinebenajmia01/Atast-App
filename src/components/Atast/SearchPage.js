import React, { useEffect, useRef } from "react";
import Footer from "../Footer";

const SearchPage = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Auto-focus on the input when the component loads
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center p-4">
      <div className="w-full max-w-md">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-900 text-white p-3 rounded-full focus:outline-none"
        />
      </div>
      <Footer/>
    </div>
  );
};

export default SearchPage;
