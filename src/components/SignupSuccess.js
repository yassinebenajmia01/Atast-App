import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

export default function SignupSuccess() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // Confetti stops after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 ">
      {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
      
      {/* Logo */}
      <div className="mb-6 ">
        <img
          src="https://s3-alpha-sig.figma.com/img/b1d1/e571/66c9a73d629027eb6697c03cec62c28c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=glwhmfxh8~53oiraWtYTQKF7XUsvGqyTMd-HTuwqRBXZ9BmpHFAm1izmbrrH65SaoEU0BuIeSKaIkeEgKySwUuCRc5kkc1hTyiCWfyXlQc63xu~Hl3gjFcJkb4jabO-b9YRnT1v4MNKtM~fRbENIXICtgRXtrZr4M8GotjKqyRKNMYV~ixCFltV1adosJrcMarAZyDGCmXOuoPlN5D88gf2XxQj3NtQctz~n91xsicI7s-DIJHVLICiDugDKcUxNStR-Sw3FGtr9GhvMrqaa2MCCSjyXHmQ-sysJz4is8q2NWJAfgiyXIaEjm5~rcaUnSYoxhONKQHz6Ok0u655pDg__"
          alt="Logo"
          className="w-[136px] h-[148px] mb-[50%] "
        />
      </div>

      {/* Success Card */}
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80 text-center relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <CheckCircle size={50} className="text-green-500" />
        </div>
        <h2 className="text-xl font-bold mt-6">Successfully</h2>
        <p className="text-gray-500 text-sm">Your account registration was successful.</p>
        <button className="bg-gray-200 text-black mt-4 py-2 px-6 rounded-lg">Oke</button>
      </div>

      {/* Confirmation Message */}
      <p className="text-center mt-6 px-6 text-sm">
        <strong>Congratulations!</strong> Your sign-up was successful.
        Your account is pending approval by the <strong>Board member</strong>.
        You will be notified once your account is activated.
        Thank you for your patience.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg" style={{
            background: "linear-gradient(180deg, rgba(157, 1, 1, 1) 0%, rgba(88, 1, 1, 1) 100%)"
          }}           onClick={() => navigate("/login")}
        >Login</button>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg" style={{
            background: "linear-gradient(180deg, rgba(157, 1, 1, 1) 0%, rgba(88, 1, 1, 1) 100%)"
          }}           onClick={() => navigate("/introduction")}
        >About Us</button>
      </div>
    </div>
  );
}
