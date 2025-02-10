import React from "react";
import { useNavigate } from "react-router-dom";


const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white relative px-4">
      
      {/* Logo */}
      <div className="relative flex flex-col items-center w-full mb-56">
        <img 
          src="https://s3-alpha-sig.figma.com/img/b1d1/e571/66c9a73d629027eb6697c03cec62c28c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fVFFqCU3z2DnRRnYxxFu9QtVyB2~Hf7UyeSuggySFRj3feIu2CN~Y1zAlfUfcwjJPkwf0uwAMLHW5W2R48aXQ88gp8Rgf-Lc1nsbLHMKv9kdMcf1-Uci6NERdjAsM6v6cCRWFykQIVgNtmE-kXBRicY2qm2RDbrWGnuajD80L4vTX6LM8wDkSyeIEeNTLm0NKtLxCl~K~0sXZ4vCSKp6M-Sq2xciBodo2FeEMxnOFRQ77W1ODnPydl72-75BP1Ds~BYRh2VD2AQIc4WMXJLXuK8Mv2eHf1ctoRRrWNQkx3eZd9qwJYuKM28uzQ9gkF8-4ROlp8SdFhCInjXbaKZkcw__" 
          className="w-40 sm:w-52 md:w-60 lg:w-64"
          alt="ATAST Logo"
        />

        {/* Curved Text */}
        <svg
          width="250"
          height="80"
          viewBox="0 0 332 92"
          className="mt-2"
        >
          <defs>
            <path
              id="curvePath"
              d="M 20,70 A 160,60 0 0,1 312,70"
              fill="transparent"
            />
          </defs>
          <text fontSize="20" fill="white" fontWeight="bold" letterSpacing="1px">
            <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
              ATASTIANS
            </textPath>
          </text>
        </svg>
      </div>

       {/* Get Started Button */}
       <div className="flex flex-col items-center absolute bottom-24 sm:bottom-20 w-full">
        <button 
          className="bg-white text-black w-[333px] h-[53px] rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
          onClick={() => navigate("/introduction")} // Navigate on click
        >
          Get Started
        </button>

        {/* Description Text */}
        <p 
          className="text-sm mt-4 text-center max-w-xs sm:max-w-sm md:max-w-md"
          style={{ color: "rgba(167, 163, 163, 1)" }}
        >
          Tunisian Association For The Future Of Sciences and Technology
        </p>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-6 flex flex-col items-center w-full">
        
        {/* Footer Icon */}
        <img 
          src="https://s3-alpha-sig.figma.com/img/6f88/a6dc/1756e446fa78dc5ccb59b81bc1121448?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W0UqYg0OQTHHn2hQNZ37SUcq-MpUKNsPjNcmzV4g4VR2Nv5QMuJtlMuHzeQgKYO8vhhQ~BHwjxOkuiUchHUU4~36jJrwZPlv3adVH5TpH2l0oP3x7CWsGgz9bNxxy-lX4YqZk-eEVcf5rJh0jIEbau6SNiGaIhPJavt54PRRZFMBu3XxmVnIaNdcda7wtZWa~U0XvSw3Pqo9KhD3VPbgBovP5R~kb-yPs0ewCk7otI61tIDAqUh0r4Hqd1ODWwEmuh7mJBDN18PuS9zUliJQNNj62L2xhIgM5E3YTWAaitqLrpipSNQppigIXKuu1u3Qg-I~ZjxCNAwNjdRoGV1TDg__"
          className="w-20 sm:w-12 md:w-14 mt-2"
          alt="Footer Icon"
        />
      </div>
    </div>
  );
};

export default GetStarted;
