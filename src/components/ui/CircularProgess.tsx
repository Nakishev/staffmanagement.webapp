import React, {FC} from 'react'
import CircularProgressWithLabel from '@mui/material/CircularProgress'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { blue, orange, purple } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const theme = createTheme({
	palette: {
		primary: {
			// Purple and green play nicely together.
			main: orange[500],
		},
		secondary: {
			// This is green.A700 as hex.
			main: '#11cb5f',
		},
		text: {
			primary: '#11aa5f',
		},
	},
})

const CircularProgess: FC<{ progressValue: number }> = ({ progressValue }) =>{
  return (
    <ThemeProvider theme={theme}>
    <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgressWithLabel
            variant="determinate"
            value={progressValue}
        />
        <Typography position="absolute" variant="body2">
            {progressValue}
        </Typography>
    </Box>
</ThemeProvider>
  )
}

export default CircularProgess