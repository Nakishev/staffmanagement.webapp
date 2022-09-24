import React, { useState } from 'react'
import Footer from '../../components/ui/Footer'
import LineHorizontal from '../../components/ui/LineHorizontal'
import NavBar from '../../components/ui/NavBar'
import Snackbar from '@mui/material/Snackbar'
import Alert, { AlertProps } from '@mui/material/Alert'
import Box from '@mui/material/Box'
import {
	DataGrid,
	GridCellEditCommitParams,
	GridCellEditStopParams,
	GridCellEditStopReasons,
	GridColDef,
	GridRowModel,
	GridSelectionModel,
	GridValueGetterParams,
	MuiEvent,
} from '@mui/x-data-grid'
import { IRequirement } from '../../types/requirement.interface'
import Header from '../../components/ui/Header'
import { IRequirementDTO } from '../../redux/requirement.dto.interface'
import {
	useGetRequirementsQuery,
	useAddRequirementMutation,
	useUpdateRequirementMutation,
} from '../../redux/requirements.api'

import { IRequirementCategoryDTO } from '../../redux/requirementcategory.dto.interface'
import {
	useAddCategoryMutation,
	useGetCategoriesQuery,
	useUpdateCategoryMutation,
} from '../../redux/requirementcategories.API'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '../../components/ui/Button'

function Requirements() {
	const { data, isLoading, error } = useGetRequirementsQuery()
	const { data: categoryData = [] } = useGetCategoriesQuery()
	const [newRequirementName, setNewRequirementName] = useState('')
	const [newRequirementDescription, setNewRequirementDescription] = useState('')
	const [addRequirement, { isError }] = useAddRequirementMutation()
	const [updateRequirement] = useUpdateRequirementMutation()
	const [snackbar, setSnackbar] = React.useState<Pick<
		AlertProps,
		'children' | 'severity'
	> | null>(null)

	const handleAddRequirement = async () => {
		if (newRequirementName) {
			await addRequirement({
				requirementCategoryId: newRequirementCategoryReference,
				name: newRequirementName,
				description: newRequirementDescription ? newRequirementDescription : '',
			}).unwrap()
			setNewRequirementName('')
			setNewRequirementDescription('')
		}
	}

	const handleUpdateRequirement = async (payload: IRequirementDTO) => {
		if (payload.id) {
			await updateRequirement({ payload }).unwrap()
		}
	}

	const handleCommit = (e: GridCellEditCommitParams) => console.log(e)

	const processRowUpdate = (newRow: GridRowModel, oldRow: GridRowModel) => {
		console.log(newRow)
		handleUpdateRequirement(newRow)
		return newRow
	}

	const handleProcessRowUpdateError = React.useCallback((error: Error) => {
		setSnackbar({ children: error.message, severity: 'error' })
	}, [])

	console.log(error)

	// table configuration
	const columns: GridColDef[] = [
		{
			field: 'requirementCategoryName',
			headerName: 'Category',
			width: 200,
			editable: true,
		},
		{
			field: 'name',
			headerName: 'Name',
			width: 200,
			editable: true,
		},
		{
			field: 'description',
			headerName: 'Description',
			width: 300,
			editable: true,
		},
	]

	const emptyData: IRequirement[] = [
		{
			id: '0',
			name: 'requirement',
			description: 'requirement description',
		},
	]

	const [newRequirementCategoryReference, newRequirementCategoryRef] =
		React.useState('')

	const handleChange = (event: SelectChangeEvent) => {
		newRequirementCategoryRef(event.target.value as string)
	}

	const [selectionModel, setSelectionModel] =
		React.useState<GridSelectionModel>([])

	return (
		<div className="flex flex-col h-screen">
			<Box
				sx={{ width: '65%', border: 1, borderColor: 'divider' }}
				className="mx-auto rounded-md my-4 shadow-md bg-white"
			>
				<Header title="Requirements" />
				<div className="">
					<Stack direction="row" spacing={2}>
						<Box sx={{ minWidth: 150 }}>
							<FormControl sx={{ m: 1, minWidth: 150 }} size="small">
								<InputLabel id="demo-simple-select-label">Category</InputLabel>
								<Select
									className=""
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={newRequirementCategoryReference}
									label="Category"
									onChange={handleChange}
								>
									{categoryData.map(x => {
										return <MenuItem value={x.id}>{x.name}</MenuItem>
									})}
								</Select>
							</FormControl>
						</Box>
						<Box sx={{ minWidth: 150 }}>
							<FormControl sx={{ m: 1, minWidth: 150 }} size="small">
								<TextField
									id="outlined-basic"
									label="Name"
									variant="outlined"
									size="small"
									value={newRequirementName}
									onChange={e => setNewRequirementName(e.target.value)}
								/>
							</FormControl>
						</Box>
						<Box>
							<FormControl sx={{ m: 1, minWidth: 150 }} size="small">
								<TextField
									id="filled-basic"
									label="Description"
									variant="outlined"
									size="small"
									value={newRequirementDescription}
									onChange={e => setNewRequirementDescription(e.target.value)}
								/>
							</FormControl>
						</Box>
						<FormControl sx={{ m: 1, minWidth: 150 }}>
							<Button
								buttonLabel="Add Requirement"
								onButtonClick={handleAddRequirement}
							/>
						</FormControl>
					</Stack>
				</div>
				<div className="grow">
					<Box sx={{ height: '600px' }} className="mx-2 my-2">
						<DataGrid
							rows={data ? data : emptyData}
							columns={columns}
							pageSize={15}
							rowsPerPageOptions={[25]}
							checkboxSelection
							disableSelectionOnClick
							experimentalFeatures={{ newEditingApi: true }}
							onCellEditStop={(
								params: GridCellEditStopParams,
								event: MuiEvent
							) => {
								console.log(params)
							}}
							processRowUpdate={processRowUpdate}
							onProcessRowUpdateError={handleProcessRowUpdateError}
							onSelectionModelChange={newSelectionModel => {
								console.log(newSelectionModel)
								setSelectionModel(newSelectionModel)
							}}
							selectionModel={selectionModel}
						/>
					</Box>
				</div>
				<div>
					<LineHorizontal />
				</div>
			</Box>
		</div>
	)
}

export default Requirements
