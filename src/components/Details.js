import React, { Fragment } from 'react';
import Header from './Header';
import Day from './Day';
import '../css/Details.css';

const Details = ({location}) => {
	const city = location.state;
	console.log(city);
	return (
		<Fragment>
			<Header />
			<div className="details">
				<h1 className="city-heading">{location.state.heading}</h1>
				<Day data={city} click={false} timezone={city.timezone} />
				<ul className="detail-list">
					<li className="detail description">{location.state.weather[0].description}</li>
					<li className="detail">Min temp: {Math.floor(city.temp.min)}°C degrees</li>
					<li className="detail">Max temp: {Math.floor(city.temp.max)}°C degrees</li>
					<li className="detail">Humidity: {Math.floor(city.humidity)}%</li>
				</ul>
			</div>
		</Fragment>
	)
};

export default Details;
