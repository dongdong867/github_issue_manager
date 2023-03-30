type Task = {
  id: number
  node_id: string
  number: number
  state: string
  title: string
  body: string
  labels: Label[]
}

type SendTaskData = {
  number?: number
  title: string
  body: string
  labels: Label[]
}

type Label = {
  name: 'open' | 'in progress' | 'done'
}