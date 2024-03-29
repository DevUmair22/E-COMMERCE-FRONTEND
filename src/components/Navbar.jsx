import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
	height: auto;
	${mobile({ height: '50px' })}
`
const Wrapper = styled.div`
	padding: 0px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: '1px 0px 10px 0px' })}
`

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`
const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: 'none' })}
`
const SearchContainer = styled.div`
	border: 0.5px solid grey;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`

const Input = styled.input`
	border: none;
	${mobile({ width: '50px' })}
`

const Center = styled.div`
	flex: 1;
	text-align: center;
`

const Logo = styled.h1`
	font-weight: bold;
	text-align: center;
	cursor: pointer;
	${mobile({ fontSize: '24px', paddingLeft: '20px' })}
`

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: 'center', paddingRight: '10px' })}
`

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: '12px', marginLeft: '10px' })}
`

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity)
	console.log('cart', quantity)

	// const quantity = useSelector((state) => state.cart.quantity)
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search" />
						<Search style={{ color: 'grey', fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>Thrifted.</Logo>
				</Center>
				<Right>
					{' '}
					<MenuItem>
						<Link to="/register">Register</Link>
					</MenuItem>
					<Link to="/login">
						{' '}
						<MenuItem>Sign in</MenuItem>
					</Link>
					<Link to="/cart">
						<MenuItem>
							<Badge badgeContent={quantity} color="primary">
								<ShoppingCartOutlined />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Navbar
