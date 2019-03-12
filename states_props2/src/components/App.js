import React, { Component } from 'react';
import App_bis from './State';

/* Props */
export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello World! {this.props.message} !!</h1>
				<App_bis />
			</div>
		)
	}
}



