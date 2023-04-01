'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type Params = {
	task: Task
}

const EditButton = ({ task }: Params) => {
	const router = useRouter()

	const handleClick = async () => {
		await fetch('/api/task', {
			method: 'PATCH',
			body: JSON.stringify({
				task: task
			})
		})
		router.refresh()
	}

	return <button onClick={handleClick}>click to edit</button>
}

export default EditButton
