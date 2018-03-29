import React, { Fragment } from 'react';
import Header from './Header';
import Day from './Day';
import '../css/Details.css';

const Details = ({location}) => {
	const city = location.state;
	return (
		<Fragment>
			<Header />
			<div className="details">
				<h1 className="city-heading">{location.state.heading}</h1>
				<Day data={city} click={false} />
				<ul className="detail-list">
					<li className="detail description">{location.state.weather[0].description}</li>
					<li className="detail">Min temp: {Math.floor(location.state.temp.min)}°C degrees</li>
					<li className="detail">Max temp: {Math.floor(location.state.temp.max)}°C degrees</li>
					<li className="detail">Humidity: {Math.floor(location.state.humidity)}%</li>
				</ul>
			</div>
		</Fragment>
	)
};

export default Details;
