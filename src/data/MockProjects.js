import { IProject } from '../types/project.interface'

/*
interface IPerson {
	personId: string
	personFirstName: number
	personLastName: string
	personPositionName?: string
	personAvgScore: number
}
*/

const projects: Array<IProject> = [
	{
		projectId: '1',
		projectName: 'Aruba',
		projectCountryName: 'Italy',
	},
	{
		projectId: '2',
		projectName: 'Teklynx',
		projectCountryName: 'France',
	},
	{
		projectId: '3',
		projectName: 'ThinkSoft',
		projectCountryName: 'Poland',
	},
	{
		projectId: '4',
		projectName: 'Rest Step',
		projectCountryName: 'Switzerland',
	},
]

export default projects
