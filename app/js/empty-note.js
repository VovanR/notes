/* global React */

import {e} from './utils.js'
import Note from './note.js'
import {REPOSITORY_URL} from './constants.js'

const EmptyNote = () => e(Note, {
	data: e(React.Fragment, {},
		e('h1', {}, 'Notes'),
		e('hr')
	),
	url: REPOSITORY_URL,
	urlName: 'See on GitHub'
})

export default EmptyNote
