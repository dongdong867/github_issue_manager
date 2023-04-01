import Link from 'next/link'
import React from 'react'

type Params = {
	task: Task
}

const Task = ({ task }: Params) => {
	return (
		<Link href={'/' + task.number}>
			<div>{task.number}</div>
			<div>{task.title}</div>
		</Link>
	)
}

export default Task
