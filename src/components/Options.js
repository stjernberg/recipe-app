import React from 'react'

import styled from 'styled-components/macro'

export const Options = ( {setHealthLabel} ) => {

 
  return(
  <HealthLabels
    onChange={e => setHealthLabel(e.target.value)}
  >
    <option value="">Health Labels</option>
    <option value="vegan">Vegan</option>
    <option value="vegetarian">vegetarian</option>
    <option value="dairy-free">Dairy-free</option>
    <option value="gluten-free">Gluten-free</option>
    <option value="low-sugar">Low-sugar</option>
    <option value="peanut-free">Peanut-free</option>
    <option value="egg-free">Egg-free</option>
    <option value="fat-free">Fat-free</option>
    <option value="wheet-free">Fat-free</option>
  </HealthLabels>
  )
}

// const Option = styled.option`
//   font-weight: bold;
//   `
const HealthLabels = styled.select`
  width: 150px;
  /* height: 15px; */
  border: 2px solid #a3c1ad;
  padding: 8px 10px;
  border-radius: 5px;
  margin-left: 5px;
`