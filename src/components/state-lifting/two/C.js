import React from 'react'

const C = ({text}) => {
	return (
		<div>
			{text && <h1>Reflect here: {text}</h1> }
		</div>
	)
}

export default C
