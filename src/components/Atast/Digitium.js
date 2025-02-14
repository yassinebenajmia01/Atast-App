import React from "react";

const Digitium = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg max-w-lg mx-auto shadow-lg">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600">DIGITIUM</h1>
        <p className="text-sm mt-2">ARE YOU READY?</p>
        <p className="text-sm">MARCH 9, 2024</p>
        <p className="text-sm">Amphi 1 ISTCOM</p>
      </div>
      <div className="mt-6 flex items-center justify-between bg-gray-900 p-3 rounded-md">
        <span className="text-lg font-bold">9</span>
        <span className="text-red-600 font-semibold">DIGITIUM</span>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md font-bold">Register</button>
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
        <ul className="list-disc list-inside mt-2">
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