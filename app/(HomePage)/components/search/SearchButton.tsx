'use client'

import React, { useEffect, useState } from 'react'

type Params = {
	query: string
	label: string
	isEndOfList: boolean
	isSearching: boolean
	setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const SearchButton = ({
	query,
	label,
	isEndOfList,
	isSearching,
	setIsSearching,
	setTasks
}: Params) => {
	const [page, setPage] = useState(1)
	const [hasTask, setHasTask] = useState(true)

	const searchTasks = async () => {
		const newQuery = query.replace(' ', '+')
		await fetch(`/api/searchTasks?query=${query}+is:open${label}&page=${page}`)
			.then((res) => res.json())
			.then((data: Task[]) => {
				setTasks((e) => [...e, ...data])
				console.log(data)
				if (data.length == 0) {
					setHasTask(false)
				}
			})
		setPage((e) => e + 1)
	}

	const handleClick = async () => {
		setTasks([])
		setIsSearching(true)
		searchTasks()
	}

	useEffect(() => {
		let ignore = false
		if (isSearching && hasTask && !ignore) {
			searchTasks()
			console.log('page= ' + page)
		}

		return () => {
			ignore = true
		}
	}, [isEndOfList])

	return <button onClick={handleClick}>click to search</button>
}

export default SearchButton
