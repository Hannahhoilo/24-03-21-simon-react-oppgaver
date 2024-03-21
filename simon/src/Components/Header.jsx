function Header() {
	const date = new Date();
	const timeOfDay = date.getHours(); 

	return(
		<>
		<h1>{timeOfDay < 12 ? "Good morning Sunshine!" : "Good Afternoon!"}</h1>
		<a href="">Link 1</a>
		<a href="">Link 2</a>
		<a href="">Link 3</a>
		</>
	)
}

export default Header