// App.js
import React, { useState, useEffect, useContext } from 'react';
import Navbar from './components/Navbar';
import Project from './components/projects';
import Model from './components/model';
import Services from './components/services';
import BrandStrategy from './components/BrandStrategy';
import WebsiteDesign from './components/WebsiteDesign';
import UiDesign from './components/UiDesign';
import FeedBack from './components/FeedBack';
import Comments from './components/Comments';
import Footer from './components/Footer';
import { ThemeProvider, ThemeContext } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

const Main = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [showToggle, setShowToggle] = useState(false);

  // Handle scroll to show/hide toggle button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowToggle(true);
      } else {
        setShowToggle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle */}
      {showToggle && (
        <button
          onClick={toggleTheme}
          className="fixed bottom-5 left-5 bg-gray-800 dark:bg-gray-200 w-14 h-8 flex items-center rounded-full p-1 cursor-pointer shadow-md"
        >
          <div
            className={`bg-white dark:bg-black w-6 h-6 rounded-full transform duration-300 ${
              isDarkMode ? 'translate-x-6' : ''
            }`}
          ></div>
        </button>
      )}

      {/* Page Content */}
      <Navbar />
      <Project />
      <Model />
      <Services />
      <BrandStrategy />
      <WebsiteDesign />
      <UiDesign />
      <FeedBack />
      <Comments />
      <Footer />
    </div>
  );
};

export default App;