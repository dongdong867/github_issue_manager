'use client'

import React, { useState } from 'react'
import EditTask from '../EditTask'
import { getLabelBorderColor } from '@/app/lib/getLabelColor'

type Params = {
	setIsCreating: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateTask = ({ setIsCreating }: Params) => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [label, setLabel] = useState('open')
	const [passed, setPassed] = useState(false)

	const labelBorderColor = getLabelBorderColor(label)

	const task: CreateTaskData = {
		title: title,
		body: body,
		labels: [{ name: label as 'open' | 'in_progress' | 'done' }]
	}

	const clearAll = () => {
		setTitle('')
		setBody('')
		setLabel('open')
	}

	const handleSubmitClick = async () => {
		await fetch('api/task', {
			method: 'POST',
			body: JSON.stringify({
				task: task
			})
		})
		setIsCreating(false)
		clearAll()
		window.location.reload()
	}

	const handleCancelClick = () => {
		setIsCreating(false)
		clearAll()
	}

	return (
		<div
			className={`bg-base-light w-11/12 mb-5 px-5 pb-8 rounded-primary flex flex-col m-auto border-[6px] ${labelBorderColor}`}
		>
			<EditTask
				title={title}
				body={body}
				label={label}
				setTitle={setTitle}
				setBody={setBody}
				setLabel={setLabel}
				setPassed={setPassed}
			>
				<div className='flex justify-end gap-x-1 font-semibold'>
					<button
						onClick={handleSubmitClick}
						disabled={!passed}
						className='rounded-small bg-button px-4 py-2 text-primary-content-light'
					>
						Submit
					</button>
					<button
						onClick={handleCancelClick}
						className='rounded-small text-delete px-4 py-2 transition-all duration-200 border-delete border-2
				  hover:bg-delete hover:text-primary-content-light'
					>
						Cancel
					</button>
				</div>
			</EditTask>
		</div>
	)
}

export default CreateTask
