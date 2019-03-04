import React from 'react';

class Formulaire extends React.Component {

	state = {
		length: this.props.length
	};

	createMessage = event => {
		event.preventDefault();
		const message = { 
			message: this.message.value, 
			pseudo: this.props.pseudo
		};
		console.log(message);
		this.props.addMessage(message);

		this.messageForm.reset();
	};

	count = (event) => {
		const length = this.props.length - this.message.value.length;
		console.log(length);
	};

	render() {
		return (
			<form 
				className="form" 
				onSubmit={(e) => this.createMessage(e)}
				ref={(input) => this.messageForm = input}
			>
				<textarea 
					required 
					maxLenght={this.props.length} 
					ref={input => this.message = input}
					onChange={(e) => this.count(e)}
				/>
				<div className="info">
					{this.props.length}
				</div>
				<button type="submit">Send!</button>
			</form>
		)
	}
};

export default Formulaire;
