import React from 'react'
import vacancies from '../../data/MockVacancies.js'
import VacancyCard from './VacancyCard'

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
		<div className="flex mx-auto py-6">
			<ul>
				{vacancies.map(vacancy => (
					<li key={vacancy.vacancyId}>
						<VacancyCard {...vacancy} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProjectsList
