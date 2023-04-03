'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

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

	const router = useRouter()

	let labelValue = ''
	switch (label) {
		case 'open':
			labelValue = '+label:open'
			break
		case 'in_progress':
			labelValue = '+label:in_progress'
			break
		case 'done':
			labelValue = '+label:done'
			break
		default:
			labelValue = ''
	}

	const searchTasks = async () => {
		await fetch(`/api/searchTasks?query=${query}+is:open${labelValue}&page=${page}`, {
			cache: 'no-cache'
		})
			.then((res) => res.json())
			.then((data: Task[]) => {
				setTasks((e) => [...e, ...data])
				if (data.length == 0) {
					setHasTask(false)
					setPage(1)
				}
			})
		setPage((e) => e + 1)
	}

	const handleClick = async () => {
		setIsSearching(true)
		setPage(1)
		setTasks([])
		router.refresh()
	}

	useEffect(() => {
		let ignore = false
		if (isSearching && hasTask && !ignore && isEndOfList) {
			searchTasks()
		}

		return () => {
			ignore = true
		}
	}, [isEndOfList])

	return (
		<button
			onClick={handleClick}
			className='rounded-small bg-button px-2 py-1 text-primary-content-light font-medium flex justify-center place-items-center'
		>
			<FiSearch size={25} />
		</button>
	)
}

export default SearchButton
