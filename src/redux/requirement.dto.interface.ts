export interface IRequirementMinimalDTO {
	id: string
	name: string
}

export interface IRequirementDTO {
	id: string
	name: string
	description: string
	requirementCategoryId: string
	requirementCategoryName: string
}

export interface IPersonRequirementDTO {
	presonId: string
	requirementsId: string[]
}
