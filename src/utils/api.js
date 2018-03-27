import axios from 'axios';
// const _APIKEY = '02d39d2f9bbfe45eb9afa501e91fabfa';
const _APIKEY = 'b714ec74bbab5650795063cb0fdf5fbe';

export const getWeather = (city) => {
	const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${_APIKEY}&units=metric`)
	return axios.get(encodedURI)
		.then(response => {
			return response.data;
		})
		.catch(err => {
			throw err;
		});
};

export const getForecast = (city) => {
	const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${_APIKEY}&cnt=5&units=metric`);
	return axios.get(encodedURI)
		.then(response => {
			return response.data;
		})
		.catch(err => {
			throw err;
		});
};
