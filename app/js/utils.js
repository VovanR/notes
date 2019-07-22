/* global React window */

import {
	SITE_SOURCE_URL,
	NOTES_DIRECTORY
} from './constants.js'

const e = React.createElement

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

function classNames(obj) {
	const classNameArr = []

	for (const [className, active] of Object.entries(obj)) {
		if (active) {
			classNameArr.push(className)
		}
	}

	return classNameArr.join(' ')
}

export {
	e,
	processNote,
	classNames
}
