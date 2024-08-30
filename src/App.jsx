import React from 'react'
import Navbar from './component/navbar'
import HotRecipes from './component/hotRecipes'
import Categorie from './component/categorie'
import SimpleandTastyRecipes from './component/simple&TastyRecipes'
import RecipeList from './component/recipeList'

function App() {
  return (
    <>
    <Navbar/>
    <HotRecipes/>
    <Categorie/>
    <SimpleandTastyRecipes/>
    <RecipeList/>
    </>
  )
}

export default App
