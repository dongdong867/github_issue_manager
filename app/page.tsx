import React from 'react'
import { getAccessToken } from './libs/getAccessToken'
import { getRepo } from './libs/getRepo'
import { getTasks } from './libs/getTasks'

type Repo = {
	id: number
	node_id: string
	name: string
}

type TokenData = {
	access_token: string
	token_type: string
	scope: string
}

type Task = {
	id: number
	node_id: string
	number: number
	state: string
	title: string
	body: string
}

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
