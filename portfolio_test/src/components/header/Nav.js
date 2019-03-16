import React, { Component } from 'react';

export default class Navbar extends Component {
	render() {
		return (
			<div className="col s12">
				<nav>
					<div className="nav-wrapper blue lighten-2">
						<a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
						<ul className="right hide-on-med-and-down">
							<li><a><i className="material-icons">search</i></a></li>
							<li><a href="#cards"><i className="material-icons">view_module</i></a></li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}
