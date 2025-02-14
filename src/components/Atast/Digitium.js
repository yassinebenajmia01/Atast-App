import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";


const Digitium = () => {
    const navigate = useNavigate();
  
  return (
    <div className="bg-black text-white p-6 rounded-lg max-w-lg mx-auto shadow-lg">
      <div className="text-center">
      <button className="text-white absolute left-6" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6 mt-4" />
        </button>
        <img src=" https://s3-alpha-sig.figma.com/img/7a8f/06b9/4893b8e26190e386534df1995857a42a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gt1KWepNRxkKxwr1EGWeMvH3cEQwJh47rbjPm56au1u82DOYn3vyu4uJ2GwUIEpMZmpaQyCFZ1pgM71YTBloUCWBfjLOH0MGSDuhd69ZOSbJywFEOhc3M2V2lUgJKN6-NwUsi6Hpyj9xXMVYsLp-XOZIl4wfZM~5aej-iHB30AMdEQfw-hVId~JrJklGELKv-lEZdwuKCmJttIQR5qeoGsvaFysl7cEY0S3-vMiblgIEvqZ4R0VANhVFfQ~70GOCcoOzRid8HnETGSW8KG9y3ozQb66ZMHQuJ6cA~iLWYqGIqeyIqnkxctqAfnajlTbUjO2k0aLJlK80N9RFtjAXqw__" alt="digitium" className="rounded-3xl"/>
      </div>
      <div className="mt-6 flex items-center justify-between p-3 rounded-md " >
         
         <div className=" absolute top-44 flex flex-col items-center w-16 h-16 rounded-lg overflow-hidden shadow-lg">
      {/* Red Top Section */}
      <div className="bg-red-600 w-full h-4"></div>
      
      {/* Black Background with White 9 */}
      <div className=" w-full h-full  flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: 'rgba(21, 21, 21, 1)', scrollbarWidth: 'none' }}>
        9
      </div>
    </div>
        <span className="text-red-700 text-lg font-semibold font-[Montserrat]">DIGITIUM</span>
        <div className="mt-6">
        <p className="text-white text-sm mr-10 font-semibold font-[Montserrat]">Saturday,13:30</p>
        </div>
        <button className="bg-red-700 text-white px-8 py-2  rounded-md font-bold" style={{ backgroundColor: 'rgba(153, 14, 43, 1)', scrollbarWidth: 'none' }}>Register</button>
      </div>
      <div className="mt-6">
        <p className="text-lg font-semibold">Calling all student entrepreneurs!</p>
        <p className="mt-2">
          Are you a student with big dreams of starting your own <span className="font-bold">business</span>? Looking for guidance and inspiration to turn your ideas into <span className="font-bold">reality</span>?
        </p>
        <p className="mt-2">
          Look no further than <span className="text-red-600 font-bold">DIGITIUM</span> – your gateway to a successful business in the Digital Era!
        </p>
        <p className="mt-2">
          Join us for a day filled with wisdom and insights from successful content creators, entrepreneurs, and marketing mavens who will share their stories, insights, and strategies for success.
        </p>
        <p className="mt-2">
          Get ready to be <span className="font-bold">motivated, empowered</span>, and armed with the tools and <span className="font-bold">knowledge</span> you need to succeed.
        </p>
        <p className="mt-2">
          Whether you're passionate about technology, social impact, or traditional business models, <span className="text-red-600 font-bold">DIGITIUM</span> has something for everyone!
        </p>
        <p className="mt-4 font-semibold">Save the date and join us:</p>
        <ul className="list-disc list-inside mt-2 text-red-600">
          <li>Saturday, March 9th.</li>
          <li>ISTCom Hammem sousse.</li>
          <li>13h30</li>
        </ul>
        <p className="mt-4 text-sm text-gray-400">
          Don't miss this opportunity to connect with like-minded individuals, gain valuable knowledge, and be inspired to take the first step towards your entrepreneurial journey.
        </p>
      </div>
    </div>
  );
};

export default Digitium;