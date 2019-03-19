import React, { Component } from 'react';
import RestController from './RestController'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			loading: false,
			status: undefined,
			isChecked: false,
		}
		this.toggleChange = this.toggleChange.bind(this);
	}

	componentDidMount() {
		this.setState({loading: true})
		fetch("https://192.168.1.53/api/2Jxg2yBReSrHtACcxtRrnNjodriZyME1t5G08YVb/lights")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.setState({
					loading: false,
					status: data,
				})
			})
	}

	toggleChange() {
		this.setState({
			isChecked: !this.state.isChecked
		})
	}

	render() {

		if (!this.state.status) return null;

		const returnValue = this.state.loading ?
			<div className="preloader-wrapper active">
				<div className="spinner-layer spinner-red-only">
					<div className="circle-clipper left">
						<div className="circle"></div>
					</div>
					<div className="gap-patch">
						<div className="circle"></div>
					</div>
					<div className="circle-clipper right">
						<div className="circle"></div>
					</div>
				</div>
			</div> : this.state.status[3].name;

		const statLight = this.state.isChecked ? "light is up" : "light is down";

		this.state.isChecked ? json[3].state.on = true : json[3].state.on = false;
		return (
			<div className="container">
				<h1>{returnValue}</h1>
				<form action="#">
					<p>
						<label>
							<input 
								type="checkbox" 
								checked={this.state.isChecked}
								onChange={this.toggleChange}
							/>
							<span>{statLight}</span>
						</label>
					</p>
				</form>
			</div>
		)
	}
}
