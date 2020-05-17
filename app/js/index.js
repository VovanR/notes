/* global React, ReactDOM */

import {
	NOTES,
	REPOSITORY_URL
} from './constants.js'
import createElement from './utils/create-element.js'
import processNote from './utils/process-note.js'
import processMDNote from './utils/process-md-note.js'
import CustomScrollbars from './custom-scrollbars.js'
import NotesFilter from './notes-filter.js'
import Menu from './menu.js'
import Note from './note.js'
import EmptyNote from './empty-note.js'

const {
	useCallback,
	useEffect,
	useState
} = React

const collection = NOTES.map(note => processNote(note))

function App() {
	const [loading, setLoading] = useState(true)
	const [loadingNoteId, setLoadingNoteId] = useState(null)
	const [activeNoteId, setActiveNoteId] = useState(null)
	const [notesFilterValue, setNotesFilterValue] = useState('')
	const [notes] = useState(collection)
	const [readme, setReadme] = useState({
		url: new URL('README.md', location).href,
		data: null,
		h2: null
	})

	useEffect(() => {
		fetch(readme.url)
			.then(response => response.text())
			.then(text => {
				const {data, h2} = processMDNote(text)

				setReadme({
					...readme,
					data,
					h2
				})
				setLoading(false)
			})
			.catch(() => setLoading(false))
	}, [])

	function getNoteById(id) {
		return notes.find(note => note.id === id)
	}

	function getActiveNote() {
		return getNoteById(activeNoteId)
	}

	function fetchCurrentNote(noteId) {
		const loadingNote = getNoteById(noteId)

		if (loadingNote.data) {
			setActiveNoteId(noteId)
			return
		}

		setLoading(true)
		setLoadingNoteId(loadingNote.id)

		fetch(loadingNote.url)
			.then(response => response.text())
			.then(text => {
				const {data, h2} = processMDNote(text)

				loadingNote.data = data
				loadingNote.h2 = h2

				setLoading(false)
				setLoadingNoteId(null)
				setActiveNoteId(noteId)
			})
			.catch(() => {
				setLoading(false)
				setLoadingNoteId(null)
			})
	}

	function setCurrentNote(noteId) {
		fetchCurrentNote(noteId)
	}

	const handleSelect = useCallback(noteId => {
		setCurrentNote(noteId)
	})

	const handleFilterNotes = useCallback(value => {
		if (value === '') {
			setActiveNoteId(null)
			setNotesFilterValue(value)
		} else {
			setNotesFilterValue(value)
		}
	})

	const handleFilterSubmit = useCallback(() => {
		setFirstFilteredNoteAsCurrent()
	})

	function setFirstFilteredNoteAsCurrent() {
		const filteredNotes = getFilteredNotes()
		if (filteredNotes.length > 0) {
			setCurrentNote(getFilteredNotes()[0].id)
		}
	}

	function getFilteredNotes() {
		if (notesFilterValue === '') {
			return notes
		}

		// From 'jspt' makes 'j.*s.*p.*t' to match 'JavaScript'
		const pattern = notesFilterValue.split('').join('.*')
		const regexp = new RegExp(pattern, 'i')

		const filteredNotes = notes
			.filter(note => regexp.test(note.name))

		const sortedByPopularNotes = filteredNotes
			.sort(note => -(Number(note.popular)))

		return sortedByPopularNotes
	}

	const active = activeNoteId === null ? {} : getActiveNote()

	const filteredNotes = getFilteredNotes()

	let note
	if (active.data) {
		note = createElement(Note, {
			htmlData: active.data,
			url: active.sourceURL
		})
	} else if (readme.data) {
		note = createElement(Note, {
			htmlData: readme.data,
			url: REPOSITORY_URL,
			urlName: 'See on GitHub'
		})
	} else {
		note = createElement(EmptyNote)
	}

	return createElement('div', {className: 'container'},
		createElement('div', {className: 'row'},
			createElement('div', {className: 'col-md-3'},
				createElement('div', {className: 'nav-menu-panel'},
					createElement(NotesFilter, {
						onSubmit: handleFilterSubmit,
						onChange: handleFilterNotes
					}),
					createElement(CustomScrollbars, {className: 'nav-menu-panel__scrollbars'},
						createElement(Menu, {
							notes: filteredNotes,
							activeNoteId,
							loading,
							loadingNoteId,
							onSelect: handleSelect
						})
					)
				)
			),

			createElement('div', {className: 'col-md-9'},
				createElement('div', {}, note)
			)
		)
	)
}

ReactDOM.render(createElement(App), document.querySelector('#app'))
