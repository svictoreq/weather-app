import React, { Fragment } from 'react';
import LocationContainer from './LocationContainer';
import '../css/Main.css';

const Main = (props) => {
	return (
		<main>
			<Fragment>
				<h1>Enter a City and State</h1>
				<LocationContainer />
			</Fragment>
		</main>
	);
}

export default Main;
