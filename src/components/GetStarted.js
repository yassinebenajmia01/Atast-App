import React from "react";
import { useNavigate } from "react-router-dom";


const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white relative px-4">
      
      {/* Logo */}
      <div className="relative flex flex-col items-center w-full mb-56">
        <img 
          src="https://s3-alpha-sig.figma.com/img/b1d1/e571/66c9a73d629027eb6697c03cec62c28c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tdGTqoTY10VvwZnYj3UX6j5ZZ7Qu~qkT1A~MjvouLookZNmhfjIVU85pEKY1~taYh789T6G82e1HNviSUyXIeLdCAUUSKl~-GoQHk3yHx5X4SuwJllTCkb~Ym2TH1uTEJ1VbrVZGU0ecHqNiLhtaODj3UeHlLg-QqJFUJdxh6LH75n~DkzV2AhIwhu~WwEAIedod-Tehn6xeDlYfU6~-yk8nGqvEg2if1yN2nutE9vH9pMDhYl6iGPdblgaUX2LMX4HgdTNsezm5~dokNSvADqIzixNp2m7Gpj6y-RKjH-dv9Kx-~5e4foeLLImaKPpWEoyYVEGk~s-Rh~4cnrcGZg__" 
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
          src="https://s3-alpha-sig.figma.com/img/6f88/a6dc/1756e446fa78dc5ccb59b81bc1121448?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DILfiKpZcmqIDRk7fUaQvY6AMB1n0kTjWDq-O8rpPITEeMUjiPBkwHoJ9nUNZxkR4yDWJXVM~Wr8oJ4u9XtJ9mnW0LYPaKmyX9udzMEI~EuEEePEAWIjQqa-muFk~4Q~E3oFt4pSLT08p1Ttq1AvBV79oElAhqfA9x7Z65V01hjPV7K9PW-6ueGkBG~uQlIzr~hdNzV96bApXMhKEaBVYH-IhKcAxgIlpY0yJVdFmykVESIex2aHnxWq4iyknTorhzJDHAUkLR2dTFlbULt5j1Qi4t2F88l5~z0CZ0z5ooNCeVrjBb0-MuSfviW9ZC7LtusLb~fpdazJ0-gMxUNc6A__"
          className="w-20 sm:w-12 md:w-14 mt-2"
          alt="Footer Icon"
        />
      </div>
    </div>
  );
};

export default GetStarted;
