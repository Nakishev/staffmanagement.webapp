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
	GridValueGetterParams,
	MuiEvent,
} from '@mui/x-data-grid'
import { IRequirementCategory } from '../../types/requirementcategory.interface'
import Header from '../../components/ui/Header'
import { IRequirementCategoryDTO } from '../../redux/requirementcategory.dto.interface'
import {
	useAddCategoryMutation,
	useGetCategoriesQuery,
	useUpdateCategoryMutation,
} from '../../redux/requirementcategories.API'
import { FormControl, Stack, TextField } from '@mui/material'
import Button from '../../components/ui/Button'

function RequirementCategories() {
	const { data, isLoading, error } = useGetCategoriesQuery()
	const [newCategoryName, setNewCategoryName] = useState('')
	const [newCategoryDescription, setNewCategoryDescription] = useState('')
	const [addCategory, { isError }] = useAddCategoryMutation()
	const [updateCategory] = useUpdateCategoryMutation()
	const [snackbar, setSnackbar] = React.useState<Pick<
		AlertProps,
		'children' | 'severity'
	> | null>(null)

	const handleAddCategory = async () => {
		if (newCategoryName) {
			await addCategory({
				name: newCategoryName,
				description: newCategoryDescription ? newCategoryDescription : '',
			}).unwrap()
			setNewCategoryName('')
			setNewCategoryDescription('')
		}
	}

	const handleUpdateCategory = async (payload: IRequirementCategoryDTO) => {
		if (payload.id) {
			await updateCategory({ payload }).unwrap()
		}
	}

	const handleCommit = (e: GridCellEditCommitParams) => console.log(e)

	const processRowUpdate = (newRow: GridRowModel, oldRow: GridRowModel) => {
		console.log(newRow)
		handleUpdateCategory(newRow)
		return newRow
	}

	const handleProcessRowUpdateError = React.useCallback((error: Error) => {
		setSnackbar({ children: error.message, severity: 'error' })
	}, [])

	console.log(error)

	const columns: GridColDef[] = [
		{
			field: 'name',
			headerName: 'Name',
			width: 300,
			editable: true,
		},
		{
			field: 'description',
			headerName: 'Description',
			width: 400,
			editable: true,
		},
	]

	const emptyData: IRequirementCategory[] = [
		{ id: '0', name: 'category', description: 'category description' },
	]

	return (
		<div className="flex flex-col h-screen">
			<Box
				sx={{ width: '65%', border: 1, borderColor: 'divider' }}
				className="mx-auto rounded-md my-4 shadow-md bg-white"
			>
				<Header title="Requirement Categories" />
				<Stack direction="row" spacing={2}>
					<Box sx={{ minWidth: 150 }}>
						<FormControl sx={{ m: 1, minWidth: 150 }} size="small">
							<TextField
								id="outlined-basic"
								label="Name"
								variant="outlined"
								size="small"
								value={newCategoryName}
								onChange={e => setNewCategoryName(e.target.value)}
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
								value={newCategoryDescription}
								onChange={e => setNewCategoryDescription(e.target.value)}
							/>
						</FormControl>
					</Box>

					<FormControl sx={{ m: 1, minWidth: 150 }}>
						<Button
							buttonLabel="Add Category"
							onButtonClick={handleAddCategory}
						/>
					</FormControl>
				</Stack>
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
						/>
					</Box>
				</div>
			</Box>
		</div>
	)
}

export default RequirementCategories
