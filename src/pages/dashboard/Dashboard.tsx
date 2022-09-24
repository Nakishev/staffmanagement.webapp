import React from 'react'
import PersonCard from '../../components/forms/PersonCard'
import PersonsList from '../../components/forms/PersonsList'
import ProjectsList from '../../components/forms/ProjectsList'
import SessionsList from '../../components/forms/SessionsList'
import TimeSheetsList from '../../components/forms/TimeSheetList'
import VacanciesList from '../../components/forms/VacanciesList'
import Footer from '../../components/ui/Footer'
import Header from '../../components/ui/Header'
import LineHorizontal from '../../components/ui/LineHorizontal'
import NavBar from '../../components/ui/NavBar'
import RecentSessions from './RecentSessions'

function Dashboard() {
	return (
		<div className="flex flex-col bg-white">
			{/*Navigation bar*/}

			{/*Dashboard content*/}
			<div className="grow grid grid-cols-3 grid-rows-2 place-content-center">
				{/*Grid 1:1*/}
				{/*Active Projects*/}
				<div className="p-7">
					<Header title="Active Projects" />
					<ProjectsList />
				</div>
				{/*Grid 1:2*/}
				{/*Top Performers*/}
				<div className="p-7">
					<div className="container">
						<Header title="Top Performers" />
						<PersonsList />
					</div>
				</div>
				{/*Grid 1:3*/}
				{/*Recent Sessions*/}
				<div className="p-7">
					<Header title="Recent Interview Sessions" />
					<SessionsList />
				</div>
				{/*Grid 2:1*/}
				{/*Opened Vacancies*/}
				<div className="p-7">
					<LineHorizontal />
					<Header title="Opened Vacancies" />
					<VacanciesList />
				</div>
				{/*Grid 2:2*/}
				{/*Underperformers*/}
				<div className="p-7">
					<LineHorizontal />
					<Header title="Underperformers" />
					<PersonsList />
				</div>
				{/*Grid 2:3*/}
				{/*Days Off*/}
				<div className="p-7">
					<LineHorizontal />
					<Header title="Days Off" />
					<TimeSheetsList />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
