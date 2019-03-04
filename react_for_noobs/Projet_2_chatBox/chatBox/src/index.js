/* React */
import React from 'react';
import { render } from 'react-dom';

/* Components */
import Connexion from './components/connexion';
import App from './components/App';
import NotFound from './components/NotFound';

/* Router */
import { BrowserRouter, Match, Miss } from 'react-router';

/* CSS */
import './index.css';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Connexion} />
				<Match exactly pattern="/pseudo/:pseudo" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(
	<Root />,
	document.getElementById('root')
);
