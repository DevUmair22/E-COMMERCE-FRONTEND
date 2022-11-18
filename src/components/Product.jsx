import React from 'react'
import Products from './Products'
import styled from 'styled-components'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'


const Container=styled.div`
    
`
const Info =styled.div`
    
`

const Product = ({item}) => {
  return (
    <Container>
<Circle/>
<Image src='{item.src}'/>
<Info>
    <Icon>
<ShoppingCartOutlined/>
    </Icon>
    <Icon>
        <SearchOutlined/>
    </Icon>
    <Icon>
    <ShoppingCartOutlined/>

    </Icon>
</Info>
    </Container>
  )
}

export default Product