import React from "react";

const FeedBack = () => {
  return (
    <div className=" bg-gray-50 flex flex-col items-start justify-center px-16">
      {/* Selected Work and 01 in the same line, 01 on the right ******/}
      <div className="flex items-center justify-between w-full">
        <p className="text-gray-500 italic text-2xl mt-36">(Testimonials)</p>
        <p className="text-gray-500 italic text-2xl mt-36">(03)</p>
      </div>

      {/* Title */}
      <h1 className="text-black text-[18rem] font-extrabold leading-none mt-64">
      What Our
      Clients Say
      </h1>

      {/* Description */}
      <p className="text-black text-7xl font-bold mt-24">
      Hear our clients about their success</p>
        <p  className="text-black text-7xl font-bold"> stories and experiences with us.</p> 
        
      
    </div>
  );
};

export default FeedBack;
