import React from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
        const navigate = useNavigate();
    
  return (
    <nav style={{ backgroundColor: "rgba(18, 18, 18, 1)" }} className="text-white py-4 flex items-center justify-between px-4">
      {/* Left Icon */}
      <button className="w-11 h-11  rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba( 92, 3, 11, 1)" }}  onClick={() => navigate("/sidebar")}>
        <span className="text-white text-2xl mb-1">≡</span>          

      </button>
      
      {/* Titlee */}
      <h1 className="text-3xl font-semibold font-[montserrat]">Atastians</h1>
      
      {/* Right Icon */}
      <button className="w-[40px] h-[40px]  rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba( 92, 3, 11, 1)" }}>
        <img src="https://s3-alpha-sig.figma.com/img/a905/4850/93db31770e856822d73edafbec9658bd?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NY8zGy9ZXoKZeZPtHUexfGCJ5VbrcuMmGCFaxxkJIwbzVAB9gMgjSBzCYSY-Mt4b1cdGsYr9OgjsdY4lEwu2~UqWSq8ljtaUj9nvYQSbOw~WF8YeU1JgwpaBYuqXxKacSZxjOQKvZmMiYXt2VxGB9uOKbTJtCGwTsvMyau4qY40toUoS4DHzS32CiOjCpK-FJSg3RZw7jY6PMJ~MODLd8miF3EBB9sZY7UABNOmKEb~y06V2XboAqldYnfA4FtVA7-2Pfdt5EDPOvHqdyQWz-zqjnSc8GwST9Y0AvUmHWw~5mWHcKIPgr6mlEN0O6n2yAuC7C2RfUVxKGD93ZeleLg__"
        alt="none" className="w-[35px] h-[25px]" onClick={() => navigate("/atastss")}></img>
      </button>
    </nav>
  );
};

export default Navbar;