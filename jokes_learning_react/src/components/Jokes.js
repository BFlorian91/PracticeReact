import React from 'react';

export default function Jokes(props) {
	return (
		<div>
			<p style={{display: props.joke.question ? "block" : "none"}}>Question: {props.joke.question}</p>
			<p>Answer: {props.joke.punchline}</p>
			<hr/>
		</div>
	)
}
