import React, { useState } from 'react';
import { FaComment, FaHeart, FaShare, FaBookmark } from 'react-icons/fa';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import Footer2 from './Footer2';
import Isitcomm from "../../assests/isitcom.png";




const EventPost = ({ event }) => {
  const [isSaved, setIsSaved] = useState(event.isSaved);
  const [isLiked, setIsLiked] = useState(event.isLiked);

  const toggleSave = () => setIsSaved(!isSaved);
  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <div className=" rounded-xl p-4 mb-4 shadow-lg text-white w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto" style={{ backgroundColor: 'rgba(164, 15, 46, 1)', scrollbarWidth: 'none' }}>
      {/* Header Section */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center overflow-hidden">
            <img src={event.headImg} alt={event.club} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base text-black">{event.club}</h4>
            <p className="text-xs sm:text-sm text-[#6C7A9C]">{event.handle}</p>
          </div>
        </div>
      </div>

      {/* Event Images */}
      <div className="rounded-lg overflow-hidden shadow-lg mb-3">
        <img src={event.image} alt={event.title} className="w-full h-auto object-cover" />
      </div>

      {/* Date and Title */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-black">{event.date}</h2>
        <p className="text-sm text-gray-700">{event.title}</p>
      </div>

      {/* Engagement Section */}
      <div className="flex justify-between items-center mt-3 text-gray-300 bg-black/40 rounded-lg p-2">
        <div className="flex space-x-4">
          <button className="flex items-center text-xs sm:text-sm">
            <FaComment className="mr-1 w-5 h-5" /> {event.comments}
          </button>
          <button onClick={toggleLike} className="flex items-center text-xs sm:text-sm">
            <FaHeart className={`mr-1 w-5 h-5 transition-all ${isLiked ? "text-[#a01426]" : "text-white"}`} />
            {event.likes}
            {isLiked ? event.likes + 1 : event.likes}</button>
        </div>
        <div className="flex space-x-2">
          <FaShare className="cursor-pointer text-xs sm:text-sm w-5 h-5" />
          <button onClick={toggleSave} className="focus:outline-none">
            <FaBookmark className={`w-5 h-5 transition-all ${isSaved ? "text-[#a01426]" : "text-white"}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Isitcom = () => {
    const events = [
        {
            id: 1,
            club: "ATAST_ISITCOM",
            handle: "@Comunity_Manager",
            isLiked:false,
            isSaved: true, 
            likes: 0,
            comments: 0,
            headImg: Isitcomm,
            image: "https://s3-alpha-sig.figma.com/img/7a8f/06b9/4893b8e26190e386534df1995857a42a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a5yd1SVu4NBrnjxUV5wPfik47b8Lnn5KdM9ALf5mZc6MBOyJAlsU0S9UmEBDVhtFh~~SWir8SyJ4H02S1BixgRyNpuCT4JdJvn21s~rjVomEsiHXOifY2Et5NAv~ow5bpZYCVFkxl7t7XZQNGZWwh6p6P-xlevg~wIcLHrvMxnqCgMEbW4N-nZZb-Ge1uVTNvJsnVQj-G0xU1~NkzPAawU0gzKzKZ9T4ZM27-rDo6V7LUP8Vf2-zB7lKLwBFnwwnYnAKKRtJIr98aOHD93x7m3fYFE47vfco2nJdoWnNxCgAmWu~~bZuG7qn~nF4R6f8tjyWUoh3Dg39huUgwe6TLQ__"
          },
          {
            id: 2,
            club: "ATAST_ISITCOM",
            handle: "@Comunity_Manager",
            headImg: Isitcomm,
            likes: 0,
            isSaved: true,
            isLiked:false,
            comments: 0,
            image: "https://s3-alpha-sig.figma.com/img/e8a5/8b46/c0e9f34f3f349034f034db73810012b3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O2ATjJSdahdh-x2itcK8IInixFql2MynRDct9gDXP6dTRRsC2ddMdUDlu0bXFSTcSo36rTgTnFd~YaVB9By8nyb5zb~XrL2AqrnFRFdTYi8bBN79gkvF2IQSkqRC-WjGhROMTE3XGcuDI3eg9B3DIPqpsZIzP~gOZpe7gvj8Wb5ajo~~DoSUeCt~3wgc-rWTMub1TsVOLZCF~6j0etj-ziRvWwB2d8yALjMO2-xjD3sEoWvh-Fki-kjC637c7rAVpdUKQ1WWRfZJz7Z04EM0dtlvMjnxZVEs8w3Xn6b6zEmx2FjkwLFEiS6Bc4sr9oYkQmF-SNF8qxocT2IB1ih6hw__"
          },
        
      ];
  const additionalImage = "https://s3-alpha-sig.figma.com/img/d33c/bafb/4494aca8676c39c7bdf8ac8005a9148c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JWiS80HxpItqfFugqztgd5f6sbScf1Fq29Z6ksO9I5FYSzb~~5FEUAtCA1EWky~A1PjFhcc0IoaIQ4LNiSRfipwA~ddmeEL6CTWtr7lCwXZGDXHwRk4BW52J-AahALYm-HOvj~bcg4E3KfKFKWoTZmTxWDRCdTe~p2D7YYD4Gpxr5T66e7nbsnuEKkQNU3vpUM8cZnoo~RlnDVD-rOmNm3hYfameMlNoCaDJRDh2wT8pJRXS-5d~sCdrKgp3RVFiKzgK1K4U3vVClm8lwj9ylj0rnwI0QFG7TsoTbE2~bJkPqYL1-p2nrDGeKMOTopmm7A1RUd5VvIuKNlSa-5DXsQ__";
    const additionaHeadlImage =Isitcomm;
    const navigate = useNavigate();
    
  return (
    <>
    <div className="h-screen overflow-y-auto p-0 space-y-4  " style={{ backgroundColor: 'rgba(18, 18, 18, 1)', scrollbarWidth: 'none' }}>
    <div >
  <button className="text-white ml-2  mr-2" onClick={() => navigate(-1)}>
    <ArrowLeft className="w-6 h-6" />
  </button>
</div>


<div className="relative rounded-xl">
  <img
    src={additionalImage}
    alt="Banner"
    className="w-full h-48 object-cover rounded-xl"

  />
  <div className="absolute left-2 bottom-0 translate-y-1/2 bg-white rounded-full shadow-lg">
    <img
      src={additionaHeadlImage}
      alt="Logo"
      className="w-[120px] h-[120px] rounded-full border-4 border-white"
    />
  </div>
</div>

<div className="mt-2  px-4 ml-[30%]">
  <h2 className="text-white text-xl font-bold ">Atast Club Isitcom</h2>
  <p className=" text-sm" style={{ color: "rgba(115, 115, 115, 1)"}}>30 Members<span>,8 Bureaux</span></p>
</div>

      {events.map((event, index) => (
        <EventPost key={index} event={event}  />
      ))}
      <Footer2/>
    </div></>
  );
};

export default Isitcom;
