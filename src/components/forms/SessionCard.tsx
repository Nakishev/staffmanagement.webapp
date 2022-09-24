import Chip from '@mui/material/Chip'
import React from 'react'
import { ISession } from '../../types/session.interface'
import CircularProgess from '../ui/CircularProgess'

const SessionCard = (session: ISession) => {
	const chipColor = session.sessionIsPassed !== 'Passed' ? 'error' : 'success'
	const chipLabel = session.sessionIsPassed !== 'Passed' ? 'Failed' : 'Passed'

	return (
		<div className="grid grid-cols-4 grid-rows-2 grid-flow-col  text-left p-1">
			<div className="row-span-2 place-items-center text-sm divide-y">
				<img
					className="h-10 w-10 mx-auto rounded-full ring-2 ring-white drop-shadow-xl"
					src={session.sessionPerson.personAvatar}
					alt=""
				/>
			</div>
			<div className="row-span-2">
				{session.sessionPerson.personFirstName}{' '}
				{session.sessionPerson.personLastName}
			</div>
			<div className="row-span-2 text-center text-sm">
				{session.sessionDate}
			</div>
			<div className="text-center drop-shadow-lg">
				<Chip label={chipLabel} color={chipColor} size="small" />
			</div>
		</div>
	)
}

export default SessionCard
