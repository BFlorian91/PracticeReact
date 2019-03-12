import React from 'react';
import Joke from './Jokes'

/* import data */
import jokesData from '../data/jokesData';

export default function App() {
	
	const jokeComponents = jokesData.map((jokes) =>
		<Joke key={jokes.id}
					question={jokes.question}
					punchLine={jokes.punchLine}
		/>);

		return (
			<div className="boxOfQuestion">
				{jokeComponents}
			</div>
		)
}
