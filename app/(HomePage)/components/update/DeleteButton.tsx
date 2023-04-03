'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type Params = {
	task: Task
}

const DeleteButton = ({ task }: Params) => {
	const router = useRouter()
	const handleClick = async () => {
		await fetch('/api/task', {
			method: 'PATCH',
			body: JSON.stringify({
				task: { ...task, state: 'close' }
			})
		})
		router.replace('/')
	}

	return <button onClick={handleClick}>Click to delete task</button>
}

export default DeleteButton
