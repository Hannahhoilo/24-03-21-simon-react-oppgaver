import { useState } from "react"

export default function PasswordStrengthChecker() {

	const [passwordMessage, setPasswordMessage] = useState("")

	const checkStrengthAndDisplayMessage = (event) => {
		if (event.target.value === "") {
			return 
		} else if (event.target.value.length < 6) {
			setPasswordMessage("youre weak")
		} else if (event.target.value.length < 10) {
			setPasswordMessage("medium rare")
		} else {
			setPasswordMessage("STRONG!!!")
		}
	}


	return(
		<>
		<form action="">
			<label htmlFor="password">Password:</label>
			<input onChange={checkStrengthAndDisplayMessage}type="password" id="password" />
			<p>{passwordMessage}</p>
		</form>

		</>
	)
}