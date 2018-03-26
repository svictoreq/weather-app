import React, { Fragment } from 'react';

const InputContainer = (props) => {
	return (
		<Fragment>
			<input type="text" placeholder="St. George, Utah" />
			<button class="get-weather">Get Weather</button>
		</Fragment>
	);
};

export default InputContainer;
