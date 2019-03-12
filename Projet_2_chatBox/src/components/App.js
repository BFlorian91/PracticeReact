import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';
import base from '../base'

/* CSS */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css';

class App extends React.Component {

	state = {
		messages: {}
	};

	componentWillMount() {
		this.ref = base.syncState('/messages', {
			context: this,
			state: 'messages'
		});
	}

	componentDidUpdate() {
		/* scroll down */
		this.messages.scrollTop = this.messages.scrollHeight;
	}

	addMessage = (message) => {
		/* cpy state */
		const messages = {...this.state.messages}
		
		/* add timestamp */
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message;
		/* del messages if > 10 */
		Object.keys(messages).slice(0, -10).map(key => messages[key] = null);
		
		/* update state*/
		this.setState({ messages });
	};

	isUser = (pseudo) => {
		return pseudo === this.props.params.pseudo;

	};

	render() {
		
		const messages = Object.keys(this.state.messages).map(key => <Message key={key} details={this.state.messages[key]} isUser={this.isUser} />);

		return (
			<div className="box">
				<div className="messages" ref={input => this.message = input} >
					<ReactCSSTransitionGroup component="div" className="message" transitionName="message" transitionEnterTimeout={200} transitionLeaveTimeout={200} >
						{messages}
					</ReactCSSTransitionGroup>
				</div>
				<Formulaire addMessage={this.addMessage} pseudo={this.props.params.pseudo} length="140" />
			</div>
		)
	}
};

export default App;
