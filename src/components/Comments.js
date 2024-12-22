import React from "react";

const commentsData = [
  {
    quote: "Exceptional Branding That Elevated Our Identity.",
    description:
      "Their strategic approach completely transformed our brand. We’ve seen a huge increase in recognition and client engagement.",
    name: "Dave Mitchell",
    company: "Lumina",
    image: "https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670648b1bb9c3d3ce9132007_client-01.webp", 
  },
  {
    quote: "Outstanding Website Design, Exceeding Expectations.",
    description:
      "The website they created is stunning, user-friendly, and has boosted our online conversions significantly. Highly recommend!",
    name: "Sara Thompson",
    company: "Horizon",
    image: "https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670648b17f514f97ddf9a4af_client-02.webp",
  },
  {
    quote: "Creative Solutions That Drove Real Results for Our Website.",
    description:
      "Their designs are not only beautiful but effective. Our sales increased by 30% post-launch. Incredible experience!",
    name: "Emil Rogers",
    company: "Pure Green",
    image: "https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670648b14c24dd1bc7c39526_client-03.webp", 
  },{
    quote: "Seamless Collaboration & Support With Exceptional Results.",
    description:
      "Working with them was easy and efficient. They perfectly captured our vision, and the results were outstanding.",
    name: "Michaela Lee",
    company: "Apex Fitness",
    image: "https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670648b159b4495f6a961c31_client-04.webp", 
  },
  {
    quote: "Strategic Branding & Identity With Immediate Impact.",
    description:
      "Our new branding resonated with our audience immediately. We’ve received so many compliments and new business inquiries.",
    name: "Amanda Lopez",
    company: "Urban Interiors",
    image: "https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670648b10d6a73ece9899663_client-05.webp", 
  },
  {
    quote: "UX Design That Transformed Our User Experience.",
    description:
      "Their UX design made our platform more intuitive and enjoyable to use. Customer satisfaction has dramatically improved.",
    name: "Jason Carter",
    company: "Quantum",
    image: "https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/670648b106ef62dc8f6b0599_client-06.webp", 
  },
];

const Comments = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-gray-50 p-16">
      {commentsData.map((comment, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-12 flex flex-col items-start"
        >
          <div className="text-4xl text-black font-bold mb-4">❝</div>
          <h2 className="text-lg font-semibold">{comment.quote}</h2>
          <p className="text-gray-500 mt-4">{comment.description}</p>
          <div className="flex items-center mt-6">
            <img
              src={comment.image}
              alt={comment.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{comment.name}</p>
              <p className="text-gray-400 italic">{comment.company}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
