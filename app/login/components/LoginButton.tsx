import React from 'react'
import { BsGithub } from 'react-icons/bs'

export const LoginButton = () => {
	const clientID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
	const redirectUri = process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI
	const route = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectUri}&scope=repo&state=githubIssueManager`

	return (
		<div
			className='w-full h-full max-w-2xl max-h-[450px] border-4 rounded-primary overflow-hidden bg-base-light
			flex flex-col justify-around place-items-center py-5 px-3 mx-3 border-border-primary text-primary-content-dark font-bold'
		>
			<div className='text-3xl md:text-5xl text-center mb-5'>GitHub Task Manager</div>
			<div className='w-full h-1/3 flex flex-col items-center gap-y-3'>
				<BsGithub className='w-full h-full' />
				<div className='text-xl md:text-3xl'>Sign in to GitHub</div>
			</div>
			<a
				href={route}
				className='w-4/5 h-[1/10] rounded-full overflow-hidden text-center my-5 shadow'
			>
				<div className='w-full h-full py-3 bg-button text-2xl text-white'>Github Login</div>
			</a>
		</div>
	)
}
