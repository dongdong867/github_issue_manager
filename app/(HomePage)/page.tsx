import React from 'react'
import Tasks from './components/Tasks'

export const revalidate = 0

const Home = async () => {
	return (
		<div>
			<Tasks />
		</div>
	)
}

export default Home
