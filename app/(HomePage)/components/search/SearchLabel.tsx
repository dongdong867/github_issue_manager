'use client'

import React from 'react'

type Params = {
	label: string
	setLabel: React.Dispatch<React.SetStateAction<string>>
}

const SearchLabel = ({ label, setLabel }: Params) => {
	return (
		<select value={label} onChange={(e) => setLabel(e.target.value)}>
			<option value=''>all</option>
			<option value='+label:open'>open</option>
			<option value='+label:in_process'>in process</option>
			<option value='+label:done'>done</option>
		</select>
	)
}

export default SearchLabel
