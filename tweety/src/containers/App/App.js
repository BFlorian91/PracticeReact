import React from 'react';
import './App.css';

import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
import Home from '../../containers/Home';

console.log(tweets);
const App = () => (
	<main>
		<Home>
			{tweets.map((tweet, index) => (
				<Tweet {...tweet} key={index} />
			))};
		</Home>
	</main>
);

export default App;
