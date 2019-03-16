import React, { Component } from 'react';

export default class Navbar extends Component {
	render() {
		return (
			<div className="col s12">
				<nav>
					<div class="nav-wrapper blue lighten-2">
						<a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
						<ul class="right hide-on-med-and-down">
							<li><a><i class="material-icons">search</i></a></li>
							<li><a href="#cards"><i class="material-icons">view_module</i></a></li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}
