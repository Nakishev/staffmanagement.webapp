import React from 'react'
import LineHorizontal from '../../components/ui/LineHorizontal'

const RecentSessions = () => {
	return (
		<div className="h-auto flex items-top py-4 text-grey bg-white">
			<div className="flex -space-x-2 overflow-hidden">
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
					src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
					src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
					src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
					alt=""
				/>
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
			</div>
		</div>
	)
}

export default RecentSessions
