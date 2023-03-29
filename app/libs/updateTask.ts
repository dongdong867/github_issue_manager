import axios from "axios"

export const updateTask = async (accesstoken: TokenData, task: SendTaskData) => {
  axios.defaults.headers.common['Accept'] = 'application/vnd.github+json'
  axios.defaults.headers.common['Authorization'] = 'bearer ' + accesstoken.access_token
  axios.defaults.headers.common['X-GitHub-Api-Version'] = '2022-11-28'
  if (task.number) {
    await axios
      .patch(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY_OWNER}/${process.env.GITHUB_REPOSITORY}/issues/${task.number}`, {
        title: task.title,
        body: task.body
      })
      .catch(err => console.log(err))
  } else {
    throw new Error('task not found')
  }
}