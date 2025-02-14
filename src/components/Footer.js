import React from "react";
import { Home, Search, Bookmark} from "lucide-react";
import { useNavigate } from "react-router-dom";


const Footer = () => {
      const navigate = useNavigate();
  
  return (
    <div className="fixed bottom-0 w-full bg-gradient-to-r from-red-900 to-red-700 py-4 flex justify-around items-center rounded-t-3xl shadow-lg">
      {/* Home Icon */}
      <button className="text-white flex flex-col items-center"           onClick={() => navigate("/content")}
      > 
        <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
          <Home className="w-6 h-6 text-black" />
        </div>
      </button>

      {/* Search Icon */}
      <button className="text-white flex flex-col items-center"   onClick={() => navigate("/searchbar")}>
        <Search className="w-6 h-6 text-white" />
      </button>

      {/* Center Space for Dynamic Island */}
      <div className="w-20 h-8 bg-black rounded-b-full"></div>

      {/* Bookmark Icon */}
      <button className="text-white flex flex-col items-center" onClick={() => navigate("/saved")}>
        <Bookmark className="w-6 h-6 text-white" />
      </button>

      {/* Profile/Icon */}
      <button className="text-white flex flex-col items-center">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/11d8/cb1b/206cc6a5919229cb6210826a4ea6e574?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lHgi81BODlpm5aDmM2uDWAXTjH7bu0WiFxoai-6rIQJqezhHvebceQt-O222gfC6jSCC2308iFbdUJJ3BjKmXjyg5kNt0b8YHxCXyHbia9OuqlTbZnEG7Kun6ifQPHa5oC226GcRmpUfLm~w5-JAg~msMjMSoo7yZU3CMedBof3DD83VHLnF0y0IBYxMR-CmoZrheMepLvJroFiMYQ8wrK0LCFH9cyTsacdA5P8iOaHOKqS-oP75z2QxUpuqTL4ijV0uM6l25ohE4NHf~GLt8bsaiKIRSsJsj7S0QcGyUulZl1TbwG149Kj7IrOJRiDftAlrH1va7zcd8D51s599jA__"
            alt="Profile"
            className="w-8 h-8 rounded-full"
            onClick={() => navigate("/isitcom")}
          />
        </div>
      </button>
    </div>
  );
};

export default Footer;
