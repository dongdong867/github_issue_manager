import axios from "axios";

export const getAccessToken = async (code: string) => {
  axios.defaults.headers.common['Accept'] = 'application/json'
  const data: TokenData = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err))

  const tokens: TokenData = JSON.parse(JSON.stringify(data))
  return tokens
}