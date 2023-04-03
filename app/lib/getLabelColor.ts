export const getLabelBorderColor = (label: string) => {
	let labelBorderColor = ''
	switch (label) {
		case 'open':
			labelBorderColor = 'border-open'
			break
		case 'in_progress':
			labelBorderColor = 'border-in-progress'
			break
		case 'done':
			labelBorderColor = 'border-done'
			break
		default:
			labelBorderColor = 'border-base-light'
	}
	return labelBorderColor
}

export const getLabelTextColor = (label: string) => {
	let labelTextColor = ''
	switch (label) {
		case 'open':
			labelTextColor = 'text-open'
			break
		case 'in_progress':
			labelTextColor = 'text-in-progress'
			break
		case 'done':
			labelTextColor = 'text-done'
			break
	}
	return labelTextColor
}
