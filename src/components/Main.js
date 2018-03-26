import React from 'react';
import InputContainer from './InputContainer';
import '../css/Main.css';

const Main = (props) => {
	return (
		<main>
			<div className="wrapper">
				<h1>Enter a City and State</h1>
				<InputContainer />
			</div>
		</main>
	);
}

export default Main;
