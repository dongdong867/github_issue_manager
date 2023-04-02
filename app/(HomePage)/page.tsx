'use client'

import React, { useEffect, useState } from 'react'
import Task from './components/Task'
import Search from './components/Search'

export const revalidate = 0

const Home = () => {
	const [tasks, setTasks] = useState([] as Task[])
	const [page, setPage] = useState(1)
	const [isSearching, setIsSearching] = useState(false)
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch(`/api/getTasks?page=${page}`, {
			cache: 'no-store'
		})
			.then((res) => res.json())
			.then((data) => {
				setTasks(data)
				setLoading(false)
			})
	}, [])

	if (isLoading) return <div>Loading</div>
	if (!tasks) return <div>No data</div>

	return (
		<div>
			<Search
				page={page}
				isSearching={isSearching}
				setIsSearching={setIsSearching}
				setTasks={setTasks}
			/>
			{tasks.map((task) => (
				<Task key={task.number} task={task} />
			))}
		</div>
	)
}

export default Home
