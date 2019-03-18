import React, { Component } from 'react';

export default class Weather extends Component {

	state = {
		loading: false,
		test: undefined,
		city: "paris"
	}

	componentDidMount() {
		this.setState({loading: true})
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=d73937eca684ab25d1f516dba202a37c`)
			.then(response => response.json())
			.then(data => {
				console.log(data.weather[0].main);
				this.setState({
					loading: false,
					test: data
				})
			})
	}

	render() {
		/* Break for loading time from API */
		if (!this.state.test) return null;
		/* =============================== */

		const text = this.state.loading ? null : this.state.test.name
		return(
			<div>
				<h1>{text}</h1>
				<h3>Weather: {this.state.test.weather[0].main}</h3>
				<p>Description: {this.state.test.weather[0].description}</p>
			</div>
		)
	}
}
