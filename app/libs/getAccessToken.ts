import axios from "axios";

export const getAccessToken = async (code: string) => {
  const data = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`,
      {
        header: {
          accept: 'application/json'
        }
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err))

  return data
}