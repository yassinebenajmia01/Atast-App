import React from 'react';

function Contactus() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-16">
      <h1 className="text-6xl ml-96 font-bold mb-8 text-center">Contact us</h1>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Chef Image */}
        <div className="w-full md:w-1/2 mr-32">
          <img 
            className="w-full h-auto object-cover rounded-lg"
            src="https://m.media-amazon.com/images/I/61L7VNDNBYL._AC_SX679_.jpg"
            alt="Chef giving thumbs up"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">NAME</label>
              <input 
                type="text" 
                placeholder="Enter your name..."
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 ml-32">EMAIL</label>
              <input 
                type="email" 
                placeholder="Your email address..."
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-32"
              />
            </div>
          </div>

          {/* Subject and Enquiry Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">SUBJECT</label>
              <input 
                type="text" 
                placeholder="Enter subject..."
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 ml-32 text-nowrap ">ENQUIRY TYPE</label>
              <select className="p-3 px-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-32">
                <option>Advertising</option>
                <option>Partnership</option>
                <option>Support</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-600 mb-2">MESSAGES</label>
            <textarea 
              rows="5" 
              placeholder="Enter your message..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 "
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
