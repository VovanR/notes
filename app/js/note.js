/* global React */

import createElement from './utils/create-element.js'
import NoteSource from './note-source.js'
import RenderedNote from './rendered-note.js'

function Notes({
	data,
	htmlData,
	url,
	urlName,
}) {
	return createElement(React.Fragment, {},
		createElement(NoteSource, {
			url,
			name: urlName,
		}),
		createElement(RenderedNote, {
			data,
			htmlData,
		}),
	)
}

export default Notes
