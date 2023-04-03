import React, { useState } from 'react'
import SearchBar from './search/SearchBar'
import SearchButton from './search/SearchButton'
import SearchLabel from './Label'

type Params = {
	isEndOfList: boolean
	isSearching: boolean
	setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const Search = ({ isEndOfList, isSearching, setIsSearching, setTasks }: Params) => {
	const [query, setQuery] = useState('')
	const [label, setLabel] = useState('all')

	return (
		<div className='sticky top-0 w-screen bg-base-dark px-5 py-3 flex justify-around gap-x-3 text-lg'>
			<SearchLabel label={label} route='search' setLabel={setLabel} />
			<SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
			<SearchButton
				key={query}
				query={query}
				label={label}
				isEndOfList={isEndOfList}
				isSearching={isSearching}
				setIsSearching={setIsSearching}
				setTasks={setTasks}
			/>
		</div>
	)
}

export default Search
