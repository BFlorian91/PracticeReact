import React, { Component } from 'react';
import Navbar from './header/Nav';
import Projects from './Project_list';
import Skills from './Level.js';
import Footer from './footer/Footer';

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container">
					<div className="row">
						<Skills />		
					</div>
					<div className="row" style={{paddingTop: 50}}>
						<Projects />
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
