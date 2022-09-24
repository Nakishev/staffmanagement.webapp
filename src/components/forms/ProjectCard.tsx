import React from 'react'
import { IProject } from '../../types/project.interface'
import AvatarsList from './AvatarsList'

const PersonCard = (project: IProject) => {
	return (
		<div className="grid grid-cols-3 grid-rows-2 grid-flow-col text-left p-1">
			<div className="col">{project.projectName}</div>
			<div className="col  text-xs">{project.projectCountryName}</div>
			<div className="row-span-2 col-span-2 mx-auto">
				<AvatarsList />
			</div>
		</div>
	)
}

export default PersonCard
