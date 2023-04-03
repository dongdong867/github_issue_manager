'use client'

import React, { useEffect, useState } from 'react'
import EditButton from './update/EditButton'
import DeleteButton from './update/DeleteButton'
import Label from './Label'
import { getLabelColor } from '@/app/lib/getLabelColor'

type Params = {
	task: Task
	setUpdated: React.Dispatch<React.SetStateAction<boolean>>
}

const Task = ({ task, setUpdated }: Params) => {
	const [open, setOpen] = useState(false)
	const [edit, setEdit] = useState(false)
	const [editTitle, setEditTitle] = useState(task.title)
	const [editBody, setEditBody] = useState(task.body)
	const [editLabel, setEditLabel] = useState(task.labels[0].name as string)

	const labelColor = getLabelColor(task.labels[0].name)

	const editTask: Task = {
		...task,
		title: editTitle,
		body: editBody,
		labels: [{ name: editLabel as 'open' | 'in_progress' | 'done' }]
	}

	useEffect(() => {
		setEditTitle(task.title)
		setEditBody(task.body)
		setEditLabel(task.labels[0].name)
	}, [edit])

	return (
		<div
			onClick={(e) => setOpen((e) => !e)}
			className={`bg-base-light w-11/12 mb-5 px-5 pb-8 rounded-primary flex flex-col m-auto border-4 border-${labelColor}`}
		>
			{!edit && (
				<div>
					<div className={`font-medium my-5 text-${labelColor}`}>{task.labels[0].name}</div>
					<div className='text-3xl font-bold'>{task.title}</div>
					{!open ? (
						<div className='text-xl truncate'>{task.body}</div>
					) : (
						<div className='flex flex-col gap-y-10'>
							<div className='text-xl h-max break-all'>{task.body}</div>
							<div className='flex justify-end gap-x-1 text-primary-content-light font-semibold'>
								<EditButton task={task} edit={edit} setEdit={setEdit} setUpdated={setUpdated} />
								<DeleteButton task={task} />
							</div>
						</div>
					)}
				</div>
			)}
			{edit && (
				<div className='mt-4 flex flex-col gap-y-10'>
					<Label label={editLabel} route='task' setLabel={setEditLabel} />
					<div className='flex flex-col gap-y-5'>
						<div>
							<div className='font-medium'>TITLE</div>
							<input
								type='text'
								onChange={(e) => setEditTitle(e.target.value)}
								value={editTitle}
								className=' bg-base-light pl-3 border-b-2 border-base-dark text-3xl font-bold'
							/>
						</div>
						<div
							contentEditable
							suppressContentEditableWarning={true}
							onChange={(e) => setEditBody(e.currentTarget.innerHTML)}
							className='h-max border-b-2 border-base-dark bg-base-light pl-3 text-xl'
						>
							{editBody}
						</div>
					</div>
					<EditButton task={editTask} edit={edit} setEdit={setEdit} setUpdated={setUpdated} />
				</div>
			)}
		</div>
	)
}

export default Task
