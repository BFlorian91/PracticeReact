import React from 'react';
import Header from './Header';
import Admin from './Admin';
import Card from './Card';

import base from '../base';

/* Charger les recettes */
import recipes from '../recipes';

class App extends React.Component {

	state = {
		recipes: {}
	};

	componentWillMount() {
		this.ref = base.syncState( `${this.props.params.pseudo}/data`, {
			context: this,
			state: 'recipes'
		})
	}

	componentWillUnount() {
		base.removeBinding(this.ref);
	}

	loadExempleRecipe = () => {
		this.setState({ recipes });
	};

	addRecipe = (recipe) => {
		const recipes = {...this.state.recipes}
		const timestamp = Date.now();
		recipes[ `recipe-${timestamp}` ] = recipe;
		this.setState( { recipes } )
	};

	updateRecipe = (key, updateRecipe) => {
		const recipes = {...this.state.recipes};
		recipes[key] = updateRecipe;
		this.setState({ recipes });
	}

	deleteRecipe = key => {
		const recipes = {...this.state.recipes};
		recipes[key] = null;
		this.setState({ recipes });
	}

	render() {

		const cards = Object
			.keys(this.state.recipes)
			.map(key => <Card key={key} details={this.state.recipes[key]} />)

		return (
			<div className="box">
				<Header pseudo={this.props.params.pseudo} />
				<div className="cards">
					{cards}
				</div>
				<Admin 
					recipes={this.state.recipes}
					loadExempleRecipe={this.loadExempleRecipe} 
					addRecipe={this.addRecipe}	
					updateRecipe={this.updateRecipe}
					deleteRecipe={this.deleteRecipe}
					pseudo={this.props.params.pseudo}
				/>
			</div>
		)
	}

	static propTypes = {
	  params: React.PropTypes.object.isRequired
	};
}

export default App;
