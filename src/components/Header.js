import React from 'react';
import '../css/Header.css';
import LocationContainer from './LocationContainer';

const Header = (props) => {
	return (
		<header>
			<h1>Clever Title like Sancrisoft</h1>
			<LocationContainer />
		</header>
	)
};

export default Header;
