import axios from "axios"

export const postTask = async (accesstoken: TokenData, task: SendTaskData) => {
  axios.defaults.headers.common['Accept'] = 'application/vnd.github+json'
  axios.defaults.headers.common['Authorization'] = 'bearer ' + accesstoken.access_token
  axios.defaults.headers.common['X-GitHub-Api-Version'] = '2022-11-28'
  await axios
    .post(`https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_OWNER}/${process.env.NEXT_PUBLIC_GITHUB_REPOSITORY}/issues`, {
      title: task.title,
      body: task.body,
      labels: ['open']
    })
    .catch(err => console.log(err))
}