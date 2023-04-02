'use client'

import React from 'react'

type Params = {
	value: string
	onChange: React.ChangeEventHandler<HTMLInputElement>
}

const SearchBar = ({ value, onChange }: Params) => {
	return <input type='text' onChange={onChange} />
}

export default SearchBar
