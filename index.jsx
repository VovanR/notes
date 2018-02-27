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

	class MenuItem extends React.Component {
		constructor(props) {
			super(props)

			this.handleSelect = this.handleSelect.bind(this)
		}

		handleSelect(e) {
			e.preventDefault()

			this.props.onSelect(this.props.note.id)
		}

		render() {
			const {
				isLoading,
				isActive,
				note,
			} = this.props

			return (
				<li className={isActive ? 'active' : ''}>
					<a
						href={note.url}
						onClick={this.handleSelect}
					>
						{note.name}

						{isLoading && <span className="nav-menu__spinner"/>}
					</a>

					{note.h2 && <SubMenu items={note.h2}/>}
				</li>
			)
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

			return (
				<ul className="nav-menu">
					{notes.map(note => (
						<MenuItem
							key={note.id}
							isLoading={note.id === loadingNoteId}
							isActive={note.id === activeNoteId}
							note={note}
							onSelect={onSelect}
						/>
					))}
				</ul>
			)
		}
	}

	const SubMenu = props => (
		<ul className="nav-submenu">
			{props.items.map((item, index) => (
				<li key={index}>
					<a
						href={item.url}
						dangerouslySetInnerHTML={{__html: item.name}}
					/>
				</li>
			))}
		</ul>
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

		fetchCurrentNote() {
			const currentNote = this.getActiveNote()

			if (currentNote.data) {
				return
			}

			this.setState({
				isLoading: true,
				loadingNoteId: currentNote.id
			})

			fetch(currentNote.url)
				.then(response => response.text())
				.then(data => {
					// Clear `h2` collection
					h2s = []
					currentNote.data = marked(
						data,
						{
							sanitize: true,
							gfm: true,
							highlight: code => hljs.highlightAuto(code).value,
							renderer: markedRenderer
						}
					)
					// Write `h2` collection
					currentNote.h2 = h2s
					this.setState({
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
			this.setState({
				activeNoteId: noteId,
			}, () => {this.fetchCurrentNote()})
		}

		render() {
			const {
				activeNoteId,
				isLoading,
				loadingNoteId,
				notes
			} = this.state
			const active = activeNoteId !== null ? this.getActiveNote() : {}

			return (
				<Grid>
					<Row>
						<Col md={3}>
							<Panel>
								<Menu
									notes={notes}
									activeNoteId={activeNoteId}
									isLoading={isLoading}
									loadingNoteId={loadingNoteId}
									onSelect={this.handleSelect}
								/>
							</Panel>
						</Col>

						<Col md={9}>
							<Panel>
								{active.sourceURL && (
									<div className="note-source">
										<a
											className="text-muted small"
											href={active.sourceURL}
											target="_blank"
											rel="noopener"
										>
											Note source code on GitHub
										</a>
									</div>
								)}

								{active.data && (
									<div
										className="rendered-note"
										dangerouslySetInnerHTML={{__html: active.data}}
									/>
								)}
							</Panel>
						</Col>
					</Row>
				</Grid>
			)
		}
	}

	ReactDOM.render(<App/>, document.getElementById('app'))
})(React, ReactDOM, marked, hljs)
