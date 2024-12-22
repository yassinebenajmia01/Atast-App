import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-300">
      <div className="container mx-auto px-6 md:px-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-[18rem] font-black">KAYO<span className="text-[18rem] font-black">©</span></h1>
          </div>
        </div>

        {/* Additional Sections under Logo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mt-8">
          {/* Pages Section */}
          <div>
            <h3 className="text-2xl italic text-gray-500">(Pages)</h3>
            <ul className="mt-4 space-y-6 text-xl font-semibold">
              <li>Home</li>
              <li>Service</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <button className="mt-7 px-4 py-2 bg-gray-950 text-white rounded-full text-2xl font-semibold">
              More Templates
            </button>
          </div>

          {/* CMS Section */}
          <div>
            <h3 className="text-2xl italic text-gray-500">(CMS)</h3>
            <ul className="mt-4 space-y-6 text-xl font-semibold">
              <li>Work</li>
              <li>Work Single</li>
              <li>Blog</li>
              <li>Blog Single</li>
              <li>Pricing</li>
              <li>Cart (0)</li>
            </ul>
          </div>

          {/* Utility Pages Section */}
          <div>
            <h3 className="text-2xl italic text-gray-500">(Utility Pages)</h3>
            <ul className="mt-4 space-y-6 text-xl font-semibold">
              <li>404</li>
              <li>Password Page</li>
              <li>Changelog</li>
              <li>Licensing</li>
              <li>Styleguide</li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h3 className="text-2xl italic text-gray-500">(Socials)</h3>
            <ul className="mt-4 space-y-6 text-xl font-semibold">
              <li>Instagram</li>
              <li>Behance</li>
              <li>Dribbble</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 text-center text-xl text-gray-950 font-semibold">
          Made by<a className="underline" href="#">  Gola Templates</a> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;