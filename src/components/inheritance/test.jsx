function Contact() {
	return <div className>Hello from Left Panel</div>
}
function MainContent() {
	return <div className>Hello from Main </div>
}

function SplitPane({ left, right }) {
	return (
		<div className="SplitPane">
			<div className="SplitPane-left">
				{ left }
			</div>
			<div className="SplitPane-right">
				{ right }
			</div>
		</div>
	)
}

export default function UseSplitPane() {
	return (
		<SplitPane left={ <Contact /> } right={ <MainContent /> } />
	)
}