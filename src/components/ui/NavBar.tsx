import React, { FC } from 'react'
import logo from '../../assets/Main_logo.png'
import avatar from '../../assets/Avatar.png'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ')
}

const NavBar: FC = () => {
	return (
		<div className="w-full h-20 flex justify-between items-center px-8 text-grey bg-white drop-shadow-xl z-50">
			<img src={logo} alt="Marka Development" className="h-12"></img>
			<div className="flex justify-end  place-items-center">
				<ul className="flex items-center pr-5">
					<li className="p-4">
						<Menu as="div" className="relative inline-block text-left">
							<div>
								<Menu.Button className="inline-flex justify-center w-full rounded-md bg-white text-sm font-medium text-gray-700 ">
									<Link to={'/'}>Dashboard</Link>
								</Menu.Button>
							</div>
						</Menu>
					</li>

					<li className="p-4">
						<Menu as="div" className="relative inline-block text-left">
							<div>
								<Menu.Button className="inline-flex justify-center w-full rounded-md bg-white text-sm font-medium text-gray-700 ">
									Catalogue
									<ChevronDownIcon
										className="-mr-1 ml-2 h-5 w-5"
										aria-hidden="true"
									/>
								</Menu.Button>
							</div>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<a
													href="/persons"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Persons
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Positions
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="/requirements"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Requirements
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="/requirementcategories"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Requirement Categories
												</a>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</li>

					<li className="p-4">
						<Menu as="div" className="relative inline-block text-left">
							<div>
								<Menu.Button className="inline-flex justify-center w-full rounded-md bg-white text-sm font-medium text-gray-700 ">
									Interview
									<ChevronDownIcon
										className="-mr-1 ml-2 h-5 w-5"
										aria-hidden="true"
									/>
								</Menu.Button>
							</div>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Questions
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Templates
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Sessions
												</a>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</li>

					<li className="p-4">
						<Menu as="div" className="relative inline-block text-left">
							<div>
								<Menu.Button className="inline-flex justify-center w-full rounded-md bg-white text-sm font-medium text-gray-700 ">
									Settings
								</Menu.Button>
							</div>
						</Menu>
					</li>
				</ul>
				<img
					src={avatar}
					alt="Avatar"
					className="h-10 rounded-full drop-shadow-xl"
				></img>
			</div>
		</div>
	)
}

export default NavBar
