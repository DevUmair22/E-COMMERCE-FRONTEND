import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { publicRequest } from '../pages/requestMethods'
import Product from './Product'
const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`

const Products = ({ cat, filters, sort }) => {
	const [products, setProducts] = useState([])
	const [filteredProducts, setfilteredProducts] = useState([])

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await publicRequest.get(
					// for category based get request
					cat ? `/products/find?category=${cat}` : `/products/find`
				)

				setProducts(res.data)
			} catch (err) {
				console.log(err)
			}
		}
		getProducts()
	}, [cat])

	useEffect(() => {
		cat &&
			setfilteredProducts(
				products.filter((item) => {
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				})
			)
	}, [products, cat, filters])

	useEffect(() => {
		if (sort === 'newest') {
			setfilteredProducts((prev) =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt)
			)
		} else if (sort === 'asc') {
			setfilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
		} else {
			setfilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
		}
	}, [sort])
	return (
		<Container>
			{cat
				? filteredProducts.map((item) => <Product item={item} key={item.id} />)
				: products
						.slice(0, 8)
						.map((item, index) => <Product item={item} key={index} />)}
		</Container>
	)
}

export default Products
