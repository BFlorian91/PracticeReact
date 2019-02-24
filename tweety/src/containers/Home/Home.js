import React from 'react';

import './Home.css';

const Home = ({ children }) => (
	<div className="homepage">
		<div className="tweets">
			{children}
		</div>
	</div>
);

export default Home;
