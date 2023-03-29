type Task = {
  id: number
  node_id: string
  number: number
  state: string
  title: string
  body: string
}

type SendTaskData = {
  number?: number
  title: string
  body: string
}