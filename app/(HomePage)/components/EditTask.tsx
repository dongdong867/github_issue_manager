'use client'

import React, { useEffect, useState } from 'react'
import Label from './Label'

type Params = {
	title: string
	body: string
	label: string
	setTitle: React.Dispatch<React.SetStateAction<string>>
	setBody: React.Dispatch<React.SetStateAction<string>>
	setLabel: React.Dispatch<React.SetStateAction<string>>
	setPassed: React.Dispatch<React.SetStateAction<boolean>>
	children: React.ReactNode
}

const EditTask = ({
	title,
	body,
	label,
	setTitle,
	setBody,
	setLabel,
	setPassed,
	children
}: Params) => {
	let titleCheck = title.length > 0
	const [bodyCheck, setBodyCheck] = useState(body.length >= 30)

	const handleBodyCheck = (e: React.FormEvent<HTMLDivElement>) => {
		const input = e.currentTarget.textContent as string
		setBodyCheck(input.length >= 30)
	}

	useEffect(() => {
		setPassed(titleCheck && bodyCheck)
	}, [titleCheck, bodyCheck])

	return (
		<div className='mt-4 flex flex-col gap-y-10'>
			<Label label={label} route='task' setLabel={setLabel} />
			<div className='flex flex-col gap-y-5'>
				<div>
					<div className='font-medium'>TITLE</div>
					<div className='border-b-2 border-base-dark'>
						<input
							type='text'
							onChange={(e) => setTitle(e.target.value)}
							value={title}
							className='w-full rounded-none bg-base-light pl-3  text-3xl font-bold'
						/>
					</div>
				</div>
				<div
					contentEditable
					suppressContentEditableWarning={true}
					onInput={(e) => handleBodyCheck(e)}
					onBlur={(e) => setBody(e.currentTarget.textContent as string)}
					className='h-max border-b-2 border-base-dark bg-base-light pl-3 text-xl'
				>
					{body}
				</div>
			</div>
			<div className='text-delete font-semibold'>
				{!titleCheck && <div>Title can't be empty.</div>}
				{!bodyCheck && <div>Body must be over 30 words.</div>}
			</div>
			{children}
		</div>
	)
}

export default EditTask
