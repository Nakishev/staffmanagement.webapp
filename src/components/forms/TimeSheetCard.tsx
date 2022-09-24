import Chip from '@mui/material/Chip'
import React from 'react'
import persons from '../../data/MockPersons'
import { IPerson } from '../../types/person.interface'
import { ISession } from '../../types/session.interface'
import ITimeSheet from '../../types/timesheet.interface'
import CircularProgess from '../ui/CircularProgess'

const TimeSheetCard = (timeSheet: ITimeSheet) => {
	const person = persons.find(
		person => person.personId === timeSheet.timeSheetPersonId
	)
	const avatar = person?.personAvatar !== null ? person?.personAvatar : ''

	return (
		<div className="grid grid-cols-5 grid-rows-2 grid-flow-col  text-left p-1">
			<div className="row-span-2 place-items-center text-sm divide-y">
				<img
					className="h-10 w-10 mx-auto rounded-full ring-2 ring-white drop-shadow-xl"
					src={avatar}
					alt=""
				/>
			</div>
			<div className="row-span-2">
				{timeSheet.timeSheetFirstName} {timeSheet.timeSheetLastName}
			</div>
			<div className="row-span-2 text-center">{timeSheet.timeSheetType}</div>
			<div className="row-span-2 text-center text-sm">
				{timeSheet.timeSheetDate}
			</div>
			<div className="text-center text-sm">{timeSheet.timeSheetDuration}</div>
		</div>
	)
}

export default TimeSheetCard
