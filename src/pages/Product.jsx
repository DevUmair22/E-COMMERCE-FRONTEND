import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from "../responsive";

const Container=styled.div``


const Wrapper=styled.div`
display: flex;
padding: 50px;
${mobile({ padding: "10px", flexDirection:"column" })}
`

const ImgContainer=styled.div`
flex:1;
`


const Image=styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({ height: "40vh" })}
`



const InfoContainer=styled.div`
flex:1;
padding:0px 50px;

${mobile({ padding: "10px" })}
`

const Title=styled.h1`
font-weight:200;
`

const Description=styled.p`
margin:20px 0px;
`

const Price=styled.span`
font-size:40px;
font-weight:100;
`

const FilterContainer=styled.div`
display: flex;
width:50%;
justify-content: space-between;
margin:30px 0px;
${mobile({ width: "100%" })}
`

const Filter=styled.div`
display: flex;
margin:0px 10px;
`

const FilterTitle=styled.span`
font-size:20px;
font-weight:200;
`

const FilterColor=styled.div`
width:20px;
height:20px;
border-radius: 50%;
background-color:${(props)=>props.color};
margin:0px 5px;
cursor:pointer;
`

const FilterSize=styled.select`
margin-left:10px;
padding:5px;
`


const FilterSizeOption=styled.option``


const AddContainer=styled.div`
width: 55%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width: "100%" })}

`

const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight: 700;
`

const Amount=styled.span`
width: 30px;
height: 30px;
border-radius:10px;
border :1px solid teal;
display:flex;
align-items: center;
justify-content: center;
margin:0px 5px;
`

const Button=styled.button`
padding:15px;
border:1px solid teal;
background-color:white;
cursor:pointer;
font-weight:600;

&:hover{
      background-color: #f8f4f4;
  }
`


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Tis is the title of the product.</Title>
                <Description>This is the description of the product and it is a dummy text
                     you can add description later but to make sure our styling is done 
                     properly we are adding this text here.</Description>
                <Price>30$</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="Black"/>
                        <FilterColor color="Blue"/>
                        <FilterColor color="Green"/>
                        <FilterColor color="Red"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                    
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>

        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
    )
}

export default Product