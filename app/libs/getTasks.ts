import axios from "axios"

export const getTasks = async (accesstoken: TokenData, page: number) => {
  axios.defaults.headers.common['Accept'] = 'application/vnd.github+json'

  const data: Task[] = await axios
    .get(`https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_OWNER}/${process.env.NEXT_PUBLIC_GITHUB_REPOSITORY}/issues?per_page=10&page=${page}`, {
      headers: {
        authorization: 'bearer ' + accesstoken.access_token,
        "X-GitHub-Api-Version": "2022-11-28"
      }
    })
    .then(res => res.data)
    .catch(err => console.log(err))

  const tasks = data.map((task: Task) => ({
    id: task.id,
    node_id: task.node_id,
    number: task.number,
    state: task.state,
    title: task.title,
    body: task.body,
    labels: task.labels.map((label) => ({
      name: label.name
    }))
  }))

  return tasks
}