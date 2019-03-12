import React from 'react';

export default function Joke(props) {
	return (
		<div>
			<p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
			<p style={{color: !props.question ? "#a55eea" : "black"}}>Answer: {props.punchLine}</p>
			<hr/>
		</div>
	)
}
