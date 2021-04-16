import React from 'react'

import styled from "styled-components/macro"

export const Recipes = ({ recipe }) => {

  
  return (
        recipe.recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <>
     
        <Url href={recipe.recipe.url} target="_blank">
          <Card>
            <Img src={recipe.recipe.image} />
            <Text>{recipe.recipe.label}</Text>
          </Card>
        </Url>
      </>
    )
  )
}

const Url = styled.a`
  text-decoration: none;
  color: #000;
`

const Img = styled.img`
  width: 280px;
`
const Text = styled.p`
  width: 280px;
  /* margin-bottom: 10px;  */
`

const Card = styled.div`
  padding: 10px;
  margin: 40px;
  text-align: center;
  font-size: 20px;
  box-shadow: 0 10px 10px #999;
  transition: box-shadow 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 10px 10px #999;
  }
`

