import React from 'react';

	const NumberDisplay = (props) => {
		const style = {
			color: props.textColor,
			fontSize: '60px'
		}
		return (<h1 style={style}>{ props.numberToDisplay }</h1>)
	}

export default class Count extends React.Component {

	constructor() {
		super()
		this.state = {
			nb: 0
		}
	}

	increment() {
		this.setState( {
			nb: this.state.nb + 1
		})
	}

	decrement() {
		this.setState( {
			nb: this.state.nb - 1
		})
	}

	reset() {
		this.setState( {
			nb: this.state.nb - this.state.nb
		})
	}


	render() {
		return (
			<div className="principalDiv">
				<NumberDisplay
					numberToDisplay={this.state.nb}
					textColor="#e55039"
				/>
				<button onClick={ () => this.increment() }>
					++
				</button>
				<button onClick={ () => this.decrement() }>
					--
				</button>
				<button onClick={ () => this.reset() }>
					reset
				</button>
			</div>
		)};
}
