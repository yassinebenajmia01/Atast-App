import React,{ useState } from "react";
import { FaHeart, FaComment, FaShare,FaBookmark } from "react-icons/fa";

const events = [
  {
    id: 1,
    club: "ATAST_ISITCOM",
    handle: "@Comunity_Manager",
    isLiked:false,
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
  {
    id: 3,
    club: "ATAST_EPI",
    handle: "@Comunity_Manager",
    isSaved: false, 
    headImg: "https://s3-alpha-sig.figma.com/img/f1f4/958e/07865f43808cf32f57e55b8d881634e2?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=maOqlMivKVFD8cs-Kpy5uF6Exemv1BuUYWy48UVRxacUZmtVZ2EtwkSr9D1CxIRHHcNE9PZ~jnpLcs3PLudWO49YX7Hjh2d6mchgBoSwekYJ0jK4TTA8J0n5IW3V3o3ZgTawxxdmGX22Yrowd-v7JPu9RnZjGI3SUncl09DlFY5H2hlJrO3uDA-aXRYnYlhEZZenwdIbOK05jFp-At9L2GzLyKXE2vM1XPZbi3q~cTJ-ODyKg1Q7T4ZdX-9U8MgHkMOJGoFezdcS1VKIO6krtbNtY8xbFIlhfhz8wy4oQoKNKqKcSpwSW6jJh8~KVip1o4qchxi5JXUl7Mi0NDGoHA__",
    likes: 0,
    comments: 0,
    isLiked:true,
    image: "https://s3-alpha-sig.figma.com/img/6fab/4f21/8c7dabb60fa363f0a2bf7ed19737fafc?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AzmNrxiyGgat-JeqO5X6q91yMRoCa1NIqLH~rqqRZOXoGQoClkhqGR7uqKuxbC0YyAhejyK45N4RFLf1Jyu1s9sAO772eBBzY9l13s6K1lQI6krnxNheu-lkXFYaY9aJX4QGf5JbwAw6JMfx~tbn1bf3OQ8YHed9y~Yi3muC~6iU15Ci9aajhleDLIPvRiQSfoln85GdEMEHamM8zh~16yn6Ft-7k7HzU5jNMM9Dx08YgmPsZ2ohj3w~2NX5Utuc11sSG2rKyhaOtEvb2v5N3z4RKAYF2Ogl3GuMHCaRkVZaN~JpXaDWlUKoxDgezgpLKez~T8VjTEcr9I3xMzcIqw__"
  },
  {
    id: 4,
    club: "ATAST_FMS",
    handle: "@Comunity_Manager",
    headImg: "https://s3-alpha-sig.figma.com/img/11d8/cb1b/206cc6a5919229cb6210826a4ea6e574?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lHgi81BODlpm5aDmM2uDWAXTjH7bu0WiFxoai-6rIQJqezhHvebceQt-O222gfC6jSCC2308iFbdUJJ3BjKmXjyg5kNt0b8YHxCXyHbia9OuqlTbZnEG7Kun6ifQPHa5oC226GcRmpUfLm~w5-JAg~msMjMSoo7yZU3CMedBof3DD83VHLnF0y0IBYxMR-CmoZrheMepLvJroFiMYQ8wrK0LCFH9cyTsacdA5P8iOaHOKqS-oP75z2QxUpuqTL4ijV0uM6l25ohE4NHf~GLt8bsaiKIRSsJsj7S0QcGyUulZl1TbwG149Kj7IrOJRiDftAlrH1va7zcd8D51s599jA__",
    likes: 0,
    isSaved: true,
    isLiked:true,
    comments: 0,
    image: "https://s3-alpha-sig.figma.com/img/7a8f/06b9/4893b8e26190e386534df1995857a42a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gt1KWepNRxkKxwr1EGWeMvH3cEQwJh47rbjPm56au1u82DOYn3vyu4uJ2GwUIEpMZmpaQyCFZ1pgM71YTBloUCWBfjLOH0MGSDuhd69ZOSbJywFEOhc3M2V2lUgJKN6-NwUsi6Hpyj9xXMVYsLp-XOZIl4wfZM~5aej-iHB30AMdEQfw-hVId~JrJklGELKv-lEZdwuKCmJttIQR5qeoGsvaFysl7cEY0S3-vMiblgIEvqZ4R0VANhVFfQ~70GOCcoOzRid8HnETGSW8KG9y3ozQb66ZMHQuJ6cA~iLWYqGIqeyIqnkxctqAfnajlTbUjO2k0aLJlK80N9RFtjAXqw__"
  }
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
      {/* Header Section */}
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

      {/* Event Image */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src={event.image} alt={event.title} className="w-full h-auto object-cover" />
      </div>

      {/* Engagement Section */}
      <div className="flex justify-between items-center mt-3 text-gray-300 bg-black/40 rounded-lg p-2">
        <div className="flex space-x-4">
          <button className="flex items-center text-xs sm:text-sm"><FaComment className="mr-1 w-5 h-5" /> {event.comments}</button>
          <button onClick={toggleLike} className="focus:outline-none flex items-center text-xs sm:text-sm ">
  <FaHeart
    className={`mr-1 w-5 h-5 transition-all ${
      isLiked ? "text-white" : "text-[#a01426] "
    }`}
  />{event.comments}</button>
        </div>
        <div className="flex space-x-2">
          <FaShare className="cursor-pointer text-xs sm:text-sm w-5 h-5" />
          
          {/* Bookmark Button */}
          <button onClick={toggleSave} className="focus:outline-none">
            <FaBookmark
              className={`w-5 h-5 transition-all ${
                isSaved ? "text-white" : "text-[#a01426] "
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const EventPosts = () => {
  return (
    <div className="h-screen max-h-[80vh] overflow-y-auto p-4 space-y-4"  style={{  scrollbarWidth: "none",backgroundColor: "rgba(18, 18, 18, 1)" }}>
      {events.map((event, index) => (
        <EventPost key={index} event={event} />
      ))}
    </div>
  );
};

export default EventPosts;