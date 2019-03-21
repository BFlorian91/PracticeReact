import React, { Component } from 'react';

export default class Header extends Component {
	/* fonction qui check si la premiere lettre du pseudo est un a, e, i, o... */	
	convert = (pseudo) => {
		return /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;
	};

	render() {
		return (
			<header>
				<h1>La boite a recette {this.convert(this.props.pseudo)}</h1>
			</header>
		)
	}
	static propTypes = {
		pseudo: React.PropTypes.string.isRequired
	}
}
