import React, { Component } from 'react';
import GetWeather from '../containers/GetWeather';

class LocationContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cityName: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({cityName: e.target.value});
	}

	render() {
		return (
			<div className="location-container">
				<input type="text" className="location-input" placeholder="St. George, Utah" value={this.state.value} onChange={this.handleChange} />
				<GetWeather city={this.state.cityName} />
			</div>
		);
	}
};

export default LocationContainer;
