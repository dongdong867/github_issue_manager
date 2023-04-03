'use client'

import React from 'react'
import { BiPlus } from 'react-icons/bi'

type Params = {
	setIsCreating: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateButton = ({ setIsCreating }: Params) => {
	return (
		<button
			onClick={() => setIsCreating(true)}
			className='rounded-small bg-primary px-2 py-1 text-primary-content-light font-medium flex justify-center place-items-center'
		>
			<BiPlus size={25} />
		</button>
	)
}

export default CreateButton
