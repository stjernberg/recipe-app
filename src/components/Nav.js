import React from 'react'
import styled from "styled-components/macro"


export const Nav = ({ getSearch, setSearch, search }) => {

  return (
    <Header>
      <Title>Tasty Food Recipes </Title>

      <Form onSubmit={getSearch}>
        <Input type="text"
          placeholder="Enter ingredient"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <Button type="submit">Search</Button>
      </Form>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background: #97a7a0;
  height: 150px;
  
`
const Form = styled.form`
  display: flex;
  height: 40px;
  margin-right: 210px;
 
`
const Input = styled.input`
  display: flex;
  padding: 8px 10px;
  border-radius: 5px;
  margin-right: 5px;
  border: 2px solid #a3c1ad;
`
const Button = styled.button`
 background: #a3c1ad;
 color: #fff;
 width: 65px;
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
 margin-left: 210px;
 font-weight: bold;
 color: #fff;
`
