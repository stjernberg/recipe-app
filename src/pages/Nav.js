import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import Axios from "axios"
import styled from "styled-components/macro"

import { YOUR_APP_ID, YOUR_APP_KEY } from '../key'
import Food from '../assets/paella.jpg'
import { Recipes } from './Recipes'

export const Nav = () => {

  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`
  const history = useHistory()

  const getRecipes = async () => {
    const result = await Axios.get(url)
    setRecipes(result.data.hits)
    console.log(result.data.hits)
    
  }

  const submitForm = (e) => {
    e.preventDefault()
    getRecipes()
  }

  return (
    <>
      <Heading>
        <Title>Tasty Food Recipes </Title>
        <Img src={Food} />
      </Heading>
      <Form onSubmit={submitForm}>
        <Input type="text"
          placeholder="Enter ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)} />
        <Button type="submit">Search</Button>
      </Form>
      <div>
      {recipes.map((recipe, index) => {
        return(
          
        <Recipes
        key={index}
        recipe={recipe}
         />
             
          )
        })}
      </div>
      
    </>
  )
}

const Img = styled.img`
  width: 120px;
  margin-left: 10px;
`

const Heading = styled.header`
  display: flex;
  
`
const Form = styled.form`
  display: flex;
  margin-top: 20px;
 
`
const Input = styled.input`
  display: flex;
  padding: 10px;
  border-radius: 5px;
  margin-right: 5px;
  border: 2px solid #a3c1ad;
`
const Button = styled.button`
 background: #a3c1ad;
 border-radius: 5px;
 border: none;
`
const Title = styled.h1`
 font-family: 'Poppins', sans-serif;
`
