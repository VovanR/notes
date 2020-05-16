/* global React */

import {
	SITE_SOURCE_URL,
	NOTES_DIRECTORY
} from './constants.js'

const createElement = React.createElement

function processNote({
	name,
	archive,
	popular
}) {
	const filename = `${NOTES_DIRECTORY}/${name.toLowerCase()}.md`

	return {
		id: name,
		name: name.replace('_', ' '),
		sourceURL: new URL(filename, SITE_SOURCE_URL).href,
		url: new URL(filename, window.location).href,
		data: null,
		subitems: null,
		archive,
		popular
	}
}

function classNames(object) {
	const classNames = []

	for (const [className, active] of Object.entries(object)) {
		if (active) {
			classNames.push(className)
		}
	}

	return classNames.join(' ')
}

export {
	createElement,
	processNote,
	classNames
}
