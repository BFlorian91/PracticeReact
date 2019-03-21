import React, { Component } from 'react';
import AddRecipe from './AddRecipes';
import base from '../base';

export default class Admin extends Component {

	state = {
		uid: null,
		owner: null
	}

	componentDidMount() {
		base.onAuth(user => {
			if (user) {
				this.callConnexion(null, {user})
			}
		})
	}

	edit = (event, key) => {
		const recipe = this.props.recipes[key];
		const updateRecipe = {
			...recipe,
			[event.target.name]: event.target.value
		};
		this.props.updateRecipe(key, updateRecipe);
	}

	connexion = provider => {
		base.authWithAuthPopup(provider, this.callConnexion)	
	};

	disconnect = () => {
		base.unauth();
		this.setState({ uid: null });
	}

	callConnexion = (err, authData) => {
		if (err) {
			console.log(err);
			return;
		}

		// Name of box
		const boxRef = base.database().ref(this.props.pseudo);

		// call firebase datas
		boxRef.once('value', snapshot => {
			const data = snapshot.val() || {};

		// Attrib box if has no owner
			if (!data.owner) {
				boxRef.set({
			owner: authData.user.uid
			})
		}
			this.setState({
				uid: authData.user.uid,
				owner: data.owner || authData.user.uid
			})
		});
	}

	renderLogin = () => {
		return (
			<div className="login">
				<h2>Connecte toi pour creer tes recettes !</h2>
				<button onClick={() => this.connexion('Google')}>Me connecter avec Google</button>
				<button className="facebook-button" onClick={() => this.connexion('Facebook')}>Me connecter avec Facebook</button>
			</div>
		)
	}

	renderAdmin = key => {
		const recipe = this.props.recipes[key];
		return (
			<div className="card" key={key} >
				<form className="admin-form">

					<input type="text" name="nom" placeholder="Nom de la recette" value={recipe.name} onChange={(e) => this.edit(e, key)} />

					<input type="text" name="image" placeholder="Adresse de l'image" value={recipe.image} onChange={(e) => this.edit(e, key)} />

					<textarea name="ingredients" rows="3" placeholder="Liste des ingrédients" value={recipe.ingredients} onChange={(e) => this.edit(e, key)} ></textarea>

					<textarea name="instructions" rows="15" placeholder="Liste des instructions" value={recipe.instructions} onChange={(e) => this.edit(e, key)} ></textarea>

				</form>
				<button onClick={() => this.props.deleteRecipe(key)}>Supprimer</button>
			</div>
		)
	}

	render() {

		const disconnect = <button onClick={this.disconnect}>Deconnexion</button>
		// check if user is log 
		if (!this.state.uid) {
			return <div>{this.renderLogin()}</div>
		}
		// check if user is owner of box
		if (this.state.uid !== this.state.owner) {
			return (
				<div className="login">
					<p>Ce n'est pas ta recipeBox 👽</p>
				</div>
			)
		}

		const adminCards = Object
			.keys(this.props.recipes)
			.map(this.renderAdmin);

		return (
			<div className="cards">
				<AddRecipe addRecipe={this.props.addRecipe} />
				{adminCards}
				<footer>
					<button onClick={this.props.loadExempleRecipe}>Remplir</button>
					{disconnect}
				</footer>
			</div>
		)
	}
	static propType = {
		recipes: React.PropTypes.object.isRequired,
		loadExempleRecipe: React.PropTypes.func.isRequired,
		addRecipe: React.PropTypes.func.isRequired,
		updateRecipe: React.PropTypes.func.isRequired,
		deleteRecipe: React.PropTypes.func.isRequired,
		pseudo: React.PropTypes.string.isRequired
	};
}
