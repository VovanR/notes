import createElement from './utils/create-element.js'

function NoteSource({url, name = 'Edit on GitHub'}) {
	if (!url) {
		return null
	}

	return createElement('div', {className: 'note-source'},
		createElement('a', {
			className: 'text-muted small',
			href: url,
			target: '_blank',
			rel: 'noopener',
		}, name),
	)
}

export default NoteSource
