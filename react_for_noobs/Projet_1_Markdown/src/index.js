import React from 'react';
import { render } from 'react-dom';

// Css
import './style/css/bootstrap.min.css';
import './index.css'

// Js perso
import { sampleText } from './sampleText';

// Marked.js
import marked from 'marked'

class App extends React.Component {

	state = {
		text: sampleText
	};

	componentWillMount() {
		const localStorageText = localStorage.getItem('textToMarkdown');
		if (localStorageText) {
			this.setState({ text: localStorageText });
		}
	}

	editText = (event) => {
		const text = event.target.value;
		this.setState({ text });
	};

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('textToMarkdown', nextState.text);
	}

	renderText = (text) => {
		const renderText = marked(text, {sanitize: true});
		return { __html: renderText }
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<textarea 
							value={this.state.text} 
							rows="35" className="form-control" 
							onChange={(event) => this.editText(event)}>
						</textarea>
					</div>
					<div className="col-sm-6">
						<div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
					</div>
				</div>
			</div>
		)}
};

render(
	<App />,
	document.getElementById('root')
);
