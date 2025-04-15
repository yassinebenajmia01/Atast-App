import React, { useState } from 'react';
import { FaComment, FaHeart, FaShare, FaBookmark } from 'react-icons/fa';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';




const EventPost = ({ event }) => {
  const [isSaved, setIsSaved] = useState(event.isSaved);
  const [isLiked, setIsLiked] = useState(event.isLiked);

  const toggleSave = () => setIsSaved(!isSaved);
  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <div className="bg-[#DCDCDC] rounded-xl p-4 mb-4 shadow-lg text-white w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
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

const Atast = () => {
    const events = [
        {
          headImg: 'https://s3-alpha-sig.figma.com/img/a905/4850/93db31770e856822d73edafbec9658bd?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MotZxpyIshfW4jezsqz0HlMd8g99Kz61fIcGqv3~uy13nydjWu-7IuwIg9aTIvlbRAgwHg-Yk9OnOWlzY~t4ILjurnYBP7B3vJRfAej4Q~5zt29ogVDZsunEeWdstpTgWVpJhvF3s8p9Ki9PFi6BIKLSVTCys~y68J9eGB9AB05lRoY-FUEs69nxWm0rppmfTYG4HK9I2zJ8x0uxzYf4XHmunsFZFzH49hxreB-JWfWnitYqZEtHA~ScSQEtgumTfwRV9IkUOQuiUUe~JqSbTi5I0Sq0LPcPe7CDj042rseASm7xaJyh4F8HB8KQ2g2E4DhJAUIALQcxilW6xpnrkg__',
          club: 'ATAST Student Section',
          handle: '@Comunity_Manager',
          image: 'https://s3-alpha-sig.figma.com/img/b19a/26f2/b375b873ef3b03830a2323f5266327ee?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qD6tSrEn1boxCUNoF1xVPwgyUtGP7vDfdhmpXxg7YDEaytOQ6BfKwljH9TBAa34Es71VmljsAEvTrhmt5EOftiiNywQ9bjeujLAa8gJQ1e9~KBRwe-kFxFuNMj972kgJxqnMkeNpkoP3ayjwaQ2FvBYQ2nHz4~utyOxCxo9FNmaZ3ja1MWHO5MbElrzSokdT2U0NrqJvj9n6HlD1W0Md1~CrA1PQRm6sA4bIQyhLgY25~vv6D1mkfrlxqBmLPrb6I844aGJt3KiJCyo07RNlm~BkFXiWsNwX7s9XrHPKXI8QFCySY974e4F5MIxsLUVNH5uLCQwmdov6F426Uu1HEA__',
          date: '20.03.23',
          title: 'Student Section Summit by ATAST',
          comments: 44,
          likes: 420,
          isSaved: false,
          isLiked: false,
        },
        {
            id: 2,
            club: "ATAST_FMS",
            handle: "@Comunity_Manager",
            headImg: "https://s3-alpha-sig.figma.com/img/5db9/55f2/74677ec53a18179039b780b12df46c61?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lthx7gIPVY0OcALf~SHd5Nrr9c8E09rInpj6SNtXgpKATQEKs~mzi4Oel-Rmu-F-oS3b2zYN9FFVFccZlmoYLjG39QVTOiOtbk4s07rvph901vHCsmU7qdMNgavKJoVfmsK6lKp9f7zzwzTv8BtyCZC7LfEUiYMC-5fCLk3KHY4ALwSBlYb4xShqxg-ps3n1Aa0eugmuj8BeICLgh8uWPvyL1FHJbIZVcPYcxp5MCv1EC18eKUe8E-XWhr1CVhrr3yDfrlHfaXoS6dpjUpB6dAtKrmMsDJpVOcgfEXw0THV0rJ7hEV-8~Y1IEQTTcBfO7ZsZxFP8eqinNrB9FxcK0A__",
            likes: 0,
            isSaved: true,
            isLiked:false,
            comments: 0,
            image: "https://s3-alpha-sig.figma.com/img/7a8f/06b9/4893b8e26190e386534df1995857a42a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a5yd1SVu4NBrnjxUV5wPfik47b8Lnn5KdM9ALf5mZc6MBOyJAlsU0S9UmEBDVhtFh~~SWir8SyJ4H02S1BixgRyNpuCT4JdJvn21s~rjVomEsiHXOifY2Et5NAv~ow5bpZYCVFkxl7t7XZQNGZWwh6p6P-xlevg~wIcLHrvMxnqCgMEbW4N-nZZb-Ge1uVTNvJsnVQj-G0xU1~NkzPAawU0gzKzKZ9T4ZM27-rDo6V7LUP8Vf2-zB7lKLwBFnwwnYnAKKRtJIr98aOHD93x7m3fYFE47vfco2nJdoWnNxCgAmWu~~bZuG7qn~nF4R6f8tjyWUoh3Dg39huUgwe6TLQ__"
          },
          {
            id: 3,
            club: "ATAST_EPI",
            handle: "@Comunity_Manager",
            isSaved: false, 
            headImg: "https://s3-alpha-sig.figma.com/img/5fe1/05b9/765579524abe9a02dfafbcd45e3614b1?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ahqLNjuYZSwLX1fACwn1OdAJYb8qewcYaPzb~XvJ~adLYOOexfJqfSCaOs-1G9cM3RrESqo0NpfAPzcegvX7tYwliTpWW7xufyIjagj6YdGpCimAjJ-1nGca2VxEboHyDoEYGue4yTNDba-sQxN90Nl1ZaY4srU8xpmjZMA2yFARCC18wUliV900zPaWARUqJV3LdipmLUYivA4590zloK42860ZmHwmTc0v9zep3y5HtY~JlEeDgZh2f65U3RZpBnbeibcmtcYtmxAHWC81RQO2sM8uFzXtEHt6gVNrc6p3yhPc3xlstV1WGf~G4LhrAL9A-QZe6cCy3EIlQPaIoQ__",
            likes: 0,
            comments: 0,
            isLiked:true,
            image: "https://s3-alpha-sig.figma.com/img/6fab/4f21/8c7dabb60fa363f0a2bf7ed19737fafc?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rD9yneTFFusIHglKCdU4GcHwQhzAOag~UsH-JAjDx1UsAUjG0Am-TRUbmUEGurV3t4lPP3x717dPIJNscMQtzcXIkpR5eSDwV6vBT9p~cWMdtNMjYJcgUwp3cuUcmoCyYvjXxccG2Nw18Sjle3dFyA7UIhKbspnCOrX0YTYLpuVapB4t0y63BFdCczBUyuYLJ2~pbRwvR929x93Y0hworLDRpnGrOVbmv-SlbXcO~3XdRwXOTQWdJZspSGFaYfna1RoJigQuBtG7mRn5UUJO3x5Qw6f7mEEFtpA4tFZZQHU7y5oKR~sm1EobXW18-CAxpH2Ut0gTwwsKZhNunrdoPQ__"
          },
          {
            id: 4,
            club: "ATAST_FMS",
            handle: "@Comunity_Manager",
            headImg: "https://s3-alpha-sig.figma.com/img/5db9/55f2/74677ec53a18179039b780b12df46c61?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lthx7gIPVY0OcALf~SHd5Nrr9c8E09rInpj6SNtXgpKATQEKs~mzi4Oel-Rmu-F-oS3b2zYN9FFVFccZlmoYLjG39QVTOiOtbk4s07rvph901vHCsmU7qdMNgavKJoVfmsK6lKp9f7zzwzTv8BtyCZC7LfEUiYMC-5fCLk3KHY4ALwSBlYb4xShqxg-ps3n1Aa0eugmuj8BeICLgh8uWPvyL1FHJbIZVcPYcxp5MCv1EC18eKUe8E-XWhr1CVhrr3yDfrlHfaXoS6dpjUpB6dAtKrmMsDJpVOcgfEXw0THV0rJ7hEV-8~Y1IEQTTcBfO7ZsZxFP8eqinNrB9FxcK0A__",
            likes: 0,
            isSaved: true,
            isLiked:true,
            comments: 0,
            image: "https://s3-alpha-sig.figma.com/img/e8a5/8b46/c0e9f34f3f349034f034db73810012b3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O2ATjJSdahdh-x2itcK8IInixFql2MynRDct9gDXP6dTRRsC2ddMdUDlu0bXFSTcSo36rTgTnFd~YaVB9By8nyb5zb~XrL2AqrnFRFdTYi8bBN79gkvF2IQSkqRC-WjGhROMTE3XGcuDI3eg9B3DIPqpsZIzP~gOZpe7gvj8Wb5ajo~~DoSUeCt~3wgc-rWTMub1TsVOLZCF~6j0etj-ziRvWwB2d8yALjMO2-xjD3sEoWvh-Fki-kjC637c7rAVpdUKQ1WWRfZJz7Z04EM0dtlvMjnxZVEs8w3Xn6b6zEmx2FjkwLFEiS6Bc4sr9oYkQmF-SNF8qxocT2IB1ih6hw__"
          }
      ];
  const additionalImage = "https://s3-alpha-sig.figma.com/img/509f/d949/6e5a135ffee5d6a37535c55bacb45bd9?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=M7Jn-mU8H~fAFgnTE5jvlPBKKuq-sNBT9rhPLWQnbIQtV6P~FgjuFOWAmhhwgFbrqeCMJUzHW1ONhJZG5WGZhvaX-HcZXoTF2Vl6VMzQt61RiWbHuVuxnOQcFn3vxTTywYIRv66FgaUGajPkD3GBddDLi6NPIC5DPFAAdeHwOYKtzTkTSH4e9GwHJYU~qnMOEIBD1l77pA65MO1ouGzEmnhnmyk7l-Zv5z4KfOI6XaIJj7169gf20gDu6rfOj215cBjl~4xgnFignX8QCA-28drZftIf38LNrmT54NtQ6ypspboD3uCBaxcRXLzqc0-ID9-gnkr18bMNHC1LaHWdmw__";
    const additionaHeadlImage ="https://s3-alpha-sig.figma.com/img/a905/4850/93db31770e856822d73edafbec9658bd?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MotZxpyIshfW4jezsqz0HlMd8g99Kz61fIcGqv3~uy13nydjWu-7IuwIg9aTIvlbRAgwHg-Yk9OnOWlzY~t4ILjurnYBP7B3vJRfAej4Q~5zt29ogVDZsunEeWdstpTgWVpJhvF3s8p9Ki9PFi6BIKLSVTCys~y68J9eGB9AB05lRoY-FUEs69nxWm0rppmfTYG4HK9I2zJ8x0uxzYf4XHmunsFZFzH49hxreB-JWfWnitYqZEtHA~ScSQEtgumTfwRV9IkUOQuiUUe~JqSbTi5I0Sq0LPcPe7CDj042rseASm7xaJyh4F8HB8KQ2g2E4DhJAUIALQcxilW6xpnrkg__";
    const navigate = useNavigate();
  return (
    <>
    <div className="h-screen overflow-y-auto p-4 space-y-4  " style={{ backgroundColor: 'rgba(18, 18, 18, 1)', scrollbarWidth: 'none' }}>
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

<div className="mt-2  px-4 ml-[8%]">
  <h2 className="text-white text-xl font-bold ">Atast Student Section</h2>
  <p className="text-gray-300 text-sm">24 Clubs</p>
</div>

      {events.map((event, index) => (
        <EventPost key={index} event={event} />
      ))}
    </div></>
  );
};

export default Atast;
