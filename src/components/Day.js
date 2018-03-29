import React from 'react';
import { getDate } from '../utils/helpers';

const Day = ({data, index}) => {
	console.log(data);
	const icon = data.weather[0].icon;
	return (
		<figure className="day">
			<img src={`/img/weather-icons/${icon}.svg`} alt="Weather Icon" className="weather-icon" />
			<figcaption>{getDate(data.dt)}</figcaption>
		</figure>
	);
};

export default Day;
