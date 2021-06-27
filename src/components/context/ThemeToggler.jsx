import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ToggleStyles = {
	cursor: "pointer"
}

const ThemeToggler = () => {
	const [ themeMode, setThemeMode ] = useContext(ThemeContext)
	return (
		<div style={ ToggleStyles } onClick={ () => { setThemeMode(themeMode === 'light' ? 'dark' : 'light') } }>
			<span title="Switch Theme">
				{ themeMode === 'light' ? '🌙' : '☀️' }
			</span>
		</div>
	)
}

export default ThemeToggler;