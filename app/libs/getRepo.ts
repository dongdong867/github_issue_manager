import axios from "axios"

type Repo = {
  id: number,
  node_id: string,
  name: string
}

type OauthReturn = {
  accessToken: string,
  scope: string,
  token_type: string
}

export const getRepo = async (accessToken: string) => {
  const tokens = accessToken.split('&')
  const token = tokens[0].substring(tokens[0].indexOf('=') + 1)
  const data: Repo[] = await axios
    .get('https://api.github.com/user/repos', {
      headers: { Authorization: 'bearer ' + token }
    })
    .then(res => res.data)
    .catch(err => console.log(err))

  return data.map((repo: Repo) => ({
    id: repo.id,
    node_id: repo.node_id,
    name: repo.name
  }))
}