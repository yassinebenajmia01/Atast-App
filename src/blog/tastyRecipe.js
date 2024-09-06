import React from 'react';

function TastyRecipe() {
  const recipes = [
    {
      id: 1,
      title: "Crochet Projects for Noodle Lovers",
      author: "Wade Warren",
      authorImage: "https://media.licdn.com/dms/image/v2/C5603AQHXFstHgf89ig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1560973147862?e=2147483647&v=beta&t=6F8nBvEhXmhlLsiMszo98fkITA-8fKBR9o1wF2yEj_g",
      date: "12 November 2021",
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDeHDgAjeqhf5ZXUIhNthbu0dJ7CQ31IVzhH3C2PLeVkcP0hE1",
    },
    {
      id: 2,
      title: "10 Vegetarian Recipes To Eat This Month",
      author: "Robert Fox",
      authorImage: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/zPHpQFGu2OcP2NdDUijZ4PAGQOT.jpg",
      date: "12 November 2021",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5QHsoyymPsYu6BFA5OHwHD7QBlf6CCSbvPBtFppnfNov9b2a8",
    },
    {
      id: 3,
      title: "Full Guide to Becoming a Professional Chef",
      author: "Dianne Russell",
      authorImage: "https://mzn.om/wp-content/uploads/2022/03/20.jpg",
      date: "12 November 2021",
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQTamssvSJXobt8PIj-w4a2GwEHAvazJIS0l0xzwU3E9_Kzt4V_",
    },
    {
      id: 4,
      title: "Simple & Delicious Vegetarian Lasagna",
      author: "Leslie Alexander",
      authorImage: "https://img1.wsimg.com/isteam/ip/7efd24e6-bc03-4133-92f6-0ef5bd07478e/080162alexander_l4455.jpg/:/cr=t:4.07%25,l:9.68%25,w:80.65%25,h:80.65%25/rs=w:667,h:1000,cg:true,m",
      date: "12 November 2021",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTV3vbUMTMFYdqHoGCsRJNtsmlPfMOAgeq-4eF-mAPaZWtu60on",
    },
    {
      id: 5,
      title: "Plantain and Pinto Stew with Aji Verde",
      author: "Courtney Henry",
      authorImage: "https://images.squarespace-cdn.com/content/v1/61d4f0df3ee39438fd7f81f7/eb3aae34-ddc3-438d-8521-bc7ab080e758/IMG_2542.JPG?format=1000w",
      date: "12 November 2021",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ78xeTGPYiWlQBNShYH_OhtCxwOwteQGHz6ekWoBrP7mrrqw0e",
    },
    {
      id: 6,
      title: "We're Hiring a Communications Assistant!",
      author: "Albert Flores",
      authorImage: "https://media.licdn.com/dms/image/v2/C4E03AQH9J1CnCl9GoA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1581696904180?e=2147483647&v=beta&t=DL5rzPfyO6FjG9zQ6y2yF-XKZg6lzBnCPJ-yroP8wbs", 
      date: "12 November 2021",
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSncvt2VtH-Y1kt6j7GW-mILH8s-xqbS23P2ACWfxMV5-PryT-c",
    },
  ];

  const tastyRecipes = [
    {
      id: 1,
      title: "Chicken Meatballs with Cream Cheese",
      author: "Andreas Paula",
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbnM-WivqpXDsWisFKHq8cRJq3l-jLetV292-nHhXaTzJ96M2m", 
    },
    {
      id: 2,
      title: "Traditional Bolognese Ragu",
      author: "Andreas Paula",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEgCUqFlVkpMukuDLqpGwoTIqxgXvTiMucwMYS62AXyf1Y2WkS", 
    },
    {
      id: 3,
      title: "Pork and Chive Chinese Dumplings",
      author: "Andreas Paula",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/568e8fe6b204d5cbecd5c77e/2bbc5be3-21bd-4bdc-a07a-8f5d8b8dbc2b/Pork+Chive+Dumplings-139.jpg?format=1500w",
    },
  ];

  return (
    <div className="container mx-auto">
    <div className="grid grid-cols-12 gap-4">
      {/* Left Section: Blog Posts */}
      <div className="col-span-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="flex items-start mb-8">
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className="w-64 h-64 rounded-lg object-cover mr-4"
            />
            <div>
              <h2 className="text-2xl font-semibold">{recipe.title}</h2>
              <p className='text-lg text-gray-400 mt-3'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
              {/* Align author, image, and date */}
              <div className="flex items-center justify-between mt-24">
                <div className="flex items-center">
                  <img
                    src={recipe.authorImage}
                    alt={recipe.author}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <p className="text-black font-bold text-lg">{recipe.author}</p>
                </div>
                <p className="text-gray-400 text-lg mr-64">{recipe.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      {/* Right Section: Tasty Recipes and Ad */}
      <div className="col-span-4">
        {/* Tasty Recipes */}
        <div className="mb-8">
          <h3 className="text-4xl font-bold mb-4">Tasty Recipes</h3>
          {tastyRecipes.map((recipe) => (
            <div key={recipe.id} className="flex items-start mb-4">
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-36 h-28 rounded-lg object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-xl">{recipe.title}</h4>
                <p className="text-gray-500 text-base mt-8">By {recipe.author}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Ad Section */}
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZXY08NVysNGQSe5wZAmG68UHBX4zDPUQCHUfdX3Qip-mOkIXa"
            alt="Ad"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  
    {/* Pagination */}
    <div className="flex justify-center mt-8">
      <ul className="inline-flex items-center">
        <li>
          <button className="px-3 py-2 border border-gray-300 hover hover:bg-black hover:text-white rounded-lg mx-1">1</button>
        </li>
        <li>
          <button className="px-3 py-2 border border-gray-300 hover hover:bg-black hover:text-white rounded-lg mx-1">2</button>
        </li>
        <li>
          <button className="px-3 py-2 border border-gray-300 hover hover:bg-black hover:text-white rounded-lg mx-1">3</button>
        </li>
        <li>
          <button className="px-3 py-2 border border-gray-300 hover hover:bg-black hover:text-white rounded-lg mx-1">4</button>
        </li>
        <li>
          <button className="px-3 py-2 border border-gray-300 hover hover:bg-black hover:text-white rounded-lg mx-1">5</button>
        </li>
        <li>
          <button className="px-3 py-2 border border-gray-300 hover hover:bg-black hover:text-white rounded-lg mx-1">...</button>
        </li>
      </ul>
    </div>
  </div>
  
  );
}

export default TastyRecipe;
