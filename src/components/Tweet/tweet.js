import React from 'react';

import './tweet.css';

const Tweet = (props) => (
	<div className="tweet">
		<div className="avatar">
			<img src={props.avatar} role="presentation" />
		</div>
		<div className="data">
			<div className="infos">
				<strong>{props.fullname}</strong>
			</div>
			<div className="content">
				<p>{props.content}</p>	
			</div>
		</div>
	</div>
);

export default Tweet;
