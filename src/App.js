import React, { useState, useEffect } from 'react'

import styled from 'styled-components/macro'
import Axios from 'axios'

import { YOUR_APP_ID, YOUR_APP_KEY } from './key'
// import Food from './assets/paella.jpg'
import { Recipes } from './pages/Recipes'
import { Options } from './components/Options'

const App = () => {

  // &from=0&to=3 &calories=591-722
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")
  const [recipes, setRecipes] = useState([])
  const [healthLabel, setHealthLabel] = useState("")
  const START_URL = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30`
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&`

  // &health=${healthLabel}
  useEffect(() => {
    getRecipes()
    
  }, [query])

  const getRecipes = async () => {
    const result = await Axios.get(URL)
    setRecipes(result.data.hits)
    console.log(result.data.hits)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <>
    <Heading>
        <Title>Tasty Food Recipes </Title>
   
      <Form onSubmit={getSearch}>
        <Input type="text"
          placeholder="Enter ingredient"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <Button type="submit">Search</Button>

        <Options setHealthLabel={setHealthLabel} />

      </Form>
      </Heading>
    <PageWrapper>
      
      <CardsContainer>
        {recipes !== [] &&
          recipes.map((recipe, index) => (
                <Recipes
                key={index}
                recipe={recipe}
              />
           
          ))}
      </CardsContainer>

    </PageWrapper>
    </>
  );
}


const CardsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`
// const Img = styled.img`
//   width: 120px;
//   margin-left: 10px;
// `

const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  width: 90%;
  
`
const Form = styled.form`
  display: flex;
  margin-top: 20px;
  height: 40px;
 
`
const Input = styled.input`
  display: flex;
  padding: 8px 10px;
  /* height: 15px; */
  border-radius: 5px;
  margin-right: 5px;
  border: 2px solid #a3c1ad;
`
const Button = styled.button`
 background: #a3c1ad;
 color: #fff;
 width: 65px;
 /* height: 15px; */
 font-size: 15px;
 border-radius: 5px;
 border: none;
 &:hover {
    cursor: pointer;
    background: #738678;
  }
`
const Title = styled.h1`
 font-family: 'Poppins', sans-serif;
 margin-left: 50px;
`


export default App
