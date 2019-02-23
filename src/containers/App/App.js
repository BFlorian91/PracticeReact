import React from 'react';
import './App.css';

import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
import tweetBox from '../../components/tweetBox';
import Home from '../../containers/home';

console.log(tweets);

const App = () => (
<main>
	<home className="tweetFormat">
		<tweetBox />
		{tweets.map((tweet, index) => (
			<Tweet
				{...tweet} key={index} />
		))}
	</home>
</main>
);

export default App;
