import React, { useState } from 'react'
import SearchBar from './search/SearchBar'
import SearchButton from './search/SearchButton'

type Params = {
	page: number
	isSearching: boolean
	setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const Search = ({ page, isSearching, setIsSearching, setTasks }: Params) => {
	const [query, setQuery] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	return (
		<>
			<SearchBar value={query} onChange={handleChange} />
			<SearchButton
				query={query}
				page={page}
				isSearching={isSearching}
				setIsSearching={setIsSearching}
				setTasks={setTasks}
			/>
		</>
	)
}

export default Search
