import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const owner = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_OWNER
const repository = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY

export async function GET(request: NextRequest) {
	const cookiesStore = cookies()
	const accessToken = cookiesStore.get('accessToken')?.value

	const query = request.nextUrl.searchParams.get('query')
	const searchLabel = request.nextUrl.searchParams.get('searchLabel')
	const page = request.nextUrl.searchParams.get('page')

	let label = ''

	switch (searchLabel) {
		case 'open':
			label = '+label:open'
			break
		case 'in progress':
			label = '+label:in_progress'
			break
		case 'done':
			label = '+label:done'
			break
		default:
			break
	}

	console.log(
		`https://api.github.com/search/issues?q=${query}+is:issue+repo:${owner}/${repository}${label}&per_page=10&page=${page}`
	)

	const data = await fetch(
		`https://api.github.com/search/issues?q=${query}+is:issue+repo:${owner}/${repository}${label}&per_page=10&page=${page}`,
		{
			headers: {
				accept: 'application/vnd.github+json',
				authorization: 'bearer ' + accessToken,
				'x-github-api-version': '2022-11-28'
			}
		}
	)

	if (!data.ok) {
		throw new Error('failed to search tasks')
	}

	const res = await data.json()
	const tasks: Task[] = res.items.map((task: Task) => ({
		id: task.id,
		node_id: task.node_id,
		number: task.number,
		state: task.state,
		title: task.title,
		body: task.body,
		labels: task.labels.map((label) => ({ name: label.name }))
	}))
	console.log(tasks)
	return NextResponse.json(tasks)
}
