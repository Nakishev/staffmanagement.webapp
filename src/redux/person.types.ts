export interface Position {
	personId: string
	positionId: string
	positionName: string
}

export interface IPersonDTO {
	id: string
	firstName: string
	lastName: string
	avatarUrl?: string
	primaryEmail?: string
	skype?: string
	comments?: string
	positions: Position[]
}
