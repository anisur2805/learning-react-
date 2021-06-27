import React, { Component } from "react";
import ThemeContext from "./ThemeContext";
import AppTheme from "./Colors";

class Main extends Component {
	state = {}
	static contextType = ThemeContext
	render() {
		// const currentTheme = AppTheme[ this.contextType[ 0 ] ]
		return (

			<ThemeContext.Consumer>
				{
					([ theme ]) => {
						const currentTheme = AppTheme[ theme ]

						return (
							<main style={ {
								padding: "1rem",
								backgroundColor: `${ currentTheme.backgroundColor }`,
								color: `${ currentTheme.textColor }`
							} }>
								<h1>Heading 1</h1>
								<p>This is a para...</p>
								<button>This is a button</button>
							</main>
						)
					}
				}
			</ThemeContext.Consumer>
		)

	}
}

export default Main;