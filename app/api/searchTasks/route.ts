import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const owner = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_OWNER
const repository = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY

export async function GET(request: NextRequest) {
	const cookiesStore = cookies()
	const accessToken = cookiesStore.get('accessToken')?.value

	const query = request.nextUrl.searchParams.get('query')
	const page = request.nextUrl.searchParams.get('page')

	const processedQuery = query?.replaceAll(' ', '+')

	const data = await fetch(
		`https://api.github.com/search/issues?q=${processedQuery}+is:issue+repo:${owner}/${repository}&per_page=10&page=${page}`,
		{
			headers: {
				accept: 'application/vnd.github+json',
				authorization: 'bearer ' + accessToken,
				'x-github-api-version': '2022-11-28'
			},
			cache: 'no-cache'
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

	return NextResponse.json(tasks)
}
