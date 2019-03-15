import React from 'react';
import Level from './Level';

import skills from '../data/skills';

export default function Skills() {
	const skillComponent = skills.map(skill_me => 
		<Level key={skill_me.id}
					 language={skill_me.language}
					 level={skill_me.level}
					 color={skill_me.color}
		/>);

	return (
		<div>
			{skillComponent}
		</div>
	)
}
