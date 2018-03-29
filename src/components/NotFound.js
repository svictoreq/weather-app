import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../css/NotFound.css';

const NotFound = (props) => {
	return (
		<Fragment>
			<Header />
			<div className="not-found">
				<div className="wrapper">
					<h1>Sorry, not found...</h1>
					<Link to="/" className="button">Go Back Home</Link>
				</div>
			</div>
		</Fragment>
	);
};

export default NotFound;
