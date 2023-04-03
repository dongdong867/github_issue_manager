import React, { useState } from 'react'
import SearchButton from './search/SearchButton'
import SearchLabel from './Label'
import CreateButton from './create/CreateButton'

type Params = {
	isEndOfList: boolean
	isSearching: boolean
	setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
	setIsCreating: React.Dispatch<React.SetStateAction<boolean>>
}

const TopBar = ({ isEndOfList, isSearching, setIsSearching, setTasks, setIsCreating }: Params) => {
	const [query, setQuery] = useState('')
	const [label, setLabel] = useState('all')

	return (
		<div className='sticky top-0 w-screen bg-base-dark px-5 py-3 flex justify-around gap-x-3 text-lg'>
			<SearchLabel label={label} route='search' setLabel={setLabel} />
			<input
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className='w-10 grow shrink sm:w-max rounded-small px-2 font-semibold'
			/>
			<SearchButton
				key={query}
				query={query}
				label={label}
				isEndOfList={isEndOfList}
				isSearching={isSearching}
				setIsSearching={setIsSearching}
				setTasks={setTasks}
			/>
			<CreateButton setIsCreating={setIsCreating} />
		</div>
	)
}

export default TopBar
