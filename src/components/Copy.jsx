import React, { useState} from "react";

export default function CopyComponent() {
	const [ value, setValue ] = useState("");
	const [ message, setMessage ] = useState("Copy")

	const copyEvent = (e) => {
		e.preventDefault();
		if (navigator.clipboard.writeText(value)) {
			setMessage("Copied!")
			setTimeout(() => {
				setMessage("Copy")
			}, 2000)
		}
	}
	return (
		<div>
			<h2>Enter Text and Copy </h2>
			<form>
				<input value={ value } placeholder="Enter text here..." onChange={ (e) => setValue(e.target.value) } />
				{ value && <button onClick={ copyEvent }> { message } </button> }
				<p>Insert text and then you will able to copy </p>
			</form>
		</div>
	);
}; 
