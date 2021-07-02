import React, { useState } from 'react';

export const UseStateComponent = () => {
	const [ count, setCount ] = useState(0)
	console.log("Re-render")
	return (
		<div>
			<button className="btn" onClick={ () => setCount((c) => c + 1) }>Count - { count }</button>
			<button className="btn" onClick={ () => setCount(0) }>Count - 0</button>
			<button className="btn" onClick={ () => setCount(5) }>Count - 5</button>
		</div>
	)
}