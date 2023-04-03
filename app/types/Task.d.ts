type Task = {
	id: number
	node_id: string
	number: number
	state: string
	title: string
	body: string
	labels: Label[]
}

type Label = {
	name: 'open' | 'in_progress' | 'done'
}

type CreateTaskData = {
	title: string
	body: string
	labels: Label[]
}
