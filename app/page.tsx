import React from 'react'
import { getAccessToken } from './libs/getAccessToken'
import { getTasks } from './libs/getTasks'

export default async function Home({
	searchParams
}: {
	searchParams?: { [key: string]: string | undefined }
}) {
	const code = searchParams?.code
	if (code != null) {
		const accesstokenData: Promise<TokenData> = getAccessToken(code)
		const accesstoken = await accesstokenData

		console.log(accesstoken)

		const taskData: Promise<Task[]> = getTasks(accesstoken, 1)
		const tasks = await taskData
		console.log('tasks fetched')

		return tasks.map((task) => (
			<>
				<div>task id: {task.id}</div>
				<div>task node_id: {task.node_id}</div>
				<div>task number: {task.number}</div>
				<div>task state: {task.state}</div>
				<div>task title: {task.title}</div>
				<div>task body: {task.body}</div>
			</>
		))
	}

	return <div>test</div>
}
