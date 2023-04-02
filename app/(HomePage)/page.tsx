'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Task from './components/Task'
import Search from './components/Search'

export const revalidate = 0

const Home = () => {
	const [tasks, setTasks] = useState([] as Task[])
	const [page, setPage] = useState(1)
	const [isSearching, setIsSearching] = useState(false)
	const [isLoading, setLoading] = useState(false)
	const [hasTask, setHasTask] = useState(true)

	const listEnd = useRef(null)
	const isEndOfList = useIsOnScreen(listEnd)

	const fetchTasks = async () => {
		fetch(`/api/getTasks?page=${page}`, {
			cache: 'no-store'
		})
			.then((res) => res.json())
			.then((data: Task[]) => {
				setTasks((e) => [...e, ...data])
				if (data.length == 0) {
					setHasTask(false)
				}
			})
	}

	useEffect(() => {
		let ignore = false
		if (!isSearching && !ignore && hasTask) {
			setLoading(true)
			fetchTasks().then(() => setLoading(false))
			setPage((e) => e + 1)
		}

		return () => {
			ignore = true
		}
	}, [isEndOfList])

	const taskList = tasks.map((task) => <Task key={task.number} task={task} />)

	if (isLoading) return <div>Loading</div>
	if (!tasks) return <div>No data</div>

	return (
		<div>
			<Search
				isEndOfList={isEndOfList}
				isSearching={isSearching}
				setIsSearching={setIsSearching}
				setTasks={setTasks}
			/>
			{taskList}
			{taskList.length >= 10 ? (
				<div ref={listEnd}>end</div>
			) : (
				<div ref={listEnd} className='absolute top-[110vh]'></div>
			)}
		</div>
	)
}

const useIsOnScreen = (ref: any) => {
	const [isIntersecting, setIsIntersecting] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting))
		observer.observe(ref.current)

		return () => observer.disconnect()
	}, [ref])

	return isIntersecting
}

export default Home
