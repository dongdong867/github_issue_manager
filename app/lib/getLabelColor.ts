export const getLabelColor = (label: string) => {
	let labelColor = ''
	switch (label) {
		case 'open':
			labelColor = 'open'
			break
		case 'in_progress':
			labelColor = 'in-progress'
			break
		case 'done':
			labelColor = 'done'
			break
		default:
			labelColor = 'base-light'
	}
	return labelColor
}
