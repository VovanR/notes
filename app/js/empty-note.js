/* global React */

import {createElement} from './utils.js'
import Note from './note.js'
import {REPOSITORY_URL} from './constants.js'
import Progress from './progress.js'

const EmptyNote = () => createElement(Note, {
	data: createElement(React.Fragment, {},
		createElement('h1', {}, 'Notes'),
		createElement('hr'),
		createElement(Progress)
	),
	url: REPOSITORY_URL,
	urlName: 'See on GitHub'
})

export default EmptyNote
