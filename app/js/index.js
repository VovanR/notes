/* global React, ReactDOM, ReactBootstrap, marked, hljs */

import {NOTES, REPOSITORY_URL, SITE_SOURCE_URL} from './constants.js'
import {e} from './utils.js'
import CustomScrollbars from './custom-scrollbars.js'
import NotesFilter from './notes-filter.js'
import Menu from './menu.js'
import Note from './note.js'
import EmptyNote from './empty-note.js'

const {Grid, Row, Col, Panel} = ReactBootstrap
const markedRenderer = new marked.Renderer()

// Note `h2` headers collection
let h2s = null

// Build note headers
markedRenderer.heading = (text, level) => {
	const escapedText = text.toLowerCase().replace(/[^\wА-Яа-я]+/g, '-')
	const id = `anchor-${escapedText}`
	const url = `#${id}`

	// Collect note `h2` headers
	if (level === 2) {
		h2s.push({
			name: text,
			url
		})
	}

	return `<h${level} id="${id}"><a href="${url}"></a>${text}</h${level}>`
}

const processMDNote = text => {
	// Clear `h2` collection
	h2s = []
	const data = marked(
		text,
		{
			sanitize: true,
			gfm: true,
			highlight: code => hljs.highlightAuto(code).value,
			renderer: markedRenderer
		}
	)
	// Write `h2` collection
	const h2 = h2s

	return {data, h2}
}

class App extends React.Component {
	constructor(props) {
		super(props)

		const collection = NOTES.map(note => {
			const filename = `${note.toLowerCase()}.md`

			return {
				id: note,
				name: note,
				sourceURL: new URL(filename, SITE_SOURCE_URL).href,
				url: new URL(filename, location).href,
				data: null,
				subitems: null
			}
		})

		this.state = {
			notes: collection,
			readme: {
				url: new URL('README.md', location).href,
				data: null
			},
			activeNoteId: null,
			isLoading: false,
			loadingNoteId: null,
			notesFilterValue: ''
		}

		this.handleSelect = this.handleSelect.bind(this)
		this.handleFilterNotes = this.handleFilterNotes.bind(this)
		this.handleFilterSubmit = this.handleFilterSubmit.bind(this)
	}

	componentWillMount() {
		const {readme} = this.state

		this.setState({isLoading: true})

		fetch(readme.url)
			.then(response => response.text())
			.then(text => {
				const {data, h2} = processMDNote(text)
				readme.data = data
				readme.h2 = h2

				this.setState({isLoading: false})
			})
			.catch(() => this.setState({isLoading: false}))
	}

	getNoteById(id) {
		return this.state.notes.find(note => note.id === id)
	}

	getActiveNote() {
		return this.getNoteById(this.state.activeNoteId)
	}

	fetchCurrentNote(noteId) {
		const loadingNote = this.getNoteById(noteId)

		if (loadingNote.data) {
			this.setState({activeNoteId: noteId})
			return
		}

		this.setState({
			isLoading: true,
			loadingNoteId: loadingNote.id
		})

		fetch(loadingNote.url)
			.then(response => response.text())
			.then(text => {
				const {data, h2} = processMDNote(text)
				loadingNote.data = data
				loadingNote.h2 = h2

				this.setState({
					activeNoteId: noteId,
					isLoading: false,
					loadingNoteId: null
				})
			})
			.catch(() => {
				this.setState({
					isLoading: false,
					loadingNoteId: null
				})
			})
	}

	setCurrentNote(noteId) {
		this.fetchCurrentNote(noteId)
	}

	handleSelect(noteId) {
		this.setCurrentNote(noteId)
	}

	handleFilterNotes(value) {
		this.setState({notesFilterValue: value})
	}

	handleFilterSubmit() {
		this.setFirstFilteredNoteAsCurrent()
	}

	setFirstFilteredNoteAsCurrent() {
		const filteredNotes = this.getFilteredNotes()
		if (filteredNotes.length > 0) {
			this.setCurrentNote(this.getFilteredNotes()[0].id)
		}
	}

	getFilteredNotes() {
		const {
			notes,
			notesFilterValue
		} = this.state

		// From 'jspt' makes 'j.*s.*p.*t' to match 'JavaScript'
		const pattern = notesFilterValue.split('').join('.*')
		const regexp = new RegExp(pattern, 'i')

		const filteredNotes = notes.filter(note => {
			return regexp.test(note.name)
		})

		return filteredNotes
	}

	render() {
		const {
			activeNoteId,
			isLoading,
			readme,
			loadingNoteId
		} = this.state
		const active = activeNoteId === null ? {} : this.getActiveNote()

		const filteredNotes = this.getFilteredNotes()

		return e(Grid, {},
			e(Row, {},
				e(Col, {md: 3},
					e(Panel, {className: 'nav-menu-panel'},
						e(NotesFilter, {
							onSubmit: this.handleFilterSubmit,
							onChange: this.handleFilterNotes
						}),
						e(CustomScrollbars, {className: 'nav-menu-panel__scrollbars'},
							e(Menu, {
								notes: filteredNotes,
								activeNoteId,
								isLoading,
								loadingNoteId,
								onSelect: this.handleSelect
							})
						)
					)
				),

				e(Col, {md: 9},
					e(Panel, {},
						active.data ?
							e(Note, {
								htmlData: active.data,
								url: active.sourceURL
							}) : readme.data ?
								e(Note, {
									htmlData: readme.data,
									url: REPOSITORY_URL,
									urlName: 'See on GitHub'
								}) : e(EmptyNote)
					)
				)
			)
		)
	}
}

ReactDOM.render(e(App), document.getElementById('app'))
