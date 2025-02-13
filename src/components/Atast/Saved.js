import React, { useState } from "react";
import { FaHeart, FaComment, FaShare, FaBookmark } from "react-icons/fa";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ArrowLeft } from "lucide-react";

const events = [
  {
    id: 1,
    club: "ATAST_ISITCOM",
    handle: "@Comunity_Manager",
    isLiked: false,
    isSaved: true,
    likes: 0,
    comments: 0,
    headImg: "https://s3-alpha-sig.figma.com/img/11d8/cb1b/206cc6a5919229cb6210826a4ea6e574?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lHgi81BODlpm5aDmM2uDWAXTjH7bu0WiFxoai-6rIQJqezhHvebceQt-O222gfC6jSCC2308iFbdUJJ3BjKmXjyg5kNt0b8YHxCXyHbia9OuqlTbZnEG7Kun6ifQPHa5oC226GcRmpUfLm~w5-JAg~msMjMSoo7yZU3CMedBof3DD83VHLnF0y0IBYxMR-CmoZrheMepLvJroFiMYQ8wrK0LCFH9cyTsacdA5P8iOaHOKqS-oP75z2QxUpuqTL4ijV0uM6l25ohE4NHf~GLt8bsaiKIRSsJsj7S0QcGyUulZl1TbwG149Kj7IrOJRiDftAlrH1va7zcd8D51s599jA__",
    image: "https://s3-alpha-sig.figma.com/img/7a8f/06b9/4893b8e26190e386534df1995857a42a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gt1KWepNRxkKxwr1EGWeMvH3cEQwJh47rbjPm56au1u82DOYn3vyu4uJ2GwUIEpMZmpaQyCFZ1pgM71YTBloUCWBfjLOH0MGSDuhd69ZOSbJywFEOhc3M2V2lUgJKN6-NwUsi6Hpyj9xXMVYsLp-XOZIl4wfZM~5aej-iHB30AMdEQfw-hVId~JrJklGELKv-lEZdwuKCmJttIQR5qeoGsvaFysl7cEY0S3-vMiblgIEvqZ4R0VANhVFfQ~70GOCcoOzRid8HnETGSW8KG9y3ozQb66ZMHQuJ6cA~iLWYqGIqeyIqnkxctqAfnajlTbUjO2k0aLJlK80N9RFtjAXqw__"
  },
  {
    id: 2,
    club: "ATAST_FMS",
    handle: "@Comunity_Manager",
    headImg: "https://s3-alpha-sig.figma.com/img/bc8e/c02b/7cf67a7c672823c4d37c8bbf7ec80d0c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fEOdhXCTtQQRkVaRyTNr8HUrIhVLqEttuM9-FBRLT-3JxsIlKXEKSC0pUnMN3LNsUhmSTUNU5L9F~uHwsjrLDenci4~VMXFP88AWuVaHm2TgIUUlXCKm6FDIhCgdvC3AK~594eScL5T56WSFrKqZMSxgK5p2p4h0N4nyEdboUzLu4YOekkcQW30X8Bd~zRxJCHZegwMbkXtP9hjl3zBqkF-uzkmWmkaBMp6kG6vTQ6I26RdbrhMNDYre7kf4sPbpdbsVad2m43TwydZDXGjv~gTvPlFdF9T8c9LH0U6OIf9by~uUJgGH6TkrMzb~zhhnnqDPA8eacna1DCVphr52yw__",
    likes: 0,
    isSaved: true,
    isLiked:false,
    comments: 0,
    image: "https://s3-alpha-sig.figma.com/img/b804/5200/dcbe8f2db0aec22af4eb6234ab290bce?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qFJhPGHyVMSZypRb0P8I1COEDDJ-dQVhcC8gND0z3s6llcTsx~RRxwt~18vJAMGPNQsqvkyUnoRHcMRN6LrEnXw4Sq7ghjLzy2tCDb4AfgDK5OeaTtRrkDQhf96bWL6OjNYiEbhYE~t~aluH~R-QlGwvM8IyKyjN0M7--N2nVl8x9r8zKNBPtFfAVgvxYiH-1mSnmseegcB0HxYcTiYdgkUBj0ycR28gWnlkFCjJ-dwD4iNdVY-5wxE3jj33Q0IS6cViLqcqWSyPRV9Jf84W8i6KdmzURj5wBk~mQ7hHnfAA9cgfXjNd32hpnS8~5bPhfZlQ0hU473OEWq0wdXDaYg__"
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
      <h1 className="text-gray-300 text-2xl font-semibold mx-auto ml-[40%]">Saved</h1>

      {events.map((event, index) => (
        <EventPost key={index} event={event} />
        
      ))}
      <Footer/>







    </div>
  );
};

export default Saved;
