import styled from "styled-components"


const Container =styled.div`
height: 30px;
background-color:teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;




const Announcements = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcements