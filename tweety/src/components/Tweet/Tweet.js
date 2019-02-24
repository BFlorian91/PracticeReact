import React from 'react';

import './Tweet.css';

const Tweet = ({ avatar, fullname, content, usename, date}) => (
	<div className="tweet">
		<div className="avatar">
			<img src={avatar} role="presentation" alt="img" />
		</div>
		<div className="data">
			<div className="infos">
				<strong className="fullname">{fullname}</strong>
				<small className="gray">{usename}</small>
				<small className="gray date">{date}</small>
			</div>
			<div className="content">
			<p>{content}</p>	
			</div>
		</div>
	</div>
);

export default Tweet;
