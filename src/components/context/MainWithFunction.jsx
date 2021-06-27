import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import AppTheme from "./Colors";

const Main = () => {
	const theme = useContext(ThemeContext)[ 0 ]
	const currentTheme = AppTheme[ theme ]
	return (
		<main style={
			{
				padding: '1rem',
				backgroundColor: `${ currentTheme.backgroundColor }`,
				color: `${ currentTheme.textColor }`,
			}
		}>
			<h3>Hello</h3>
			<p>Hello hello</p>
			<button>Hello hello hello</button>
		</main>
	)
}

export default Main;