import { IVacancy } from '../types/vacancy.interface'

const projects: Array<IVacancy> = [
	{
		vacancyId: '1',
		vacancyProjectRef: {
			projectId: '2',
			projectName: 'Teklynx',
			projectCountryName: 'France',
		},
		vacancyPositionName: 'Middle Net Developer',
		vacancyRequiredNumber: 2,
		vacancyApplicantsNumber: 1,
	},
	{
		vacancyId: '2',
		vacancyProjectRef: {
			projectId: '1',
			projectName: 'Aruba',
			projectCountryName: 'Italy',
		},
		vacancyPositionName: 'Middle Net Developer',
		vacancyRequiredNumber: 1,
		vacancyApplicantsNumber: 1,
	},
]

export default projects
