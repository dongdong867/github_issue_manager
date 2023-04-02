'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Params = {
	query: string
	page: number
	isSearching: boolean
	setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const SearchButton = ({ query, page, isSearching, setIsSearching, setTasks }: Params) => {
	const router = useRouter()
	const handleClick = async () => {
		setIsSearching(true)
		await fetch(`/api/searchTasks?query=${query}&searchLabel=all&page=${page}`)
			.then((res) => res.json())
			.then((data) => setTasks(data))
		router.refresh()
	}

	useEffect(() => {
		if (isSearching) {
			handleClick()
		}
	}, [page])

	return <button onClick={handleClick}>click to search</button>
}

export default SearchButton
