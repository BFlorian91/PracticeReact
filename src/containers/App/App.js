import React from 'react';
import './App.css';

import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';

console.log(tweets);

const App = () => (
	<div className="tweet">
		<Tweet
			avatar={tweets[1].avatar}
			fullname={tweets[1].fullname}
			content={tweets[1].content}
		/>
		<Tweet
			avatar={tweets[0].avatar}
			fullname={tweets[0].fullname}
			content={tweets[0].content}
		/>
	</div>
);

export default App;
