import React from 'react';

function BlogAndArticle() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-6xl font-bold text-black absolute top-[35%]">Blog & Article</h1>
      <p className="text-gray-600 text-center mb-8 max-w-lg text-nowrap absolute top-[47%] mr-60 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      </p>
      <div className="flex items-center w-full max-w-2xl absolute">
        <input
          type="text"
          placeholder="Search article, news or recipe..."
          className="flex-grow py-6 px-9 rounded-2xl border border-gray-300 focus:outline-none focus:border-gray-400 text-gray-700"
        />
        <button className="ml-4 bg-black text-white py-5 px-16 rounded-2xl hover:bg-gray-800 transition-colors absolute right-2">
          Search
        </button>
      </div>
    </div>
  );
}

export default BlogAndArticle;
