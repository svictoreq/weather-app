import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Forecast = ({heading}) => {
	return(
		<Fragment>
			<Header />
				<div className="forecast">
				<h1 className="forecast-heading">{heading}</h1>
			</div>
		</Fragment>
	);
};

Forecast.propTypes = {
	heading: PropTypes.string.isRequired,
}

export default Forecast;
