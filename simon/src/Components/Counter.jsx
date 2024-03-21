import { useState } from "react"

export default function Counter() {
	const [count, setCount] = useState(0)

	return (
		<>
		<br></br>
		<button onClick={()=> (count > 0) && setCount(count - 1)}>-</button>
		<div>{count}</div>
		<button onClick={()=>setCount(count + 1)}>+</button>
		</>
	)

}