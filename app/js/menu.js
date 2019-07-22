/* global React */

import {e} from './utils.js'
import MenuItem from './menu-item.js'

class Menu extends React.Component {
	render() {
		const {
			activeNoteId,
			loadingNoteId,
			notes,
			onSelect
		} = this.props

		const actual = []
		const archive = []

		notes.forEach(note => {
			if (note.archive) {
				archive.push(note)
			} else {
				actual.push(note)
			}
		})

		function renderMenuItem(note) {
			return e(MenuItem, {
				key: note.id,
				isLoading: note.id === loadingNoteId,
				isActive: note.id === activeNoteId,
				note,
				onSelect
			})
		}

		const showArchive = archive.length > 0

		return e('nav', {className: 'nav-menu'},
			e('ul', {},
				actual.map(renderMenuItem)
			),

			showArchive && e('div', {
				className: 'nav-menu__archive-title'
			}, 'Archive'),

			showArchive && e('ul', {},
				archive.map(renderMenuItem)
			)
		)
	}
}

export default Menu
