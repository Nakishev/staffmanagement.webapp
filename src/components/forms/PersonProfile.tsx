import { Chip } from '@mui/material'
import React from 'react'
import { IPersonDTO } from '../../redux/person.types'
import { PaperClipIcon } from '@heroicons/react/solid'

const PersonProfile = (person: IPersonDTO) => {
	return (
		<div className="overflow-hidden bg-white shadow sm:rounded-lg">
			<div className="flex flex-row w-screen px-4 py-5 sm:px-6">
				<img
					className="w-14 h-14 rounded-full ring-2 ring-white scale-110"
					src={person.avatarUrl}
					alt=""
				/>
				<h3 className="text-lg font-medium leading-6 text-gray-900  my-auto mx-4">
					{person.firstName} {person.lastName}
				</h3>
				<p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
			</div>
			<div className="border-t border-gray-200">
				<dl>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Position(s)</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							<div className="col-span-4 place-items-start text-xs">
								{person.positions?.map(position => (
									<Chip
										className="mx-1"
										label={position.positionName}
										color="info"
										size="small"
									/>
								))}
							</div>
						</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Email address</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							{person.primaryEmail}
						</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Skype</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							{person.skype}
						</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Comments</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							{person.comments}
						</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Attachments</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							<ul
								role="list"
								className="divide-y divide-gray-200 rounded-md border border-gray-200"
							>
								<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
									<div className="flex w-0 flex-1 items-center">
										<PaperClipIcon
											className="h-5 w-5 flex-shrink-0 text-gray-400"
											aria-hidden="true"
										/>
										<span className="ml-2 w-0 flex-1 truncate">
											resume_QALead_MarkaDevelopment.pdf
										</span>
									</div>
									<div className="ml-4 flex-shrink-0">
										<a
											href="#"
											className="font-medium text-indigo-600 hover:text-indigo-500"
										>
											Download
										</a>
									</div>
								</li>
								<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
									<div className="flex w-0 flex-1 items-center">
										<PaperClipIcon
											className="h-5 w-5 flex-shrink-0 text-gray-400"
											aria-hidden="true"
										/>
										<span className="ml-2 w-0 flex-1 truncate">
											resume_QALead_MarkaSoftware.pdf
										</span>
									</div>
									<div className="ml-4 flex-shrink-0">
										<a
											href="#"
											className="font-medium text-indigo-600 hover:text-indigo-500"
										>
											Download
										</a>
									</div>
								</li>
							</ul>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	)
}

export default PersonProfile
