import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { getDate } from '../utils/helpers';

const Day = ({data, key, location, history, heading, timezone, click}) => {
	const icon = data.weather[0].icon;
	const handleClick = () => {
		const city = window.encodeURI(queryString.parse(location.search).city);
		history.push({
			pathname: `/details/${city}`,
			state: {
				...data,
				heading: heading,
				timezone: timezone,
			}
		})
	}
	if (click) {
		return (
			<figure className="day" key={key} onClick={handleClick}>
				<img src={`/img/weather-icons/${icon}.svg`} alt="Weather Icon" className="weather-icon" />
				<figcaption>{getDate(data.dt, timezone)}</figcaption>
			</figure>
		);
	} else {
		return (
			<figure className="day">
				<img src={`/img/weather-icons/${icon}.svg`} alt="Weather Icon" className="weather-icon" />
				<figcaption>{getDate(data.dt, timezone)}</figcaption>
			</figure>
		);
	}
};

export default withRouter(Day);
