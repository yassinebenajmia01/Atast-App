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
          headImg: 'https://s3-alpha-sig.figma.com/img/a905/4850/93db31770e856822d73edafbec9658bd?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oIhEjtBycM~Czxkmzsx3PkKZYVWRaoaAPV0s3bACydkLz5Lk1NgD1yBmvwnJZmRmNRuhkWvDLNb8HB~9y5PFkcEcKLwSFl2HcK0r4QXTLqE4EWJ1q2eN3Vf2FuKRNPjJ5lDMoRV2cREN7DO3CjIvEQNPlD-x4AVrJDEGPz~XB06IrJG9lb4l4DkMsbalvUSB7xQc-9-o8PRJso4YvRuCtM3mlBO~nRwA46YVjRZXDFDykKuRvIy4JoDpxek609QFd4f4Wl2u0C1c9N3zV7G3-yuRPo7XOrjgG59yBgCJGp6jrrP-n6n~34NzBuFgnRyWo2J~dL-uwDWa0KTUGh02Tg__',
          club: 'ATAST Student Section',
          handle: '@Comunity_Manager',
          image: 'https://s3-alpha-sig.figma.com/img/b19a/26f2/b375b873ef3b03830a2323f5266327ee?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LwZMigYxVWP5HSrK3SVL1wp5zdaO7QrN5RY0a5yOUqG2fp~FhCCK11IZnKPaQTfSKb~QyXjfKR6qKbv3o4dfyGw4czzSV3wbCJ8FDQi34mCNiDPgGsd0Zz50HfEu1-2mPYMHX1Uj5kB40Hnaz2v3d92sqILAGFtU-5kCdJbUgr8V9Uge20GnuVnHFSabV0TU~txVEFcZofyC97KyVZgMSnbUQhCFGaNOA~p7t3d72Nm9b3-zU-pFdXc90PWf8zYdrVSPU0sXZHB24dcGVUaIXobgJp7be6X0YFCeme3e27sX24fhpu7VR5VgI0VE6nA8laqkDI41ZGQ44bkMp6Jfpw__',
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
            headImg: "https://s3-alpha-sig.figma.com/img/bc8e/c02b/7cf67a7c672823c4d37c8bbf7ec80d0c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fEOdhXCTtQQRkVaRyTNr8HUrIhVLqEttuM9-FBRLT-3JxsIlKXEKSC0pUnMN3LNsUhmSTUNU5L9F~uHwsjrLDenci4~VMXFP88AWuVaHm2TgIUUlXCKm6FDIhCgdvC3AK~594eScL5T56WSFrKqZMSxgK5p2p4h0N4nyEdboUzLu4YOekkcQW30X8Bd~zRxJCHZegwMbkXtP9hjl3zBqkF-uzkmWmkaBMp6kG6vTQ6I26RdbrhMNDYre7kf4sPbpdbsVad2m43TwydZDXGjv~gTvPlFdF9T8c9LH0U6OIf9by~uUJgGH6TkrMzb~zhhnnqDPA8eacna1DCVphr52yw__",
            likes: 0,
            isSaved: true,
            isLiked:false,
            comments: 0,
            image: "https://s3-alpha-sig.figma.com/img/b19a/26f2/b375b873ef3b03830a2323f5266327ee?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LwZMigYxVWP5HSrK3SVL1wp5zdaO7QrN5RY0a5yOUqG2fp~FhCCK11IZnKPaQTfSKb~QyXjfKR6qKbv3o4dfyGw4czzSV3wbCJ8FDQi34mCNiDPgGsd0Zz50HfEu1-2mPYMHX1Uj5kB40Hnaz2v3d92sqILAGFtU-5kCdJbUgr8V9Uge20GnuVnHFSabV0TU~txVEFcZofyC97KyVZgMSnbUQhCFGaNOA~p7t3d72Nm9b3-zU-pFdXc90PWf8zYdrVSPU0sXZHB24dcGVUaIXobgJp7be6X0YFCeme3e27sX24fhpu7VR5VgI0VE6nA8laqkDI41ZGQ44bkMp6Jfpw__"
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
            headImg: "https://s3-alpha-sig.figma.com/img/b19a/26f2/b375b873ef3b03830a2323f5266327ee?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LwZMigYxVWP5HSrK3SVL1wp5zdaO7QrN5RY0a5yOUqG2fp~FhCCK11IZnKPaQTfSKb~QyXjfKR6qKbv3o4dfyGw4czzSV3wbCJ8FDQi34mCNiDPgGsd0Zz50HfEu1-2mPYMHX1Uj5kB40Hnaz2v3d92sqILAGFtU-5kCdJbUgr8V9Uge20GnuVnHFSabV0TU~txVEFcZofyC97KyVZgMSnbUQhCFGaNOA~p7t3d72Nm9b3-zU-pFdXc90PWf8zYdrVSPU0sXZHB24dcGVUaIXobgJp7be6X0YFCeme3e27sX24fhpu7VR5VgI0VE6nA8laqkDI41ZGQ44bkMp6Jfpw__",
            likes: 0,
            isSaved: true,
            isLiked:true,
            comments: 0,
            image: "https://s3-alpha-sig.figma.com/img/b19a/26f2/b375b873ef3b03830a2323f5266327ee?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LwZMigYxVWP5HSrK3SVL1wp5zdaO7QrN5RY0a5yOUqG2fp~FhCCK11IZnKPaQTfSKb~QyXjfKR6qKbv3o4dfyGw4czzSV3wbCJ8FDQi34mCNiDPgGsd0Zz50HfEu1-2mPYMHX1Uj5kB40Hnaz2v3d92sqILAGFtU-5kCdJbUgr8V9Uge20GnuVnHFSabV0TU~txVEFcZofyC97KyVZgMSnbUQhCFGaNOA~p7t3d72Nm9b3-zU-pFdXc90PWf8zYdrVSPU0sXZHB24dcGVUaIXobgJp7be6X0YFCeme3e27sX24fhpu7VR5VgI0VE6nA8laqkDI41ZGQ44bkMp6Jfpw__"
          }
      ];
  const additionalImage = "https://s3-alpha-sig.figma.com/img/509f/d949/6e5a135ffee5d6a37535c55bacb45bd9?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s-PJecnhVNOsWBBqQuJ7v-BCLC7-q~zGWJMLuBTZ1n3sKB8rYvhivuI9Ktgr~D6Prd6XfY2A5sFt-Fb7DHcIOsILBD2Xz7YwQTQH90v1zj3lwvc2nUKs5DN52BzCgaQpzGmqGJrpE5BSCnsD3QiWA2w0ZeRfoUDFdZj~1~g6KSjGmnyt83fAIzZAcVbdedWwoiG7KQBKHbYBXRA1yfpcLWX8cfnO7AUIufxA4KLdkGyKz-YWE8pphgCuJL2gh-7hSXVZk8uxwRHvxlf78nV1gR3VJhVaQrTR~O16ixtiabemdEMvQn1GbDNH76yTVWAi3FSVCrgWF6ELE8abrbDiew__";
    const additionaHeadlImage ="https://s3-alpha-sig.figma.com/img/f1f4/958e/07865f43808cf32f57e55b8d881634e2?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=maOqlMivKVFD8cs-Kpy5uF6Exemv1BuUYWy48UVRxacUZmtVZ2EtwkSr9D1CxIRHHcNE9PZ~jnpLcs3PLudWO49YX7Hjh2d6mchgBoSwekYJ0jK4TTA8J0n5IW3V3o3ZgTawxxdmGX22Yrowd-v7JPu9RnZjGI3SUncl09DlFY5H2hlJrO3uDA-aXRYnYlhEZZenwdIbOK05jFp-At9L2GzLyKXE2vM1XPZbi3q~cTJ-ODyKg1Q7T4ZdX-9U8MgHkMOJGoFezdcS1VKIO6krtbNtY8xbFIlhfhz8wy4oQoKNKqKcSpwSW6jJh8~KVip1o4qchxi5JXUl7Mi0NDGoHA__";
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

<div className="mt-2  px-4 ml-[30%]">
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
