import React from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Persons from './pages/persons/Persons'
import Requirements from './pages/requirements/Requirements'
import { Provider } from 'react-redux'
import { store } from './redux'
import RequirementCategories from './pages/requirementcategories/RequirementCategories'
import { Layout } from './components/layout'
import PersonDetails from './pages/persondetails/PersonDetails'

function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="/persons" element={<Persons />} />
					<Route path="/person/:id" element={<PersonDetails />} />
					<Route path="/requirements" element={<Requirements />} />
					<Route
						path="/requirementcategories"
						element={<RequirementCategories />}
					/>
				</Route>
			</Routes>
		</Provider>
	)
}

export default App
