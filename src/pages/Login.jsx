import styled from 'styled-components'
import {mobile} from "../responsive";

const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 105, 0.2),
      rgba(255, 100, 295, 0.2)
    ),
 url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper=styled.div`
    width: 20%;
    height: 50%;
    padding:20px;
    background-color:white;
    border-radius: 3%;
text-align: center;
align-items: center;
${mobile({ width: "75%" })}
`

const Title=styled.h1`
font-size    :24px ;
font-weight:300;
`
const Form=styled.form`
    display: flex;
    flex-direction: column;
`
const Input=styled.input`
    flex:1;
    min-width:40%;
    margin: 10px 0px;
padding: 10px;
`

const Button=styled.button`
    width:40%;
    margin-top:30px;
    border: none;

    font-size: large;
    color: white;
    background-color: teal;
    padding: 8px 20px;
    align-self: center;
    cursor: pointer;
`
const Link=styled.a`
    font-size: 12px;
    text-decoration: underline;
    margin: 5px 0px;
    cursor: pointer;
    text-align:${(props)=>props.align};
margin-top: ${(props)=>props.marginTop};
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN </Title>
            <Form>      
            <Input placeholder="UserName" />  
    <Input placeholder="Password" />

    <Link align="left" >Forgot Password?</Link>
    <Button>LOGIN</Button>
    <Link marginTop="20px">SIGN UP FOR NEW ACCOUNT</Link>
        </Form>
        </Wrapper>
    </Container>
    )
}


export default Login