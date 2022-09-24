import React from 'react'
import { IPerson } from '../../types/person.interface'
import CircularProgess from '../ui/CircularProgess'
import Chip from '@mui/material/Chip'
import { IPositionDTO } from '../../redux/position.types'
import {
	useAddPositionMutation,
	useGetPositionsQuery,
	useUpdatePositionMutation,
} from '../../redux/positionsAPI'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const PersonCard = (person: IPerson) => {
	return (
		<div className="border-gray border-1 rounded-lg shadow-sm shadow-slate-400 my-4">
			<div className="grid grid-cols-6 grid-rows-2 grid-flow-col  text-left p-1 place-content-center mx-">
				<div className="row-span-2 place-items-center my-auto">
					<img
						className="w-10 h-10 mx-auto my-auto rounded-full ring-2 ring-white scale-110"
						src={person.personAvatar}
						alt=""
					/>
				</div>
				<div className="col-span-4 place-items-start">
					{person.personFirstName} {person.personLastName}
				</div>
				<div className="col-span-4 place-items-start text-xs">
					{person.personPositions?.map(position => (
						<Chip
							className="scale-75 -mx-2"
							label={position.positionName}
							color="info"
							size="small"
						/>
					))}
				</div>
				{/*
				<div className="row-span-2 mx-auto text-sx drop-shadow-lg">
					<CircularProgess progressValue={person.personAvgScore} />
				</div>
					*/}
				<div className="my-auto row-span-2 col-span-2">
					<Link to={`/person/${person.personId}`}>
						<Button
							className="my-auto mx-auto scale-90"
							variant="outlined"
							size="small"
						>
							View
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default PersonCard
