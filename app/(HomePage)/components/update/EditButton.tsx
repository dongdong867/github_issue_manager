'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type Params = {
	task: Task
	edit: boolean
	passed: boolean
	setEdit: React.Dispatch<React.SetStateAction<boolean>>
	setUpdated: React.Dispatch<React.SetStateAction<boolean>>
}

const EditButton = ({ task, edit, passed, setEdit, setUpdated }: Params) => {
	const router = useRouter()

	const handleSubmitClick = async () => {
		await fetch('/api/task', {
			method: 'PATCH',
			body: JSON.stringify({
				task: task
			})
		})
		router.refresh()
		setUpdated(true)
		setEdit(false)
	}

	const handleEditButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation()
		setEdit(true)
	}

	return edit ? (
		<div className='flex justify-end gap-x-1 font-semibold'>
			<button
				onClick={handleSubmitClick}
				disabled={!passed}
				className='rounded-small bg-button px-4 py-2 text-primary-content-light'
			>
				Update
			</button>
			<button
				onClick={() => setEdit(false)}
				className='rounded-small text-delete px-4 py-2 transition-all duration-200 border-delete border-2
				hover:bg-delete hover:text-primary-content-light'
			>
				Cancel
			</button>
		</div>
	) : (
		<button onClick={(e) => handleEditButtonClick(e)} className='bg-edit rounded-small px-4 py-2'>
			Edit
		</button>
	)
}

export default EditButton
