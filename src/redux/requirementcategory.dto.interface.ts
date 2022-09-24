import { IRequirementDTO } from './requirement.dto.interface'
import { IRequirementMinimalDTO } from './requirement.dto.interface'

export interface IRequirementCategoryDTO {
	id: string
	name: string
	description: string
	requirements?: IRequirementMinimalDTO[]
}
