import { IPerson } from './person.interface'
import { IProject } from './project.interface'

export interface IVacancy {
	vacancyId: string
	vacancyProjectRef?: IProject
	vacancyPositionName: string
	vacancyRequiredNumber: number
	vacancyApplicantsNumber: number
	vacancyPersons?: IPerson[]
}
