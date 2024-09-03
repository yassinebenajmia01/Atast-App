import React from 'react';
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FriedRice from './component2/friedRice';

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
      <FriedRice/>
      
      <Footer />
    </>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* Add a default route */}
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  );
}

export default App;
