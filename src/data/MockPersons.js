import { IPerson } from '../types/person.interface'

/*
interface IPerson {
	personId: string
	personFirstName: number
	personLastName: string
	personPositionName?: string
	personAvgScore: number
}
*/

const persons: Array<IPerson> = [
	{
		personId: '1',
		personFirstName: 'Дмитрий',
		personLastName: 'Качанов',
		personPositionName: 'Team Lead',
		personAvgScore: 64,
		personAvatar: 'https://avatarfiles.alphacoders.com/117/117577.jpg',
	},
	{
		personId: '1',
		personFirstName: 'Роман',
		personLastName: 'Углов',
		personPositionName: 'Middle .NET Developer',
		personAvgScore: 47,
		personAvatar: 'https://avatarfiles.alphacoders.com/117/thumb-117599.jpg',
	},
	{
		personId: '3',
		personFirstName: 'Сергей',
		personLastName: 'Александров',
		personPositionName: 'QA Lead',
		personAvgScore: 58,
		personAvatar: 'https://avatarfiles.alphacoders.com/149/149508.jpg',
	},
]

export default persons
