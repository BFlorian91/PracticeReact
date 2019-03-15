import React from 'react';
import Card from './Card';

import projects_data from '../data/projects_data';

export default function Projects() {
	const projectComponent = projects_data.map(project => 
		<Card key={project.id}
					img={project.img}
					name={project.name}
					description={project.description}
					url={project.url}
		/>);

	return (
		<div>
			{projectComponent}
		</div>
	)
}
