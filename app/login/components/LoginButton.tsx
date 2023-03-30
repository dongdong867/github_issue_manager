import React from 'react'

export const LoginButton = () => {
	const clientID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
	const redirectUri = process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI
	const route = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectUri}&scope=repo&state=githubIssueManager`

	return <a href={route}>Github Login</a>
}
