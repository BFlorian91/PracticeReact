import React, { Component } from 'react';
import Googlelogin from 'react-google-login';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Login extends Component {

	state = {
		log: false
	}

	render() {

		const responseGoogle = (response) => {
			console.log(response);
			this.setState({
				log: true
			})
			console.log(this.state.log);
		}

		const logout = () => {
			this.setState({
				log: false
			})
		}

		const login = this.state.log ?
			<Button variant="contained" onClick={logout}>
       LOGOUT 
      </Button> : 
			<Googlelogin 
				clientId="962388526114-dn0k51p52g3q2mig1kncq7rmqkd29sgs.apps.googleusercontent.com"
				buttonText="Login With Google"
				onSuccess={responseGoogle}
				onfailure={responseGoogle}
			/>

			return (
				<Grid 
					container
					direction="column"
					justify="center"
					alignItems="center"
					style={{marginTop: 30}}
				>
					{login}
				</Grid>
			)
	}
}

export default Login;
