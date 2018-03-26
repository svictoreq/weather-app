import React, { Fragment } from 'react';
import InputContainer from './InputContainer';
import '../css/Main.css';

const Main = (props) => {
	return (
		<main>
			<Fragment>
				<h1>Enter a City and State</h1>
				<InputContainer />
			</Fragment>
		</main>
	);
}

export default Main;
