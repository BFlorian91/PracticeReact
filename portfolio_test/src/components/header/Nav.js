import React, { Component } from 'react';

export default class Navbar extends Component {
	render() {
		return (
			<div className="col s12">
				<nav>
					<div className="nav-wrapper blue lighten-2">
						<form>
							<div className="input-field">
								<input id="search" type="search" required />
								<label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
								<i className="material-icons">close</i>
							</div>
						</form>
					</div>
				</nav>
			</div>
		)
	}
}
