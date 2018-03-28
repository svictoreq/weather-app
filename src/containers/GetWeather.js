import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const GetWeather = ({city, history}) => {
	const handleClick = () => {
		history.push({
			pathname: '/forecast',
			search: `?city=${window.encodeURI(city)}`
		})
		window.location.reload(true);
	}
	return (
		<button onClick={handleClick} className="get-weather">Get Weather</button>
	)
};

GetWeather.propTypes = {
	city: PropTypes.string.isRequired
}

export default withRouter(GetWeather);
