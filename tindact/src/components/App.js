import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
import Login from './Login'

class App extends Component {
  render() {
    return (
			<Grid>
        <header className="App-header">
					<Navbar />
					<Grid>
						<Login />
					</Grid>
        </header>
      </Grid>
    );
  }
}

export default App;
