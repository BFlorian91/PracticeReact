import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export default class test extends Component {

	constructor() {
		super()
		this.state = {
			isHidden: true
		}
	}

	toggleHidden() {
		this.setState( {
			isHidden: !this.state.isHidden
		})
	}

	render() {
		return (
			<nav class="teal lighten-2">
				<div class="nav-wrapper">
					<a href="#" class="brand-logo">Easy App</a>
					<ul id="nav-mobile" class="right hide-on-med-and-down">
						<li><a onClick={this.toggleHidden.bind(this)} >Login</a></li>
						<li><a href="#">Chat</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>
			</nav>
		)
	}
}
