
import React from 'react'
import styled  from 'styled-components'
// import { mobile } from "../responsive";


 const Container =styled.div`
    flex: 1;
    height: 70vh;
    margin: 3px;
    position: relative;
 `
const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  
    
`
  /* ${mobile({height:"20vh"})} */
const Info =styled.div`
position:absolute;
width: 100%;
height: 100%;
top: 0;
left: 0 ;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;


`
const Title =styled.h1`
margin-bottom: 20px;
`
const Button =styled.button`
border:none;
background-color: white;
font-weight: 600;
padding: 10px;
cursor: pointer;
color: gray;
`
const CategoryItem = ({item}) => {
  return (
<Container>
<Image src=' {item.img}'/>
<Info>
    <Title>{item.title}</Title>
<Button>Shop Now</Button>
</Info>
</Container>
  )
}

export default CategoryItem