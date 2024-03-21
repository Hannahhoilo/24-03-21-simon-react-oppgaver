export default function Product({name, price, category}) {

	return(
		<>
		<div>
			<span>Name: {name}</span>
			<span>Price: {price}</span>
			<span>Category: {category}</span>
		</div>
		</>
	)
}