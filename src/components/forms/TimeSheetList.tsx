import React from 'react'
import persons from '../../data/MockPersons.js'
import timesheets from '../../data/MockTimeSheet.js'
import timesheet from '../../types/timesheet.interface'
import TimeSheetCard from './TimeSheetCard'

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

const TimeSheetsList = () => {
	return (
		<div className='py-6 '>
			<ul>
				{timesheets.map(timesheet => (
					<li key={timesheet.timeSheetRowId}>
						<TimeSheetCard {...timesheet} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default TimeSheetsList
