import { ITimeSheet } from '../types/timesheet.interface'

/*
interface IPerson {
	personId: string
	personFirstName: number
	personLastName: string
	personPositionName?: string
	personAvgScore: number
}
*/

const timesheets: Array<ITimeSheet> = [
	{
		timeSheetRowId: '1',
		timeSheetPersonId: '3',
		timeSheetFirstName: 'Сергей',
		timeSheetLastName: 'Александров',
		timeSheetDate: '18.07.22-29.07.22',
		timeSheetType: 'Отпуск',
		timeSheetDuration: '80ч.',
	},
]

export default timesheets
