import React from "react";
import { useNavigate } from "react-router-dom";


const Introduction = () => {
    const navigate = useNavigate();
  
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 sm:px-8 py-8">
      
      {/* Login Button */}
      <div className="w-full flex justify-end px-4">
        <button 
          className="w-[110px] h-[32px] rounded-[8px] text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
          style={{
            background: "linear-gradient(180deg, rgba(157, 1, 1, 1) 0%, rgba(88, 1, 1, 1) 100%)"
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>

      {/* Event Description */}
      <p className="text-center font-[Montserrat] text-[18px] sm:text-[17.41px] font-normal leading-[24px] sm:leading-[24.87px] tracking-[-0.33px]  max-w-xs sm:max-w-md md:max-w-lg mt-6"           style={{ color: "rgba(255, 255, 255, 1)" }}
      >
        événements pour stimuler la passion des jeunes pour les sciences. La catégorie senior comprend des clubs ATAST dans 24 universités, offrant aux étudiants la possibilité de s'impliquer activement dans la communauté scientifique et technologique. Rejoignez-nous pour découvrir, apprendre et innover ensemble pour un avenir meilleur!
      </p>
         {/* Title Image */}
      <div className="mt-6 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%]">
        <img 
          src="https://s3-alpha-sig.figma.com/img/a905/4850/93db31770e856822d73edafbec9658bd?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WvKd3qv3lNlq91rQiDGjZA4pRuHKClNvk5rcDwJzv~I8TSMlQ68Sl8hq4dPcRxICLkp6K28MnVAl9mANJLTmBLKDsunG6T11YLBTodS3~HLkpx4tC4xXu1RM~9ay~3swiG015vif-9SVcqQgnMJShPx0HNyembryc8w9ku~UFbtjqsIKpRd~mGu7a0mIzFWkAS6Te4c5CXrhm~bYwyswapKDuN4-CLcd~oBfkVHBfDRYuFUopVTCsKaN1Y9O6~~iLg2bsoYwSduOw-aIHphUpIgLvwLyOGfjEoO8p4svJ93fdFZYLPj5QxKI8BobAVVPgk5su4nlco-vgloX3RJKYg__"
          className="rounded-lg shadow-lg w-full h-auto"
          alt="Atast"
        />
      </div>
     

      {/* Section Description */}
      <p className="text-center font-[Montserrat] text-[18px] sm:text-[17.41px] font-normal leading-[24px] sm:leading-[24.87px] tracking-[-0.23px] text-white max-w-xs sm:max-w-md mt-4" style={{ color: "rgba(255, 255, 255, 1)" }}>
        Atast Student section est une section d’ATAST qui s’occupe des clubs atast dans les universités
      </p>

     

      {/* Hatem Slimen's Image */}
      <div className="mt-6 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%]">
        <img 
          src="https://s3-alpha-sig.figma.com/img/8925/db14/557717545ec583fd5a561b9c1cd9e222?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Sagg2ZRwK~Xqps1X4TzXFPhcuH9hZDOe7-fxhIGFOPD5VR-16TMICjhC7mtfSuxnn1c0~mvSZazrYnjqj3rIudgjXiaCmLkESy4wjOfJyrzGzs1-J5zrsfk3tQ2bQVr0ifoaIjCqvCClF7-4ElY-MWThrUmw9rXzPH1eliMaKmWIC1Ymn7tde4TrKmE0cdYwSHHE~GWlL6mNc2~rsDe-3bRyj~rysNkHZDkbRPVvLSwEOayw1~gHTPvV-Fzg3UbRa7BFHFMn6O3QU6DQZl6S3Kx5ZVQllRc1g~qtvnIp1xp5RrL~HG6zSxuCgJ0JrmBQUPs~ybiudP8sYX779BpwlA__"  
          alt="Hatem Slimen"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>

      {/* Hatem Slimen's Description */}
      <p className="mt-4 w-[90%] sm:w-[75%] md:w-[60%] text-center font-[Montserrat] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] text-white">
        Hatem Slimen "Founder & National<br/> President – ATAST, <br />
        General director of IFEST² the international <br/> projects competition in Tunisia, <br />
        General secretary of MILSET Africa, <br />
        BRISECC member, Tunisia."
      </p>

    </div>
  );
};

export default Introduction;
