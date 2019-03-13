import React, { Component } from "react"
import 'materialize-css/dist/css/materialize.min.css';

export default class NavBar extends Component {
	constructor() {
		super()
		this.state = {
			isLog: false
		}
		this.updateStatus = this.updateStatus.bind(this)
	}

	updateStatus() {
		this.setState({
			isLog: !this.state.isLog
		})
	}
	render() {
		let status="";
		let butStatus="";
		if (this.state.isLog === true) {
			status="logged ✅"
			butStatus="Logout"
		} else {
			status="not logged ❌"
			butStatus="Login"
		}
		return (
			<div>
				<nav className="purple lighten-2">
					<div class="nav-wrapper">
						<a href="#" class="brand-logo">Logo</a>
						<ul id="nav-mobile" class="right hide-on-med-and-down">
							<li><a >Sass</a></li>
							<li><a >Components</a></li>
							<li><a onClick={this.updateStatus}>{butStatus}</a></li>
						</ul>
					</div>
				</nav>
				<container>
					<h4>You are currently {status}</h4>
				</container>
			</div>
		)
	}
}
