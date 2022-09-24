export type personPosition = {
	positionId: string
	positionName: string
}

export interface IPerson {
	personId: string
	personFirstName: string
	personLastName: string
	personPositionName: string
	personAvgScore: number
	personAvatar: string
	personPositions?: personPosition[]
}
