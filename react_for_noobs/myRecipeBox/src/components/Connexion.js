import React, { Component } from 'react';

export default class Connexion extends Component {
	
	goToApp = (event) => {
		event.preventDefault();
		// Recup du Pseudo
		const pseudo = this.boxInput.value;
		// Switch l'url
		this.context.router.transitionTo(`/box/${pseudo}`);
	}

	render() {
		return (
			<div className="connexionBox">
				<form className="connexion" onSubmit={(e) => this.goToApp(e)} >
					<h1>My recipesbox</h1>
					<input 
						type="text" 
						placeholder="Name of cooker" 
						pattern="[A-Za-z-]{1,}" 
						required ref={(input) => {this.boxInput = input}} />
					<button type="submit">Go</button>
				</form>
			</div>
		)
	}
	static contextType = {
		router: React.PropTypes.object
	};
}
