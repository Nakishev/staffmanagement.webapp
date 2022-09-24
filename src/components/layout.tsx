import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './ui/Footer'
import LineHorizontal from './ui/LineHorizontal'
import NavBar from './ui/NavBar'

function Layout() {
	return (
		<div className="flex flex-col h-screen bg-white">
			<NavBar />

			<Outlet />

			<div>
				<LineHorizontal />
				<Footer />
			</div>
		</div>
	)
}

export { Layout }
