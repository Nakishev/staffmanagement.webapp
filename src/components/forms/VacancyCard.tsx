import React from 'react'
import { IVacancy } from '../../types/vacancy.interface'

const VacancyCard = (vacancy: IVacancy) => {
	return (
		<div className="grid grid-cols-3 grid-rows-2 grid-flow-col text-left p-1">
			<div className="col col-span-2">
				{vacancy.vacancyProjectRef?.projectName}
			</div>
			<div className="col col-span-2 text-xs">
				{vacancy.vacancyPositionName}
			</div>
			<div className="row-span-2 mx-auto font-bold">
				{vacancy.vacancyRequiredNumber}/{vacancy.vacancyApplicantsNumber}
			</div>
		</div>
	)
}

export default VacancyCard
