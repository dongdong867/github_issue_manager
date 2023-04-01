'use client'

import React from 'react'

const CreateButton = () => {
	const handleClick = async () => {
		await fetch('/api/task', {
			method: 'POST',
			body: JSON.stringify({
				task: {
					title: 'issue 14',
					body: 'qwoepifvnkzjdlqweoifkvljnsdlqweh;flvjkn',
					labels: [{ name: 'open' }]
				}
			})
		})
	}

	return <button onClick={handleClick}>PostButton</button>
}

export default CreateButton
