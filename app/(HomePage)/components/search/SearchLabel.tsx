'use client'

import React, { useEffect } from 'react'

type Params = {
	label: string
	setLabel: React.Dispatch<React.SetStateAction<string>>
}

const SearchLabel = ({ label, setLabel }: Params) => {
	return (
		<div className='rounded-small border-primary border-2 overflow-hidden p-1 shrink-0'>
			<select
				value={label}
				onChange={(e) => setLabel(e.target.value)}
				className='appearance-none bg-base-dark text-primary-content-light text-right px-2'
			>
				<option value=''>all</option>
				<option value='+label:open'>open</option>
				<option value='+label:in_progress'>in progress</option>
				<option value='+label:done'>done</option>
			</select>
		</div>
	)
}

export default SearchLabel
