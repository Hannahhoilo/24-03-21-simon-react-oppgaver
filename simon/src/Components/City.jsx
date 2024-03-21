export default function City({name, population, weather}) {

	const getWeatherGreeting = () => {
		if(weather === "Sunny") {
			return "Bring your sunglasses, Sunshine! 😎"
		} else if (weather === "Cloudy") {
			return "Expect cloudy skies! ⛅"
		} else {
			return "Bring your umbrella! ☔"
		}
	}
	return(
		<>
		<div>City: {name}</div>
		<div>Population: {population}</div>
		<div>Weather: {getWeatherGreeting()}</div>
		</>
	)
}