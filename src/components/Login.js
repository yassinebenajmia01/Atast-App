import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TitleImage from "../assests/AtastLogo.png";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
      const navigate = useNavigate();
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-80 p-6 bg-black rounded-lg shadow-md">
        <button 
          className="text-white mb-4 absolute left-8 top-12" 
          onClick={() => window.history.back()}
        >
          <ArrowLeft size={20} className="mr-2" /> 
        </button>
        <div className="flex justify-center mb-32">
          <img
            src={TitleImage}
            alt="Logo"
            className="w-[136px] h-[148px] "
          />
        </div>
        <div className="mb-4 relative mt-36">
          <label className="block text-white mb-1" htmlFor="email" placeholder="Email">
          </label>
          <div className="flex items-center border-b border-gray-700 pb-2">
            <Mail className="text-white mr-2" size={20} />
            <input
              type="email"
              id="email"
              className="w-full bg-black text-white focus:outline-none"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="mb-4 relative">
          <label className="block text-white mb-1" htmlFor="password">
          </label>
          <div className="flex items-center border-b border-gray-700 pb-2">
            <Lock className="text-white mr-2" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full bg-black text-white focus:outline-none"
              placeholder="Password"
            />
            <button
              type="button"
              className="ml-2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <a href="ra" className="hover:text-red-500">Recover Account</a>
          <a href="fp" className="hover:text-red-500">Forgot Password?</a>
        </div>
        <button className="w-full bg-white text-black font-bold py-2 rounded-3xl mt-36 hover:bg-gray-200" onClick={() => navigate("/content")}
        >
          Login
        </button>
        <p className="text-center text-gray-400 text-sm mt-4"  onClick={() => navigate("/signup")}>
          Don't have an account? <a href="signup" className="text-blue-400">SignUp</a>
        </p>
      </div>
    </div>
  );
}