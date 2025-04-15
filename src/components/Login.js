import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


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
            src="https://s3-alpha-sig.figma.com/img/b1d1/e571/66c9a73d629027eb6697c03cec62c28c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tdGTqoTY10VvwZnYj3UX6j5ZZ7Qu~qkT1A~MjvouLookZNmhfjIVU85pEKY1~taYh789T6G82e1HNviSUyXIeLdCAUUSKl~-GoQHk3yHx5X4SuwJllTCkb~Ym2TH1uTEJ1VbrVZGU0ecHqNiLhtaODj3UeHlLg-QqJFUJdxh6LH75n~DkzV2AhIwhu~WwEAIedod-Tehn6xeDlYfU6~-yk8nGqvEg2if1yN2nutE9vH9pMDhYl6iGPdblgaUX2LMX4HgdTNsezm5~dokNSvADqIzixNp2m7Gpj6y-RKjH-dv9Kx-~5e4foeLLImaKPpWEoyYVEGk~s-Rh~4cnrcGZg__"
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