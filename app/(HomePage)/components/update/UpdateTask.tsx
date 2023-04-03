import React, { useState } from 'react'
import EditTask from '../EditTask'
import EditButton from './EditButton'

type Params = {
	title: string
	body: string
	label: string
	task: Task
	edit: boolean
	setEdit: React.Dispatch<React.SetStateAction<boolean>>
	setUpdated: React.Dispatch<React.SetStateAction<boolean>>
	setTitle: React.Dispatch<React.SetStateAction<string>>
	setBody: React.Dispatch<React.SetStateAction<string>>
	setLabel: React.Dispatch<React.SetStateAction<string>>
}

const UpdateTask = ({
	title,
	body,
	label,
	task,
	edit,
	setEdit,
	setUpdated,
	setTitle,
	setBody,
	setLabel
}: Params) => {
	const [passed, setPassed] = useState(false)
	return (
		<EditTask
			title={title}
			body={body}
			label={label}
			setTitle={setTitle}
			setBody={setBody}
			setLabel={setLabel}
			setPassed={setPassed}
		>
			<EditButton
				task={task}
				edit={edit}
				passed={passed}
				setEdit={setEdit}
				setUpdated={setUpdated}
			/>
		</EditTask>
	)
}

export default UpdateTask
