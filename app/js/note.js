/* global React */

import {createElement} from './utils.js'
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

		return createElement(React.Fragment, {},
			createElement(NoteSource, {
				url,
				name: urlName
			}),
			createElement(RenderedNote, {
				data,
				htmlData
			})
		)
	}
}

export default Notes
