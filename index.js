(function (React, ReactDOM, marked, hljs) {
	'use strict'

	// Exists notes list
	const NOTES = [
		'AngularJS',
		'Backbone',
		'Bash',
		'CSS',
		'Django',
		'Git',
		'HTML',
		'JS-TDD',
		'JavaScript',
		'Linux',
		'Markdown',
		'MongoDB',
		'Nginx',
		'Node',
		'PostgreSQL',
		'Pug',
		'Python',
		'React',
		'RegExp',
		'SVG',
		'Tmux',
		'TypeScript',
		'Typography',
		'Vim',
	]
	const SITE_SOURCE_URL = 'https://github.com/VovanR/notes/blob/gh-pages/'

	const {Grid, Row, Col, Panel} = ReactBootstrap
	const {Scrollbars} = ReactCustomScrollbars
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
				url: url
			})
		}

		return `<h${level} id="${id}"><a href="${url}"></a>${text}</h${level}>`
	}

	const e = React.createElement;

	class MenuItem extends React.Component {
		constructor(props) {
			super(props)

			this.state = {
				showSubmenu: true,
			}

			this.handleSelect = this.handleSelect.bind(this)
		}

		componentWillReceiveProps(nextProps) {
			if (
				this.props.isActive !== nextProps.isActive &&
				this.state.showSubmenu === false
			) {
				this.setState({showSubmenu: true})
			}
		}

		handleSelect(e) {
			e.preventDefault()

			const {
				isActive,
				note,
				onSelect,
			} = this.props

			if (!isActive) {
				onSelect(note.id)
				return
			}

			if (isActive && note.h2) {
				this.setState(prevState => ({
					showSubmenu: !prevState.showSubmenu,
				}))
				return
			}
		}

		render() {
			const {
				isLoading,
				isActive,
				note,
			} = this.props

			return e(
				'li',
				{
					className: isActive ? 'active' : ''
				},
				e(
					'a',
					{
						href: note.url,
						onClick: this.handleSelect
					},
					note.name,
					isLoading && e(
						'span',
						{
							className: 'nav-menu__spinner'
						}
					)
				),
				this.state.showSubmenu && note.h2 && e(SubMenu, {items: note.h2})
			);
		}
	}

	// Main menu
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
					note: note,
					onSelect: onSelect
				}))
			);
		}
	}

	const SubMenu = props => e('ul', {className: 'nav-submenu'},
		props.items.map((item, index) => e('li', {key: index},
			e('a', {
				href: item.url,
				dangerouslySetInnerHTML: {__html: item.name},
			})
		))
	)

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
				activeNoteId: null,
				isLoading: false,
				loadingNoteId: null,
			}

			this.handleSelect = this.handleSelect.bind(this)
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
				.then(data => {
					// Clear `h2` collection
					h2s = []
					loadingNote.data = marked(
						data,
						{
							sanitize: true,
							gfm: true,
							highlight: code => hljs.highlightAuto(code).value,
							renderer: markedRenderer
						}
					)
					// Write `h2` collection
					loadingNote.h2 = h2s
					this.setState({
						activeNoteId: noteId,
						isLoading: false,
						loadingNoteId: null,
					})
				})
				.catch(() => {
					this.setState({
						isLoading: false,
						loadingNoteId: null,
					})
				})
		}

		handleSelect(noteId) {
			this.fetchCurrentNote(noteId)
		}

		render() {
			const {
				activeNoteId,
				isLoading,
				loadingNoteId,
				notes
			} = this.state
			const active = activeNoteId !== null ? this.getActiveNote() : {}

			return e(Grid, {},
				e(Row, {},
					e(Col, {md: 3},
						e(Panel, {className: 'nav-menu-panel'},
							e(Scrollbars, {},
								e(Menu, {
									notes: notes,
									activeNoteId: activeNoteId,
									isLoading: isLoading,
									loadingNoteId: loadingNoteId,
									onSelect: this.handleSelect
								})
							)
						)
					),

					e(Col, {md: 9},
						e(Panel, {},
							active.sourceURL && e('div', {className: 'note-source'},
								e('a', {
									className: 'text-muted small',
									href: active.sourceURL,
									target: '_blank',
									rel: 'noopener'
								}, 'Note source code on GitHub')
							),
							active.data && e('div', {
								className: 'rendered-note',
								dangerouslySetInnerHTML: {__html: active.data}
							})
						)
					)
				)
			);
		}
	}

	ReactDOM.render(e(App), document.getElementById('app'))
})(React, ReactDOM, marked, hljs)
