import { useState } from 'react';
import './App.css';


const App = () => {
	const [counter, setCounter] = useState(0)

	const decrementCount = () => {
		setCounter(prevCount => prevCount - 1)
	}

	const incrementCount = () => {
		setCounter(prevCount => prevCount + 1)
	}

  	return (
    	<div className="App">
			<h1>Counter App</h1>
			<button className='button' onClick={decrementCount}>-</button>
			<span className='counter'>{counter}</span>
			<button className='button' onClick={incrementCount}>+</button>
    	</div>
  	);
}

export default App;
