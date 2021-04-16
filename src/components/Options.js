import React from 'react'

import styled from 'styled-components/macro'

export const Options = ( {setMealType} ) => {

  return(
  <MealType onChange={e => setMealType(e.target.value)} >
    <option value="">Meal type</option>
    <option value="Breakfast">Breakfast</option>
    <option value="Lunch">Lunch</option>
    <option value="Dinner">Dinner</option>
    <option value="Snack">Snack</option>
    <option value="Tea-time">Tea-time</option>  
 </MealType>
  )
}

// const Option = styled.option`
//   font-weight: bold;
//   `
const MealType = styled.select`
  width: 150px;
  /* height: 15px; */
  border: 2px solid #a3c1ad;
  padding: 8px 10px;
  border-radius: 5px;
  margin-left: 5px;
`