import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export default class NavBar extends Component {

	constructor() {
		super()
		this.state = {
			showSearchB: false 
		};
	};

	showSearchBar = () => {
		this.setState({
			showSearchB: !this.state.showSearchB
		});
	};

	render() {
		return (
			<nav className="pink lighten-2" >
				<div className="nav-wrapper">
					<a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Snippet Manager</a>
					<ul className="right hide-on-med-and-down">
						<li onClick={this.showSearchBar}><a><i className="material-icons">search</i></a></li>
						<li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
						<li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
						<li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
					</ul>
				</div>
				<div>	{
					this.state.showSearchB ?
						<div className="row">
							<form className="col s12">
								<div className="row">
									<div className="input-field col s12">
										<textarea id="textarea1" className="materialize-textarea"></textarea>
										<label htmlFor="textarea2" className="control-label">search</label>
									</div>
								</div>
							</form>
						</div>: null
				} </div>

		</nav>
		)
	}
}
