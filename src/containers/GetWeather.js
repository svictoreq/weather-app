import React from 'react';
import PropTypes from 'prop-types';
import { getWeather, getForecast } from '../utils/api.js';

const GetWeather = ({city}) => {
	const handleClick = () => {
		console.log(getWeather(city));
		console.log(getForecast(city));
	}
	return (
		<button onClick={handleClick} className="get-weather">Get Weather</button>
	)
};

GetWeather.propTypes = {
	city: PropTypes.string.isRequired
}

export default GetWeather;
