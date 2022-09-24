import React, { useState } from 'react'
import Footer from '../../components/ui/Footer'
import LineHorizontal from '../../components/ui/LineHorizontal'
import NavBar from '../../components/ui/NavBar'
import {
	useAddPersonMutation,
	useGetPersonsQuery,
	useUpdatePersonMutation,
} from '../../redux/personsAPI'
import {
	useAddPersonPositionMutation,
	useGetPersonPositionsQuery,
	useUpdatePersonPositionMutation,
} from '../../redux/personpositionsAPI'
import Box from '@mui/material/Box'
import {
	DataGrid,
	GridCellEditCommitParams,
	GridCellEditStopParams,
	GridCellEditStopReasons,
	GridColDef,
	GridRowModel,
	GridValueGetterParams,
	MuiEvent,
} from '@mui/x-data-grid'
import { IPersonDTO } from '../../redux/person.types'
import { IPerson } from '../../types/person.interface'
import { IPersonPositionDTO } from '../../redux/personposition.types'
import PersonCard from '../../components/forms/PersonCard'
import { IPositionDTO } from '../../redux/position.types'
import {
	useAddPositionMutation,
	useGetPositionsQuery,
	useUpdatePositionMutation,
} from '../../redux/positionsAPI'
import BackgroundBox from '../../components/ui/BackgroundBox'
import Header from '../../components/ui/Header'
import { FormControl, Stack, TextField } from '@mui/material'
import Button from '../../components/ui/Button'

function Persons() {
	const { data, isLoading, error } = useGetPersonsQuery()

	const emptyPersonPosition: IPersonPositionDTO[] = [
		{
			personId: '0',
			positionId: '0',
			positionName: 'string',
		},
	]

	const emptyData: IPersonDTO[] = [
		{
			id: '0',
			firstName: 'not available',
			lastName: 'not available',
			avatarUrl: 'not available',
			positions: emptyPersonPosition,
		},
	]

	const dataToShow: IPersonDTO[] = data ? data : emptyData

	const persons: Array<IPerson> = dataToShow.map(x => {
		const container: IPerson = {
			personId: x.id,
			personFirstName: x.firstName,
			personLastName: x.lastName,
			personPositionName: 'QA Lead',
			personAvgScore: 90,
			personAvatar: x.avatarUrl
				? x.avatarUrl
				: 'https://www.w3schools.com/howto/img_avatar.png',
			personPositions: x.positions.map(positionDto => ({
				positionId: positionDto.positionId,
				positionName: positionDto.positionName,
			})),
		}
		return container
	})

	const [newPersonFirstName, setNewPersonFirstName] = useState('')
	const [newPersonLastName, setNewPersonLastName] = useState('')
	const [newPersonEmail, setNewPersonEmail] = useState('')
	const [newPersonSkype, setNewPersonSkype] = useState('')
	const [newPersonComment, setNewPersonComment] = useState('')
	const [addPerson, { isError }] = useAddPersonMutation()

	const handleAddPerson = async () => {
		if (newPersonFirstName && newPersonLastName) {
			await addPerson({
				firstName: newPersonFirstName,
				lastName: newPersonLastName,
				primaryEmail: newPersonEmail ? newPersonEmail : '',
				skype: newPersonSkype ? newPersonSkype : '',
				comment: newPersonComment ? newPersonComment : '',
			}).unwrap()
			setNewPersonComment('')
			setNewPersonEmail('')
			setNewPersonFirstName('')
			setNewPersonLastName('')
			setNewPersonSkype('')
		}
	}

	return (
		<div className="flex h-screen">
			<BackgroundBox>
				<Header title="Persons" />
				<Stack direction="row" spacing={2} margin={2}>
					<Box sx={{ minWidth: 150 }}>
						<FormControl sx={{ m: 1, minWidth: 150 }} size="small">
							<TextField
								id="outlined-basic"
								label="First Name"
								variant="outlined"
								size="small"
								value={newPersonFirstName}
								onChange={e => setNewPersonFirstName(e.target.value)}
							/>
						</FormControl>
					</Box>
					<Box>
						<FormControl sx={{ m: 1, minWidth: 150 }} size="small">
							<TextField
								id="filled-basic"
								label="Last Name"
								variant="outlined"
								size="small"
								value={newPersonLastName}
								onChange={e => setNewPersonLastName(e.target.value)}
							/>
						</FormControl>
					</Box>
					<Box sx={{ minWidth: 150 }}>
						<FormControl sx={{ m: 1, minWidth: 150 }} size="small">
							<TextField
								id="outlined-basic"
								label="Email"
								variant="outlined"
								size="small"
								value={newPersonEmail}
								onChange={e => setNewPersonEmail(e.target.value)}
							/>
						</FormControl>
					</Box>
					<Box>
						<FormControl sx={{ m: 1, minWidth: 150 }} size="small">
							<TextField
								id="filled-basic"
								label="Skype"
								variant="outlined"
								size="small"
								value={newPersonSkype}
								onChange={e => setNewPersonSkype(e.target.value)}
							/>
						</FormControl>
					</Box>
					<Box>
						<FormControl sx={{ m: 1, minWidth: 150 }} size="small">
							<TextField
								id="filled-basic"
								label="Comment"
								variant="outlined"
								size="small"
								value={newPersonComment}
								onChange={e => setNewPersonComment(e.target.value)}
							/>
						</FormControl>
					</Box>
					<FormControl sx={{ m: 2, minWidth: 150 }}>
						<Button buttonLabel="Add Person" onButtonClick={handleAddPerson} />
					</FormControl>
				</Stack>
				<div className="flex grow place-content-center ">
					<ul className="flex flex-wrap flex-row mx-2 my-2 place-content-start">
						{persons.map(person => (
							<li className="mx-2" key={person.personId}>
								<PersonCard {...person} />
							</li>
						))}
					</ul>
				</div>
			</BackgroundBox>
		</div>
	)
}

export default Persons
