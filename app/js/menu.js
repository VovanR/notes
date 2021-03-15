import createElement from './utils/create-element.js'
import MenuItem from './menu-item.js'

function Menu({
	activeNoteId,
	loadingNoteId,
	notes,
	onSelect
}) {
	const actual = []
	const archive = []

	for (const note of notes) {
		if (note.archive) {
			archive.push(note)
		} else {
			actual.push(note)
		}
	}

	function renderMenuItem(note) {
		return createElement(MenuItem, {
			key: note.id,
			loading: note.id === loadingNoteId,
			active: note.id === activeNoteId,
			note,
			onSelect
		})
	}

	const showArchive = archive.length > 0

	return createElement('nav', {className: 'nav-menu'},
		createElement('ul', {},
			actual.map(note => renderMenuItem(note))
		),

		showArchive && createElement('div', {
			className: 'nav-menu__archive-title'
		}, 'Archive'),

		showArchive && createElement('ul', {},
			archive.map(note => renderMenuItem(note))
		)
	)
}

export default Menu
