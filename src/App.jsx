import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/navbar';
import HotRecipes from './component/hotRecipes';
import Categorie from './component/categorie';
import SimpleandTastyRecipes from './component/simple&TastyRecipes';
import RecipeList from './component/recipeList';
import EveryoneCanBeAChef from './component/everyoneCanBeAChef';
import Checkout from './component/checkout';
import DeliciousRecipeList from './component/deliciousRecipeList';
import Inbox from './component/inbox';
import Footer from './component/footer';
import FriedRice from './component2/friedRice'; 
import Ingredients from './component2/ingredients';
import Directions from './component2/directions';
import LikeRecipeList from './component2/likeRecipeList';
import BlogAndArticle from './blog/blogAndArticle';
import TastyRecipe from './blog/tastyRecipe';
import FullGuide from './aboutus/FullGuide';
import Startout from './aboutus/startout';
import Contactus from './contact/contactus';

function Home() {
  return (
    <>
      <Navbar />
      <HotRecipes />
      <Categorie />
      <SimpleandTastyRecipes />
      <RecipeList />
      <EveryoneCanBeAChef />
      <Checkout />
      <DeliciousRecipeList />
      <Inbox />
      <Footer />
    </>
  );
}

function Recipes() {
  return (
    <>
      <Navbar />
      <FriedRice />
      <Ingredients/>
      <Directions/>
      <Inbox/>
      <LikeRecipeList />

      <Footer />
    </>
  );
}
function Blog() {
  return (
    <>
      <Navbar />
      <BlogAndArticle/>
      <TastyRecipe/>
      <Inbox/>

      <Footer />
    </>
  );
}
function Contact() {
  return (
    <>
      <Navbar />
      <Contactus/>
      
      <Inbox/>
      <LikeRecipeList />
      <Footer />
    </>
  );
}
function AboutUs() {
  return (
    <>
      <Navbar />
      <FullGuide/>
      <Startout/>
      
      <Inbox/>
      <LikeRecipeList />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
