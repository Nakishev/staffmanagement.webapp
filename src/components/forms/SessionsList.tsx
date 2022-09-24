import React from 'react'
import vacancies from '../../data/MockVacancies.js'
import sessions from '../../data/MockSessions'
import VacancyCard from './VacancyCard'
import SessionCard from './SessionCard'

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

const SessionsList = () => {
	return (
		<div className='py-6 '>
			<ul>
				{sessions.map(session => (
					<li key={session.sessionId}>
						<SessionCard {...session} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default SessionsList
