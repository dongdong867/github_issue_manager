import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const owner = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_OWNER
const repository = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY

type CreateParams = {
	task: CreateTaskData
}

// create a new task and setting it as an open task
export async function POST(request: NextRequest) {
	const cookiesStore = cookies()
	const accessToken = cookiesStore.get('accessToken')?.value

	const { task }: CreateParams = await request.json()

	const data = await fetch(`https://api.github.com/repos/${owner}/${repository}/issues`, {
		method: 'POST',
		headers: {
			accept: 'application/vnd.github+json',
			authorization: 'bearer ' + accessToken,
			'x-github-api-version': '2022-11-28'
		},
		body: JSON.stringify({
			title: task.title,
			body: task.body,
			labels: [{ name: 'open' }]
		})
	})

	if (!data.ok) {
		throw new Error('failed to create new task')
	}

	const res = await data.json()
	return NextResponse.json(res)
}

type UpdateParams = {
	task: Task
}

// to update(e.g. title, body, labels) or to close(e.g. state) the task
export async function PATCH(request: NextRequest) {
	const cookiesStore = cookies()
	const accessToken = cookiesStore.get('accessToken')?.value

	const { task }: UpdateParams = await request.json()

	const data = await fetch(
		`https://api.github.com/repos/${owner}/${repository}/issues/${task.number}`,
		{
			method: 'PATCH',
			headers: {
				accept: 'application/vnd.github+json',
				authorization: 'bearer ' + accessToken,
				'x-github-api-version': '2022-11-28'
			},
			body: JSON.stringify({
				state: task.state,
				title: task.title,
				body: task.body,
				labels: task.labels
			})
		}
	)

	if (!data.ok) {
		throw new Error('task not found')
	}

	const res = await data.json()
	return NextResponse.json(res)
}

export async function GET(request: NextRequest) {
	const cookiesStore = cookies()
	const accessToken = cookiesStore.get('accessToken')?.value

	const number = request.nextUrl.searchParams.get('number')

	const data = await fetch(`https://api.github.com/repos/${owner}/${repository}/issues/${number}`, {
		method: 'GET',
		headers: {
			accept: 'application/vnd.github+json',
			authorization: 'bearer ' + accessToken,
			'x-github-api-version': '2022-11-28'
		}
	})

	if (!data.ok) {
		throw new Error('task not found')
	}

	const res = (await data.json()) as Task
	return NextResponse.json(res)
}
