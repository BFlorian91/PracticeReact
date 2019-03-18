import React, { Component } from 'react';
import './index.css';

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            isLogin: false,
				};
			this.handleClick = this.handleClick.bind(this);
		}

		handleClick() {
			this.setState((prevState) => {
				return {
					isLogin: !prevState.isLogin
				}
			})
		}


    render(){
			
			const buttonStyle_2 = {
				backgroundColor: "#FF9800",
				width: 100,
				height: 50,
				fontSize: 20,
				color: "white"
			}

      let buttonName = this.state.isLogin ? "logout" : "login";
      let userState = this.state.isLogin ? "Logged in" : "Logged out";
			
			return (
      	<div style={{textAlign: "center"}}>
        	<h3>user is {userState} !</h3>
						<button className="but1" onClick={() => this.setState({isLogin: !this.state.isLogin})}>{buttonName}</button>
						<button style={buttonStyle_2} onClick={this.handleClick}>{buttonName}</button>
        </div>
      )
    }
}
