import React, { Children, FC, PropsWithChildren } from 'react'

const Header: FC<{ title: string }> = ({ title }) => {
	return (
		<div className="text-base text-gray-800 font-bold p-3 mx-auto">{title}</div>
	)
}

export default Header
