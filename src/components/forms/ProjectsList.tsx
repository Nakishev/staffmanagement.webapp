import React from 'react'
import projects from '../../data/MockProjects.js'
import ProjectCard from './ProjectCard'

/* 
						<div>
							<img
								className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
								src={person.personAvatar}
								alt=""
							/>
							{person.personFirstName} {person.personLastName}
						</div>
						*/

const ProjectsList = () => {
	return (
		<div className="flex py-6 content-center mx-auto">
			<ul>
				{projects.map(project => (
					<li key={project.projectId}>
						<ProjectCard {...project} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProjectsList
