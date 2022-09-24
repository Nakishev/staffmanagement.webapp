import React from 'react'

interface IButton {
	buttonLabel: string
	onButtonClick?: () => void
}

const Button = ({ buttonLabel, onButtonClick }: IButton) => {
	return (
		<button className="border rounded-md my-2 mx-0 px-3 py-2 bg-orange-400 text-white" onClick={onButtonClick}>
			{buttonLabel}
		</button>
	)
}

export default Button
