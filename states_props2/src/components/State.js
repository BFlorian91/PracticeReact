import React, { Component } from 'react';

/* State */
export default class App_bis extends Component {
	constructor() {
		super();
		this.state = {
			message: "my friend (from state)!"
		}
	}
	render() {
		return (
			<h1>Hello World! {this.state.message} !!</h1>
		)
	}
}
