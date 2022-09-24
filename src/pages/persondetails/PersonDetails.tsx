import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import { useGetPersonQuery } from '../../redux/personsAPI'
import { IPersonPositionDTO } from '../../redux/personposition.types'
import { IPersonRequirementDTO } from '../../redux/requirement.dto.interface'
import { IPersonDTO } from '../../redux/person.types'
import Modal from '../../components/ui/Modal'
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
import { IRequirementDTO } from '../../redux/requirement.dto.interface'
import {
	useGetPersonLinkedRequirementsQuery,
	useGetPersonUnlinkedRequirementsQuery,
	useAddPersonRequirementMutation,
} from '../../redux/requirements.api'
import { Chip } from '@mui/material'
import PersonProfile from '../../components/forms/PersonProfile'
import Button from '../../components/ui/Button'
import Header from '../../components/ui/Header'

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

const columns: GridColDef[] = [
	{
		field: 'name',
		headerName: 'Name',
		width: 150,
		editable: false,
	},
	{
		field: 'requirementCategoryName',
		headerName: 'Category',
		width: 150,
		editable: false,
	},
]

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

const PersonDetails = () => {
	const [value, setValue] = React.useState(0)
	const { id } = useParams()
	const { data } = useGetPersonQuery(id ? id : '0')
	const { data: requirementsLinkedData } = useGetPersonLinkedRequirementsQuery(
		id ? id : '0'
	)

	const [addPersonRequirement, { isError }] = useAddPersonRequirementMutation()

	const { data: requirementsUnlinkedData } =
		useGetPersonUnlinkedRequirementsQuery(id ? id : '0')

	const emptyPersonPosition: IPersonPositionDTO[] = [
		{
			personId: '0',
			positionId: '0',
			positionName: 'string',
		},
	]

	const emptyData: IPersonDTO = {
		id: '0',
		firstName: 'not available',
		lastName: 'not available',
		avatarUrl: 'not available',
		positions: emptyPersonPosition,
	}

	const emptyRequirementsData: IRequirementDTO[] = [
		{
			id: '0',
			name: 'requirement',
			description: 'requirement description',
			requirementCategoryId: 'category id',
			requirementCategoryName: 'category name',
		},
	]

	const dataToShow = data ? data : emptyData

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	const [linkedSelectionModel, setLinkedSelectionModel] =
		React.useState<GridSelectionModel>([])

	const [unlinkedSelectionModel, setUnlinkedSelectionModel] =
		React.useState<GridSelectionModel>([])

	const handleAddPersonRequirement = async () => {
		if (unlinkedSelectionModel) {
			await addPersonRequirement({
				personId: id,
				requirementsId: unlinkedSelectionModel,
			}).unwrap()
		}
	}

	const handleRemovePersonRequirement = async () => {
		if (linkedSelectionModel) {
			await addPersonRequirement({
				personId: id,
				requirementsId: linkedSelectionModel,
			}).unwrap()
		}
	}

	const [showAddRequirements, setShowAddRequirements] = React.useState(false)
	const onShowAddSkillsClick = () => setShowAddRequirements(true)

	return (
		<div className="flex flex-grow round-sm shadow-sm">
			<Box
				sx={{ width: '65%', border: 1, borderColor: 'divider' }}
				className="mx-auto rounded-md my-4 shadow-md bg-white"
			>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="tabs">
						<Tab label="Profile" {...a11yProps(0)} />
						<Tab label="Skills" {...a11yProps(1)} />
						<Tab label="Skillmatching" {...a11yProps(2)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<div className="flex flex-grow w-4/5 mx-auto my-auto rounded-sm">
						<PersonProfile {...dataToShow} />
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<div className="grid grid-cols grid-cols-2 grid-rows-1 grid-flow-col ">
						<div className="mx-2">
							<Header title="Linked Requirements" />
							<Box sx={{ height: '600px' }}>
								<DataGrid
									rows={
										requirementsLinkedData
											? requirementsLinkedData
											: emptyRequirementsData
									}
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
									onSelectionModelChange={newSelectionModel => {
										console.log(newSelectionModel)
										setLinkedSelectionModel(newSelectionModel)
									}}
									selectionModel={linkedSelectionModel}
								/>
							</Box>
							<Button
								buttonLabel="Unlink Requirement"
								onButtonClick={handleRemovePersonRequirement}
							/>
						</div>
						<div className="mx-2">
							<Header title="Uninked Requirements" />
							<Box sx={{ height: '600px' }}>
								<DataGrid
									rows={
										requirementsUnlinkedData
											? requirementsUnlinkedData
											: emptyRequirementsData
									}
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
									onSelectionModelChange={newSelectionModel => {
										console.log(newSelectionModel)
										setUnlinkedSelectionModel(newSelectionModel)
									}}
									selectionModel={unlinkedSelectionModel}
								/>
							</Box>
							<Button
								buttonLabel="Link Requirement"
								onButtonClick={handleAddPersonRequirement}
							/>
						</div>
					</div>
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
			</Box>
		</div>
	)
}

export default PersonDetails
