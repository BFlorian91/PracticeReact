import React, { Component } from 'react';

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
    }
    render(){
        let buttonName = "";
        let userState = "log out";
        if (this.state.isLogin === true) {
            buttonName = "logout";
            userState = "logged in"
        } else {
            buttonName = "login";
            userState = "logged out";
        }
        return (
            <div>
                <h3>user is {userState} !</h3>
                <button onClick={() => this.setState({isLogin: !this.state.isLogin})}>{buttonName}</button>
            </div>
        )
    }
}
