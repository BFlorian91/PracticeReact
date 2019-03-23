import React, { Component } from 'react';
import './App.css';


class App extends Component {

	state = {
		loading: false,
		data: null,
		dataPic: null
	}

	componentDidMount() {
		Promise.all([
			fetch('https://jsonplaceholder.typicode.com/users'),
			fetch('https://randomuser.me/api/')
	])
			.then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
			.then(([userNames, pictures]) => {
					console.log(userNames)
					console.log(pictures.results[0].picture.medium)
					this.setState({
						loading: true,
						data: userNames,
						dataPic: pictures
					})
				})
	}



	render() {
		const users = !this.state.loading ? null : this.state.data.map( (user, key) =>
			<div key={user.id} className="card mb-3" style={{maxWidth: 540}}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={this.state.dataPic.results[0].picture.medium} className="card-img" alt="..." />
 					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{user.name}</h5>
							<p className="card-text"><strong>Address:</strong> {user.address.city} {user.address.street} {user.address.suite}.</p>
							<p><strong>Email:</strong> {user.email}</p>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
			</div>
		);


		return (
			<div className="App">
				{users}
			</div>
		);
	}
}

export default App;
