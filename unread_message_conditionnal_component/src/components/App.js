import React, { Component } from 'react';

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			unreadMessages: ["1- Blablabla Fake Message", "2- Second fake message"]
		}
	}
	/* .length -> size of array */
	render() {
		return (
			<div>
				{this.state.unreadMessages.length > 0 &&
						<h2>You have {this.state.unreadMessages.length} unread {this.state.unreadMessages.length < 2 ? "message" : "messages"} !</h2>}
			</div>		
		)
	}
}
