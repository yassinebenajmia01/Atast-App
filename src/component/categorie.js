import React from 'react';

function Categorie() {
  const categories = [
    { name: 'Breakfast', imgSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHdS9la5IsYAYx96EyAfDQsc1qxKSE7tJZffXJ7pJWmq4Vd3Xc' },
    { name: 'Vegan', imgSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyc8XMr80ZiYcD9rwTM0BEJdIYibPGuqdQZ-1nuzJXRjbn5foG' },
    { name: 'Meat', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqkUm7GTdyXxG5Uvp2qIdD3IpCSRd-2LJAXfE9nl7qKnezbeV' },
    { name: 'Dessert', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGvbPvHAmrUlF-8zkZwQ3Nqe4B3i2Ou232Y5DqBmaFKvZ8zdK' },
    { name: 'Lunch', imgSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSHVeBTKrM1P0lShCsXrcQw43yfTxpF2DrNzgoFw9i0lBAA3_sr' },
    { name: 'Chocolate', imgSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpJb7tKRnqedf-xkRFAy7PtacH0Se31Sbq1fO00fRCI6lCVCK7' },
  ];

  return (
    <div className="flex flex-col items-center mt-60 ">
      <h1 className="text-5xl font-bold mb-5 mr-[80%] absolute top-[150%]">Categories</h1>
      <button className="absolute top-[150%] ml-[80%] px-4 py-4 bg-blue-100 text-black rounded-xl text-xl font-bold">
        View All Categories
      </button>
      <div className="flex justify-center space-x-32 mt-7 ">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center  p-4 "
          >
            <img
              src={category.imgSrc}
              alt={category.name}
              className="w-28 h-28 mb-5 "
            />
            <p className="text-center font-bold text-lg">{category.name}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Categorie;
