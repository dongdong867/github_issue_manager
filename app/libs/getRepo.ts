import axios from "axios"

type Repo = {
  id: number,
  node_id: string,
  name: string
}

type TokenData = {
  access_token: string,
  token_type: string
  scope: string,
}

export const getRepo = async (accessToken: TokenData) => {
  const data: Repo[] = await axios
    .get('https://api.github.com/user/repos', {
      headers: { Authorization: 'bearer ' + accessToken.access_token }
    })
    .then(res => res.data)
    .catch(err => console.log(err))

  const repos = data.map((repo: Repo) => ({
    id: repo.id,
    node_id: repo.node_id,
    name: repo.name
  }))

  return repos
}