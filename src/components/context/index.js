import React, { Component } from 'react'
const ThemeContext = React.createContext('light')

export default class FirstContext extends Component {
	render() {
		return (
			<div>
				<ThemeContext.Provider value="dark">
					<Toolbar />
				</ThemeContext.Provider>
			</div>
		)
	}
}

function Toolbar(){
	return(
		<div>
			<ThemeButton />
		</div>
	)
}

class ThemeButton extends Component {
	static contextType = ThemeContext
	render(){
		return(
			<Button theme={this.context} />
		)
	}
}


const Button = () => {
	return <button>Click Me</button>
}