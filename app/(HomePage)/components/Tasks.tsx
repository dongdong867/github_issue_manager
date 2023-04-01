'use client'

import React, { useEffect, useState } from 'react'
import Task from './Task'
import SearchButton from './SearchButton'

const Tasks = () => {
	const [tasks, setTasks] = useState([] as Task[])
	const [page, setPage] = useState(1)
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

	console.log(tasks)
	return (
		<div>
			<SearchButton setTasks={setTasks} />
			{tasks.map((task) => (
				<Task key={task.number} task={task} />
			))}
		</div>
	)
}

export default Tasks
