import { Box } from '@mui/material'
import React, { FC, ReactNode } from 'react'

const BackgroundBox: FC<any> = ({ children }: any) => {
	return (
		<Box
			sx={{ width: '65%', border: 1, borderColor: 'divider' }}
			className="mx-auto rounded-md my-4 shadow-md bg-white"
		>
			{children}
		</Box>
	)
}

export default BackgroundBox
