import {e} from './utils.js'

const NoteSource = ({url, name = 'Edit on GitHub'}) => {
	if (!url) {
		return null
	}

	return e('div', {className: 'note-source'},
		e('a', {
			className: 'text-muted small',
			href: url,
			target: '_blank',
			rel: 'noopener'
		}, name)
	)
}

export default NoteSource
