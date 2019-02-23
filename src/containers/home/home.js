import React from 'react';

import './home.css';

const home = ({ children }) => (
	<div className="homepage">
		<div className="tweets">
			{children}
		</div>
	</div>
);

export default home;
