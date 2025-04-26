import React, { useState } from "react";
import { FaHeart, FaComment, FaShare, FaBookmark } from "react-icons/fa";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ArrowLeft } from "lucide-react";
import Isitcomm from "../../assests/isitcom.png";
import Fms from "../../assests/fms.png";

const events = [
  {
    id: 1,
    club: "ATAST_ISITCOM",
    handle: "@Comunity_Manager",
    isLiked: false,
    isSaved: true,
    likes: 0,
    comments: 0,
    headImg: Isitcomm,
    image: "https://s3-alpha-sig.figma.com/img/7a8f/06b9/4893b8e26190e386534df1995857a42a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a5yd1SVu4NBrnjxUV5wPfik47b8Lnn5KdM9ALf5mZc6MBOyJAlsU0S9UmEBDVhtFh~~SWir8SyJ4H02S1BixgRyNpuCT4JdJvn21s~rjVomEsiHXOifY2Et5NAv~ow5bpZYCVFkxl7t7XZQNGZWwh6p6P-xlevg~wIcLHrvMxnqCgMEbW4N-nZZb-Ge1uVTNvJsnVQj-G0xU1~NkzPAawU0gzKzKZ9T4ZM27-rDo6V7LUP8Vf2-zB7lKLwBFnwwnYnAKKRtJIr98aOHD93x7m3fYFE47vfco2nJdoWnNxCgAmWu~~bZuG7qn~nF4R6f8tjyWUoh3Dg39huUgwe6TLQ__"
  },
  {
    id: 2,
    club: "ATAST_FMS",
    handle: "@Comunity_Manager",
    headImg: Fms,
    likes: 0,
    isSaved: true,
    isLiked:false,
    comments: 0,
    image: "https://s3-alpha-sig.figma.com/img/6fab/4f21/8c7dabb60fa363f0a2bf7ed19737fafc?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rD9yneTFFusIHglKCdU4GcHwQhzAOag~UsH-JAjDx1UsAUjG0Am-TRUbmUEGurV3t4lPP3x717dPIJNscMQtzcXIkpR5eSDwV6vBT9p~cWMdtNMjYJcgUwp3cuUcmoCyYvjXxccG2Nw18Sjle3dFyA7UIhKbspnCOrX0YTYLpuVapB4t0y63BFdCczBUyuYLJ2~pbRwvR929x93Y0hworLDRpnGrOVbmv-SlbXcO~3XdRwXOTQWdJZspSGFaYfna1RoJigQuBtG7mRn5UUJO3x5Qw6f7mEEFtpA4tFZZQHU7y5oKR~sm1EobXW18-CAxpH2Ut0gTwwsKZhNunrdoPQ__"
  },
];

const EventPost = ({ event }) => {
  const [isSaved, setIsSaved] = useState(event.isSaved);
  const [isLiked, setIsLiked] = useState(event.isLiked);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-[#a01426] rounded-xl p-4 mb-4 shadow-lg text-white w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center overflow-hidden">
            <img src={event.headImg} alt={event.club} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base">{event.club}</h4>
            <p className="text-xs sm:text-sm text-gray-300">{event.handle}</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src={event.image} alt={event.title} className="w-full h-auto object-cover" />
      </div>

      <div className="flex justify-between items-center mt-3 text-gray-300 bg-black/40 rounded-lg p-2">
        <div className="flex space-x-4">
          <button className="flex items-center text-xs sm:text-sm">
            <FaComment className="mr-1 w-5 h-5" /> {event.comments}
          </button>
          <button onClick={toggleLike} className="focus:outline-none flex items-center text-xs sm:text-sm ">
            <FaHeart className={`mr-1 w-5 h-5 transition-all ${isLiked ? "text-white" : "text-[#a01426]"}`} />
            {event.comments}
          </button>
        </div>
        <div className="flex space-x-2">
          <FaShare className="cursor-pointer text-xs sm:text-sm w-5 h-5" />
          <button onClick={toggleSave} className="focus:outline-none">
            <FaBookmark className={`w-5 h-5 transition-all ${isSaved ? "text-white" : "text-[#a01426]"}`} />
          </button>
          
        </div>
      </div>
    </div>
  );
};

const Saved = () => {
  const navigate = useNavigate(); // Use navigate function

  return (
    <div className="h-screen  overflow-y-auto p-0 space-y-4" style={{ scrollbarWidth: "none", backgroundColor: "rgba(18, 18, 18, 1)" }}>
      {/* Back Arrow - Navigate to Previous Page */}
      <button className="text-white absolute left-6" onClick={() => navigate(-1)}>
        <ArrowLeft className="w-6 h-6 mt-4" />
      </button>

      {/* Profile Title - Centered */}
      <h1 className="text-gray-300 text-2xl font-semibold mx-auto ml-[46%]">Saved</h1>

      {events.map((event, index) => (
        <EventPost key={index} event={event} />
        
      ))}
      <Footer/>







    </div>
  );
};

export default Saved;
