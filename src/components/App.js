import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import GetWeather from '../containers/GetWeather';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/test" component={GetWeather} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
