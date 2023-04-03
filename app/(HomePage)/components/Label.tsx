'use client'

import { getLabelColor } from '@/app/lib/getLabelColor'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Params = {
	label: string
	route: string
	setLabel: React.Dispatch<React.SetStateAction<string>>
}

const Label = ({ label, route, setLabel }: Params) => {
	let primaryColor = ''
	let bgColor = ''
	let borderColor = getLabelColor(label)
	switch (route) {
		case 'task':
			primaryColor = 'base-dark'
			bgColor = 'base-light'
			break
		case 'search':
			primaryColor = 'base-light'
			bgColor = 'base-dark'
	}
	// switch (label) {
	// 	case 'open':
	// 		borderColor = 'open'
	// 		break
	// 	case 'in_progress':
	// 		borderColor = 'in-progress'
	// 		break
	// 	case 'done':
	// 		borderColor = 'done'
	// 		break
	// 	default:
	// 		borderColor = primaryColor
	// }
	return (
		<div
			className={`rounded-small w-max border-${borderColor} border-2 overflow-hidden p-1 shrink-0 font-medium`}
		>
			<select
				value={label}
				onChange={(e) => setLabel(e.target.value)}
				className={`appearance-none bg-${bgColor} text-${primaryColor} text-right px-2`}
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
