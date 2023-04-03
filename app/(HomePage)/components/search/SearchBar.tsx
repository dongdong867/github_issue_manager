'use client'

import React from 'react'

type Params = {
	value: string
	onChange: React.ChangeEventHandler<HTMLInputElement>
}

const SearchBar = ({ value, onChange }: Params) => {
	return (
		<input
			type='text'
			onChange={onChange}
			className='w-10 grow shrink sm:w-max rounded-small px-2 font-semibold'
		/>
	)
}

export default SearchBar
