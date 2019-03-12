import React, { Component } from 'react';
import Jokes from './Jokes'

export default class App extends Component {
	render() {
		return (
			<div className="boxOfQuestion">
				<Jokes
					joke={{question: "Hello World, punchline test?", punchline: "Works !!"}} />
				<Jokes
					joke={{question: "", punchline: "Works too!!"}} />
			</div>
		)
	}
}
