'use client'

import React, { useEffect, useState } from 'react'
import EditButton from './update/EditButton'
import DeleteButton from './update/DeleteButton'
import { getLabelBorderColor, getLabelTextColor } from '@/app/lib/getLabelColor'
import UpdateTask from './update/UpdateTask'

type Params = {
	task: Task
}

const Task = ({ task }: Params) => {
	const [open, setOpen] = useState(false)
	const [edit, setEdit] = useState(false)
	const [editTitle, setEditTitle] = useState(task.title)
	const [editBody, setEditBody] = useState(task.body)
	const [editLabel, setEditLabel] = useState(task.labels[0].name as string)
	const [updated, setUpdated] = useState(false)
	const [deleted, setDeleted] = useState(false)

	const editTask: Task = {
		...task,
		title: editTitle,
		body: editBody,
		labels: [{ name: editLabel as 'open' | 'in_progress' | 'done' }]
	}

	const labelTextColor = getLabelTextColor(editTask.labels[0].name)
	const labelBorderColor = getLabelBorderColor(editTask.labels[0].name)

	useEffect(() => {
		if (!updated) {
			setEditTitle(task.title)
			setEditBody(task.body)
			setEditLabel(task.labels[0].name)
		}
	}, [edit])

	return deleted ? (
		<div></div>
	) : (
		<div
			onClick={(e) => setOpen((e) => !e)}
			className={`bg-base-light w-11/12 mb-5 px-5 pb-8 rounded-primary flex flex-col m-auto border-[6px] ${labelBorderColor}`}
		>
			{!edit && (
				<div>
					<div className={`font-semibold my-5 ${labelTextColor}`}>{editTask.labels[0].name}</div>
					<div className='text-3xl font-bold'>{editTask.title}</div>
					{!open ? (
						<div className='text-xl truncate'>{editTask.body}</div>
					) : (
						<div className='flex flex-col gap-y-10'>
							<div className='text-xl h-max break-all'>{editTask.body}</div>
							<div className='flex justify-end gap-x-1 text-primary-content-light font-semibold'>
								<EditButton
									task={editTask}
									edit={edit}
									passed={true}
									setEdit={setEdit}
									setUpdated={setUpdated}
								/>
								<DeleteButton task={editTask} setDeleted={setDeleted} />
							</div>
						</div>
					)}
				</div>
			)}
			{edit && (
				<UpdateTask
					title={editTitle}
					body={editBody}
					label={editLabel}
					task={editTask}
					edit={edit}
					setEdit={setEdit}
					setUpdated={setUpdated}
					setTitle={setEditTitle}
					setBody={setEditBody}
					setLabel={setEditLabel}
				/>
			)}
		</div>
	)
}

export default Task
