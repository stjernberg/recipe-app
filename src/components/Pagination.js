import React from 'react';
import styled from "styled-components/macro"

export const Pagination = ({ recipePerPage, totalRecipes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
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
  )
}

const Nav=styled.nav`
  bottom: 0;
  margin-top: 150px;
`