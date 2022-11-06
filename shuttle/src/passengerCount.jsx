import React, { useState } from "react";

// Importing app.css is css file to add styling


const PassengerCount = () => {
// Counter is a state initialized to 0
const [counter, setCounter] = useState(18)

// Function is called everytime increment button is clicked
const handleClick1 = () => {
	// Counter state is incremented
	setCounter(counter + 1)
}

// Function is called everytime decrement button is clicked
const handleClick2 = () => {
	// Counter state is decremented
	setCounter(counter - 1)
}

return (
	<div id="seat" style={{
	
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '190%',
	position: 'relative',
	width: '100%',
	height: '50%',
	
	}}>
	<h2>Passenger Count</h2>
	<div style={{
		fontSize: '100%',
		position: 'relative',
		top: '5vh',
	
	}}>
		<h4>Number of passengers in Bus : {counter}</h4>
	</div>
	<div className="buttons">
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '10vh',
		marginRight: '5px',
		backgroundColor: 'green',
		borderRadius: '8%',
		color: 'white',
		}}
		onClick={handleClick1}>Incoming Passenger</button>
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '10vh',
		marginLeft: '5px',
		backgroundColor: 'red',
		borderRadius: '8%',
		color: 'white',
		}}
		onClick={handleClick2}>Outgoing Passenger</button>
	</div>
	</div>
)
}

export default PassengerCount
