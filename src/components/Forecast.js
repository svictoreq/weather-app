import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import DayItems from '../containers/DayItems'

const Forecast = ({heading, list, timezone}) => {
	return(
		<Fragment>
			<Header />
				<div className="forecast">
				<h1 className="forecast-heading">{heading}</h1>
				{ list ? <DayItems data={list} heading={heading} timezone={timezone} /> : null }
			</div>
		</Fragment>
	);
};

Forecast.propTypes = {
	heading: PropTypes.string.isRequired,
}

export default Forecast;
