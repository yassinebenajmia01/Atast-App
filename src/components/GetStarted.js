import React from "react";

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white relative">
      <div className="text-center mb-8 relative">
        <img 
          src="https://s3-alpha-sig.figma.com/img/b1d1/e571/66c9a73d629027eb6697c03cec62c28c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fVFFqCU3z2DnRRnYxxFu9QtVyB2~Hf7UyeSuggySFRj3feIu2CN~Y1zAlfUfcwjJPkwf0uwAMLHW5W2R48aXQ88gp8Rgf-Lc1nsbLHMKv9kdMcf1-Uci6NERdjAsM6v6cCRWFykQIVgNtmE-kXBRicY2qm2RDbrWGnuajD80L4vTX6LM8wDkSyeIEeNTLm0NKtLxCl~K~0sXZ4vCSKp6M-Sq2xciBodo2FeEMxnOFRQ77W1ODnPydl72-75BP1Ds~BYRh2VD2AQIc4WMXJLXuK8Mv2eHf1ctoRRrWNQkx3eZd9qwJYuKM28uzQ9gkF8-4ROlp8SdFhCInjXbaKZkcw__" 
          style={{
            width: "191px",
            height: "214.4px",
            position: "absolute",
            top: "-200px", // Adjusted to move image higher
            left: "110px"
          }}
          className="mb-[80%]"
        />
        <svg
          width="331.95"
          height="91.47"
          viewBox="0 0 332 92"
          className="absolute"
          style={{ top: "31px", left: "50.7px", transform: "rotate(-0.44deg)" }} // Applied given positioning
        >
          <defs>
            <path
              id="curvePath"
              d="M 20,70 A 160,60 0 0,1 312,70" // Adjusted to fit better
              fill="transparent"
            />
          </defs>
          <text fontSize="28" fill="white" fontWeight="bold" letterSpacing="1px">
            <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
              ATASTIANS
            </textPath>
          </text>
        </svg>
        <p className="text-sm mt-[200px]">Tunisian Association For The Future Of Sciences and Technology</p>
      </div>
      <button 
        className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
        onClick={() => alert("Get Started Clicked!")}
      >
        Get Started
      </button>
      <div className="absolute bottom-4 text-center">
        <p className="text-xs">ATAST STUDENT SECTION</p>
      </div>
    </div>
  );
};

export default GetStarted;
