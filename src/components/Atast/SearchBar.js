import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import Footer from "../Footer";

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-screen bg-black flex flex-col items-center justify-start pt-10 px-4"
    >
        <button className="text-white absolute left-6" onClick={() => navigate(-1)}>
        <ArrowLeft className="w-6 h-6 mt-4" />
      </button>
      <div
        className="w-full max-w-md bg-[rgba(156,14,44,1)] text-white py-3 px-4 rounded-full flex items-center cursor-pointer mt-12"
        onClick={() => navigate("/search")}
      >
        <Search className="w-5 h-5 text-white mr-2" />
        <span className="text-white opacity-80">Search</span>
      </div>
      <Footer/>
    </div>
  );
};

export default SearchBar;
