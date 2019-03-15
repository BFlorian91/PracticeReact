import React, { Component } from 'react';
import Navbar from './Nav';
import Projects from './Project_list';

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container">
					<div className="row" style={{paddingTop: 50}}>
						<Projects />
					</div>
				</div>
			</div>
		)
	}
}
