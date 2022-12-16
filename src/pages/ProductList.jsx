import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom'
import { useState } from 'react'


const Container=styled.div`
    
`
const Title=styled.h1`
margin: 20px;
`
const FilterContainer=styled.div` 
   display: flex;
   justify-content: space-between; 

`
const Filter =styled.div`
   margin: 20px;
   margin-right: 20px;
   ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
    
`
const FilterText=styled.span`
font-style: 20px;
font-weight: 600;
margin-right:20px;
${mobile({ marginRight: "0px" })}
`
const Select=styled.select`
    
    padding:10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`
const Option=styled.option``;



const ProductList = () => {

    const location=useLocation();
    const cat =location.pathname.split("/")[2];
    const [filters, setFilters] =useState({});
const [sort, setSort] = useState("newest")
    

const handleFilters=(e)=>{
    const value = e.target.value;
    setFilters({
        ...filters,
[e.target.name]:value
    });
};



    console.log(filters);
  return (
<Container>
<Navbar/>
<Announcements/>
<Title>
{cat}
</Title>
<FilterContainer>
   <Filter> 
    <FilterText>Filter Products:</FilterText>
    <Select name ="color" onChange={handleFilters}>

    <Option disabled>Color</Option>
        <Option>Red</Option>
        <Option>Black</Option>
        <Option>Brown</Option>
        <Option>Violet</Option>
        <Option>Orange</Option>
        <Option>Yellow</Option>
    </Select>
    <Select name ="size" onChange={handleFilters}>
        <Option disabled>Size</Option>
        <Option>S</Option>
        <Option>M</Option>
        <Option>L</Option>
        <Option>XL</Option>
        <Option>XXL</Option>
        <Option>XXXL</Option>
    </Select>
    </Filter>
    <Filter>
    <FilterText>Sort Products:</FilterText>
    <Select onChange={(e)=>setSort(e.target.value)} >
        <Option selected>Newest</Option>
        <Option>Price(asc)</Option>
        <Option>Price(desc)</Option>

    </Select>
    </Filter>
</FilterContainer>
<Products cat={cat} filters={filters} sort={sort}/>
<Newsletter/>
<Footer/>
</Container>
  )
}

export default ProductList