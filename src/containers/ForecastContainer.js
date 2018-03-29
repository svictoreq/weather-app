import React, { Component } from 'react';
import queryString from 'query-string'
import { getWeather, getForecast } from '../utils/api.js';
import Forecast from '../components/Forecast';
import '../css/Forecast.css';

class ForecastContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			foundCity: false,
			city: null,
			weatherData: null
		}
	}

	componentDidMount() {
		const city = queryString.parse(this.props.location.search).city;
		this.requestWeatherData(city);
	}

	requestWeatherData(city) {
		getForecast(city)
			.then((res) => {
				this.setState({
					loading: false,
					foundCity: true,
					city: res.city,
					weatherData: res,
			})
		})
		.catch((err) => {
			this.setState({
				loading: false,
				foundCity: false,
				city: null,
				weatherData: null,
			})
		})
	}

	render() {
		if (!this.state.loading && this.state.foundCity) {
			console.log(this.state.weatherData)
			return <Forecast heading={`${this.state.city.name}, ${this.state.city.country}`} list={this.state.weatherData.list} />
		} else if (this.state.loading) {
			return <Forecast heading="Loading" />
		} else if (!this.state.loading && !this.state.foundCity) {
			return <Forecast heading="City not found!" />
		}
	}
}

export default ForecastContainer;
