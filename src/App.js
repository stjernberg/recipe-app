import React, { useState, useEffect } from 'react'

import styled from 'styled-components/macro'
import Axios from 'axios'

import { YOUR_APP_ID, YOUR_APP_KEY } from './key'
// import Food from './assets/paella.jpg'
import { Recipes } from './components/Recipes'
import { Nav } from './components/Nav'
// import { Options } from './components/Options'
import { Pagination } from './components/Pagination';

const App = () => {

  // &from=0&to=3 &calories=591-722
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")
  const [recipes, setRecipes] = useState([])
  // const [mealType, setMealType] = useState("Dinner")
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  // const [recipePerPage, setRecipePerPage] = useState(12)
  const recipePerPage = 12
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=36`

  // &mealType=${mealType}
  // &healthLabel=${healthLabel}
  useEffect(() => {
    // getRecipes()
    const getRecipes = async () => {
      setLoading(true)
      const result = await Axios.get(URL)
      setRecipes(result.data.hits)
      console.log(result.data.hits)
      setLoading(false)
    }
 
    getRecipes()
  }, [URL])

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  const indexOfLastRecipe = currentPage * recipePerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <>
     <Nav getSearch={getSearch} setSearch={setSearch}  /> 
          {/* <Options setMealType={setMealType} />      */}
      
      <PageWrapper>
       <CardsContainer>
          {/* {loading && <h1>Loading...</h1>} */}
          {currentRecipes !== [] &&
            currentRecipes.map((recipe, index) => (
              <Recipes
                key={index}
                recipe={recipe}
                loading={loading}
              />

            ))}
            <Pagination
          recipePerPage={recipePerPage}
          totalRecipes={recipes.length}
          paginate={paginate} /> 
        </CardsContainer>
        
        <PaginationWrapper>
        
          </PaginationWrapper>
        </PageWrapper> 
    </>
  );
}

const PaginationWrapper=styled.div`
   /* display: flex;
   justify-content: center; */
`
const CardsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  height: 100vh;
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  position: relative;
  
  /* height: 100vw;  */
`



export default App
