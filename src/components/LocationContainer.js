import React from 'react';

const LocationContainer = (props) => {
	return (
		<div className="location-container">
			<input type="text" className="location-input" placeholder="St. George, Utah" />
			<button className="get-weather">Get Weather</button>
		</div>
	);
};

export default LocationContainer;
