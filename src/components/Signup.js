import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaEnvelope, FaUser, FaLock, FaUsers, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg">
        <button 
          className="text-white mb-4 absolute left-8 top-12" 
          onClick={() => window.history.back()}
        >
          <ArrowLeft size={20} className="mr-2" /> 
        </button>
        <div className="flex justify-center mb-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/b1d1/e571/66c9a73d629027eb6697c03cec62c28c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=glwhmfxh8~53oiraWtYTQKF7XUsvGqyTMd-HTuwqRBXZ9BmpHFAm1izmbrrH65SaoEU0BuIeSKaIkeEgKySwUuCRc5kkc1hTyiCWfyXlQc63xu~Hl3gjFcJkb4jabO-b9YRnT1v4MNKtM~fRbENIXICtgRXtrZr4M8GotjKqyRKNMYV~ixCFltV1adosJrcMarAZyDGCmXOuoPlN5D88gf2XxQj3NtQctz~n91xsicI7s-DIJHVLICiDugDKcUxNStR-Sw3FGtr9GhvMrqaa2MCCSjyXHmQ-sysJz4is8q2NWJAfgiyXIaEjm5~rcaUnSYoxhONKQHz6Ok0u655pDg__"
            alt="Logo"
            className="w-[136px] h-[148px]  "
          />
        </div>
        <form>
          <div className="space-y-4">
            <div className="relative border-b-2 border-gray-500">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input type="email" placeholder="Email" className="w-full pl-10 p-2 bg-black focus:outline-none" />
            </div>
            <div className="relative border-b-2 border-gray-500">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input type="text" placeholder="First Name" className="w-full pl-10 p-2 bg-black focus:outline-none" />
            </div>
            <div className="relative border-b-2 border-gray-500">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input type="text" placeholder="Last Name" className="w-full pl-10 p-2 bg-black focus:outline-none" />
            </div>
            <div className="relative border-b-2 border-gray-500">
              <FaUsers className="absolute left-3 top-3 text-gray-400" />
              <select className="w-full pl-10 p-2 bg-black focus:outline-none">
                <option>Club</option>
                <option>Club A</option>
                <option>Club B</option>
              </select>
            </div>
            <div className="relative border-b-2 border-gray-500">
              <FaBriefcase className="absolute left-3 top-3 text-gray-400" />
              <select className="w-full pl-10 p-2 bg-black focus:outline-none">
                <option>Post</option>
                <option>Member</option>
                <option>Admin</option>
              </select>
            </div>
            <div className="relative border-b-2 border-gray-500">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full pl-10 p-2 bg-black focus:outline-none" />
              <div className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="relative border-b-2 border-gray-500">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="w-full pl-10 p-2 bg-black focus:outline-none" />
              <div className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            
            <button className="w-[62%] bg-white ml-16 text-black font-bold py-2 rounded-3xl mt-[80%] hover:bg-gray-200"  onClick={() => navigate("/signupsuccess")}> 
            SignUp
        </button>
            <p className="text-center text-gray-400">Already have an account? <a href="login" className="font-[urbanist]" style={{ color: "rgba(0, 160, 155, 1)" }}>Log In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
