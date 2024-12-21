import React from 'react';
import Navbar from './components/Navbar';
import Project from './components/projects';
import Model from './components/model';
import Services from './components/services';
import BrandStrategy from './components/BrandStrategy';
import WebsiteDesign from './components/WebsiteDesign';



function App() {
  return (
    <>
    <Navbar/>
    <Project/>
    <Model/>
    <Services/>
    <BrandStrategy/>
    <WebsiteDesign/>
    </>
  );
}

export default App;
