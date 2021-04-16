import React from 'react';
import styled from "styled-components/macro"

export const Pagination = ({ recipePerPage, totalRecipes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipePerPage); i++) {
    pageNumbers.push(i);
  }

  return (

    <Wrapper>
      <Nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href='!#' className='page-link'>
                {number}
              </a>
            </li>
          ))}

        </ul>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const Nav = styled.nav`

  margin-top: 50px;
  bottom: 0;
`