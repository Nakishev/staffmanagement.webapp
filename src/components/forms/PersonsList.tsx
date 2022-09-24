import React from 'react'
import persons from '../../data/MockPersons.js'
import PersonCard from './PersonCard'

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

const PersonsList = () => {
	return (
		<div className="flex w-4/5">
			<div className="py-6 ">
				<ul className=" flex-col">
					{persons.map(person => (
						<li key={person.personId}>
							<PersonCard {...person} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default PersonsList
