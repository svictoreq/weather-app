import axios from 'axios';

export const getForecast = (city) => {
	// const _APIKEY = '02d39d2f9bbfe45eb9afa501e91fabfa';
	const _APIKEY = 'b714ec74bbab5650795063cb0fdf5fbe';
	const encodedURI = window.encodeURI(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${_APIKEY}&cnt=5&units=metric`);
	return axios.get(encodedURI)
		.then(response => {
			return response.data;
		})
		.catch(err => {
			throw err;
		});
};

export const getTimezone = ({lat, lon}, timestamp) => {
	const _APIKEY = 'AIzaSyB8NTHW3heSddViSyCFHAfUgn4qkrQgFO0';
	const _BASEURL = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${timestamp}&key=${_APIKEY}`;
	return axios.get(window.encodeURI(_BASEURL))
		.then(response => {
			return response;
		})
		.catch(err => {
			throw err;
		})
};
