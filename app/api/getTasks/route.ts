import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const owner = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_OWNER
const repository = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY

type Params = {
	page: number
}

export async function GET(request: NextRequest) {
	const cookiesStore = cookies()
	const accessToken = cookiesStore.get('accessToken')?.value

	const page = request.nextUrl.searchParams.get('page')
	console.log(page + '#')

	const data = await fetch(
		`https://api.github.com/repos/${owner}/${repository}/issues?per_page=10&page=${page}`,
		{
			headers: {
				accept: 'application/vnd.github+json',
				authorization: 'bearer ' + accessToken,
				'x-github-api-version': '2022-11-28'
			}
		}
	)

	if (!data.ok) {
		throw new Error('failed to fetch tasks list')
	}

	const res = (await data.json()) as Task[]
	const tasks: Task[] = res.map((task: Task) => ({
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
