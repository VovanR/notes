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

		return e(
			'ul',
			{className: 'nav-menu'},
			notes.map(note => e(MenuItem, {
				key: note.id,
				isLoading: note.id === loadingNoteId,
				isActive: note.id === activeNoteId,
				note,
				onSelect
			}))
		)
	}
}

export default Menu
