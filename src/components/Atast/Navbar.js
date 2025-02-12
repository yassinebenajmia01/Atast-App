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
      
      {/* Title */}
      <h1 className="text-3xl font-semibold font-[montserrat]">Atastians</h1>
      
      {/* Right Icon */}
      <button className="w-[40px] h-[40px]  rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba( 92, 3, 11, 1)" }}>
        <img src="https://s3-alpha-sig.figma.com/img/6f88/a6dc/1756e446fa78dc5ccb59b81bc1121448?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KrARwPqQnYYjD~JscX93hsQDjiiJBMIW32SR1AKbFmu2BLatM9upR49JWx7c7GvxsmH7QsooMkNim2rJclGdi~7x0g-zbyQW04COLxfddJXDOJDNvWmuU2z0gtOAqn2M9MDaOEHnI-V8RVwGvqL3Bf6i5F0uteObszXOVuWtaEzr3-wONWVADgE51LFVyIJNyc2LdoEPhJ~k~vOEra~hvzTOO8AKv6~aq4RI3tkfxLFL-XKxVplsh1~ulAGikpYsarHKvAZsmO5A3N9Sz4zhgulCFe6ZwV2hFubdT6ds5aCFtlFN0Fdj5GfAmbCfWENvZdj4ZAChxZZfPMBx4BAimg__"
        alt="none" className="w-[35px] h-[25px]" onClick={() => navigate("/atastss")}></img>
      </button>
    </nav>
  );
};

export default Navbar;