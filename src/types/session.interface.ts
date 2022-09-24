import { IPerson } from './person.interface'
import { IProject } from './project.interface'

export interface ISession {
	sessionId: string
	sessionProjectRef?: IProject
	sessionPositionName?: string
	sessionIsPassed: string
	sessionScore: number
	sessionPerson: IPerson
	sessionDate: string
}
