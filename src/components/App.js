import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Forecast from '../containers/ForecastContainer';
import Details from './Details';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/forecast" component={Forecast} />
					<Route path="/details/:city" component={Details} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
