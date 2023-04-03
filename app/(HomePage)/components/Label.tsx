'use client'

import { getLabelBorderColor, getLabelTextColor } from '@/app/lib/getLabelColor'

type Params = {
	label: string
	route: string
	setLabel: React.Dispatch<React.SetStateAction<string>>
}

const Label = ({ label, route, setLabel }: Params) => {
	let bgColor = ''
	let textColor = getLabelTextColor(label)
	const borderColor = getLabelBorderColor(label)

	switch (route) {
		case 'task':
			textColor = 'text-primary-content-dark'
			bgColor = 'bg-base-light'
			break
		case 'search':
			textColor = 'text-primary-content-light'
			bgColor = 'bg-base-dark'
	}

	return (
		<div
			className={`rounded-small w-max ${borderColor} border-2 overflow-hidden p-1 shrink-0 font-medium`}
		>
			<select
				value={label}
				onChange={(e) => setLabel(e.target.value)}
				className={`appearance-none ${bgColor} ${textColor} text-right px-2`}
			>
				{route == 'search' && <option value=''>all</option>}
				<option value='open'>open</option>
				<option value='in_progress'>in progress</option>
				<option value='done'>done</option>
			</select>
		</div>
	)
}

export default Label
