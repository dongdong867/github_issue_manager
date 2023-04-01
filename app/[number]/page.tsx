'use client'

import React, { useEffect, useState } from 'react'
import EditButton from './components/EditButton'
import DeleteButton from './components/DeleteButton'

type Params = {
	params: {
		number: number
	}
}

const TaskPage = ({ params }: Params) => {
	const taskNumber = params.number

	const [task, setTask] = useState({} as Task)
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch(`/api/task?number=${taskNumber}`, {
			method: 'GET',
			cache: 'no-store'
		})
			.then((res) => res.json())
			.then((data) => {
				setTask(data)
				setLoading(false)
			})
	}, [])

	if (isLoading) return <div>Loading</div>
	if (!task) return <div>Can't find task</div>

	return (
		<>
			<EditButton task={task} />
			<div>{task.title}</div>
			<div>{task.body}</div>
			<DeleteButton task={task} />
		</>
	)
}

export default TaskPage
