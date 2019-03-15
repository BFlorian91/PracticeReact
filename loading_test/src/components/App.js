import React, { Component } from 'react';
import Hello from './Hello';

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		}, 1500)
	}

	render() {
		return (
			<div class="">
				<Hello isLoading={this.state.isLoading} />
			</div>
		)
	}
}
