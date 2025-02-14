import React, { useState } from 'react';
import { FaComment, FaHeart, FaShare, FaBookmark } from 'react-icons/fa';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import Footer2 from './Footer2';




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
            headImg: "https://s3-alpha-sig.figma.com/img/11d8/cb1b/206cc6a5919229cb6210826a4ea6e574?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lHgi81BODlpm5aDmM2uDWAXTjH7bu0WiFxoai-6rIQJqezhHvebceQt-O222gfC6jSCC2308iFbdUJJ3BjKmXjyg5kNt0b8YHxCXyHbia9OuqlTbZnEG7Kun6ifQPHa5oC226GcRmpUfLm~w5-JAg~msMjMSoo7yZU3CMedBof3DD83VHLnF0y0IBYxMR-CmoZrheMepLvJroFiMYQ8wrK0LCFH9cyTsacdA5P8iOaHOKqS-oP75z2QxUpuqTL4ijV0uM6l25ohE4NHf~GLt8bsaiKIRSsJsj7S0QcGyUulZl1TbwG149Kj7IrOJRiDftAlrH1va7zcd8D51s599jA__",
            image: "https://s3-alpha-sig.figma.com/img/7a8f/06b9/4893b8e26190e386534df1995857a42a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gt1KWepNRxkKxwr1EGWeMvH3cEQwJh47rbjPm56au1u82DOYn3vyu4uJ2GwUIEpMZmpaQyCFZ1pgM71YTBloUCWBfjLOH0MGSDuhd69ZOSbJywFEOhc3M2V2lUgJKN6-NwUsi6Hpyj9xXMVYsLp-XOZIl4wfZM~5aej-iHB30AMdEQfw-hVId~JrJklGELKv-lEZdwuKCmJttIQR5qeoGsvaFysl7cEY0S3-vMiblgIEvqZ4R0VANhVFfQ~70GOCcoOzRid8HnETGSW8KG9y3ozQb66ZMHQuJ6cA~iLWYqGIqeyIqnkxctqAfnajlTbUjO2k0aLJlK80N9RFtjAXqw__"
          },
          {
            id: 2,
            club: "ATAST_ISITCOM",
            handle: "@Comunity_Manager",
            headImg: "https://s3-alpha-sig.figma.com/img/11d8/cb1b/206cc6a5919229cb6210826a4ea6e574?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lHgi81BODlpm5aDmM2uDWAXTjH7bu0WiFxoai-6rIQJqezhHvebceQt-O222gfC6jSCC2308iFbdUJJ3BjKmXjyg5kNt0b8YHxCXyHbia9OuqlTbZnEG7Kun6ifQPHa5oC226GcRmpUfLm~w5-JAg~msMjMSoo7yZU3CMedBof3DD83VHLnF0y0IBYxMR-CmoZrheMepLvJroFiMYQ8wrK0LCFH9cyTsacdA5P8iOaHOKqS-oP75z2QxUpuqTL4ijV0uM6l25ohE4NHf~GLt8bsaiKIRSsJsj7S0QcGyUulZl1TbwG149Kj7IrOJRiDftAlrH1va7zcd8D51s599jA__",
            likes: 0,
            isSaved: true,
            isLiked:false,
            comments: 0,
            image: "https://s3-alpha-sig.figma.com/img/e8a5/8b46/c0e9f34f3f349034f034db73810012b3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R9DKYfxMioXlFyBQ7qrNx8hrADN1Gg4lmOloocZKac~CIIRFTqh~~hCnOjlVPcMleodstAzri9PBp83NDhsDWyPZD8NQ2ZqSbppeRWCpV1aZct1qiiF2yNxRRGmnLl-SLt9eXcVSWybI7T4ZVRbhDOTKGxYQWWmkByuZdt34GAE273WTuFgVp~X1jdraoWs0-5GdnS8uBeSL3qX2icwt3qRx7H55Nipv9cfG5NRO7FVmySR3zsjtprI3athArxvlJ28-mL0z0jtQT9z8IQ5BJTzIMZ15uB9TioyFMHIDxrkgNZbFPE8dNEDx59VLtQT1zQb~x0sVrR0luS5LltRIzw__"
          },
        
      ];
  const additionalImage = "https://s3-alpha-sig.figma.com/img/d33c/bafb/4494aca8676c39c7bdf8ac8005a9148c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PMXkhgGR9Yvur2cXVxJzOm3fDbnA-9P2kIg7q1idX20b35uYQ0JF5qP0boPCxyz-I4vnfIIeAZRzh8LOPXCWN1icGMZ9faPh~LUmgAofvxaJslEBuUQZpcu0CyzbQP~UHDLjzg1~L7U7qyYvlUey2wobPRFE16bg9tc2lUIxRTtlQ~wcYl6lkiMWh~ZrelzbL0XuVKI8UxZQAxyqRTq1qHf4QF0J3sFGIhAoIU8IayfrZXiJigaobAEzE681XqUUhWY7FyZJTco1BrkCSzfUUKkSeEJKDP0lErECyqtrKW2oEuX0TuDa8xM6i4TFat6BCFmaau-h0SynIFOR9zToWQ__";
    const additionaHeadlImage ="https://s3-alpha-sig.figma.com/img/11d8/cb1b/206cc6a5919229cb6210826a4ea6e574?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lHgi81BODlpm5aDmM2uDWAXTjH7bu0WiFxoai-6rIQJqezhHvebceQt-O222gfC6jSCC2308iFbdUJJ3BjKmXjyg5kNt0b8YHxCXyHbia9OuqlTbZnEG7Kun6ifQPHa5oC226GcRmpUfLm~w5-JAg~msMjMSoo7yZU3CMedBof3DD83VHLnF0y0IBYxMR-CmoZrheMepLvJroFiMYQ8wrK0LCFH9cyTsacdA5P8iOaHOKqS-oP75z2QxUpuqTL4ijV0uM6l25ohE4NHf~GLt8bsaiKIRSsJsj7S0QcGyUulZl1TbwG149Kj7IrOJRiDftAlrH1va7zcd8D51s599jA__";
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
