import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

//get github access token with code given
export async function POST(request: NextRequest) {
	console.log('post request triggered')
	const cookiesStore = cookies()

	const code = request.nextUrl.searchParams.get('code')
	console.log('code: ' + code)

	const client_id = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
	const client_secret = process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET

	const data = await fetch(
		`https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`,
		{
			method: 'POST',
			headers: {
				accept: 'application/json'
			},
			next: {
				revalidate: 0
			}
		}
	)

	if (!data.ok) {
		throw new Error('failed at fetching access token')
	}

	const tokenData: Promise<JSON> = await data.json()
	const token: TokenData = JSON.parse(JSON.stringify(tokenData))

	console.log('token: ' + token.access_token)

	return NextResponse.json(token.access_token, {
		headers: {
			'Set-Cookie': `accessToken=${token.access_token}`
		}
	})
}
