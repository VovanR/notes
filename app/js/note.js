/* global React */

import {e} from './utils.js'
import NoteSource from './note-source.js'
import RenderedNote from './rendered-note.js'

class Notes extends React.Component {
	render() {
		const {
			data,
			htmlData,
			url,
			urlName
		} = this.props

		return e(React.Fragment, {},
			e(NoteSource, {
				url,
				name: urlName
			}),
			e(RenderedNote, {
				data,
				htmlData
			})
		)
	}
}

export default Notes
