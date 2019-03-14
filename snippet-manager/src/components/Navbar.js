import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export default class NavBar extends Component {

	render() {
		return (
			<nav className="pink lighten-2" >
				<div class="nav-wrapper">
					<a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
					<ul class="right hide-on-med-and-down">
						<li><a href="sass.html"><i class="material-icons">search</i></a></li>
						<li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
						<li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
						<li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
					</ul>
				</div>
			</nav>
		)
	}
}
