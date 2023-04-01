'use client'

import React, { useContext, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const Callback = () => {
	const searchParams = useSearchParams()
	const code = searchParams.get('code')

	const route = useRouter()

	useEffect(() => {
		const getAccessToken = async () => {
			const data = await fetch(`/api/accessToken?code=${code}`, {
				method: 'POST',
				next: { revalidate: 0 }
			})
			const token = await data.json()
		}
		let ignore = false
		if (!ignore) {
			getAccessToken().then(() => route.replace('/'))
		} else {
			route.replace('/login')
		}
		return () => {
			ignore = true
		}
	}, [])
	return <div>GitHub Callback Page</div>
}

export default Callback
