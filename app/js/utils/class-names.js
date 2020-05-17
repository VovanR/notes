function classNames(object) {
	const classNames = []

	for (const [className, active] of Object.entries(object)) {
		if (active) {
			classNames.push(className)
		}
	}

	return classNames.join(' ')
}

export default classNames
