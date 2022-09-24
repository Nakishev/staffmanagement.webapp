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

import React, { useState } from 'react'
import { IRequirement } from '../../types/requirement.interface'

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

const processRowUpdate = (newRow: GridRowModel, oldRow: GridRowModel) => {
	console.log(newRow)
	//handleUpdateRequirement(newRow)
	return newRow
}

const Table = () => {
	const handleProcessRowUpdateError = React.useCallback((error: Error) => {
		//setSnackbar({ children: error.message, severity: 'error' })
	}, [])

	const [selectionModel, setSelectionModel] =
		React.useState<GridSelectionModel>([])

	return (
		<div>
			<DataGrid
				rows={emptyData}
				columns={columns}
				pageSize={15}
				rowsPerPageOptions={[25]}
				checkboxSelection
				disableSelectionOnClick
				experimentalFeatures={{ newEditingApi: true }}
				onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
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
		</div>
	)
}

export default Table
