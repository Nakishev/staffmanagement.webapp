import { IPerson } from './person.interface'

export interface IProject {
	projectId: string
	projectName: string
	projectCountryName: string
	projectPersons?: IPerson[]
}
