'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type Params = {
	task: Task
	setDeleted: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteButton = ({ task, setDeleted }: Params) => {
	const router = useRouter()
	const handleClick = async () => {
		await fetch('/api/task', {
			method: 'PATCH',
			body: JSON.stringify({
				task: { ...task, state: 'close' }
			})
		})
		setDeleted(true)
		router.refresh()
	}

	return (
		<button
			onClick={handleClick}
			className='text-delete border-delete border-2 rounded-small px-4 py-2 transition-all duration-200
			hover:text-primary-content-light hover:bg-delete'
		>
			Delete
		</button>
	)
}

export default DeleteButton
