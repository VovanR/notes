(function () {
	'use strict'

	// Exists notes list
	const NOTES = [
		'AngularJS',
		'Backbone',
		'Bash',
		'Django',
		'Git',
		'HTML',
		'JavaScript',
		'JS-TDD',
		'Linux',
		'Node',
		'Python',
		'React',
		'RegExp',
		'Tmux',
		'TypeScript',
		'Vim'
	]

	const {Grid, Row, Col, Panel, ProgressBar} = ReactBootstrap
	const {Router, Route, Link} = ReactRouter
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

	// Main menu
	class Menu extends React.Component {
		handleSelect(index, e) {
			e.preventDefault()
			this.props.onSelect(index)
		}

		render() {
			return (
				<ul
					className={"nav-menu"}
					>
					{this.props.notes.map((note, index) => (
						<li
							key={index}
							className={this.props.active === index ? 'active' : ''}
							>
							<a
								href={note.url}
								onClick={this.handleSelect.bind(this, index)}
								>
								{note.name}
							</a>
							{note.h2 ? (
								<SubMenu
									items={note.h2}
									/>
							) : false}
						</li>
					))}
				</ul>
			)
		}
	}

	// Submenu in main menu
	class SubMenu extends React.Component {
		render() {
			return (
				<ul
					className={"nav-submenu"}
					>
					{this.props.items.map((item, index) => (
						<li
							key={index}
							>
							<a
								href={item.url}
								dangerouslySetInnerHTML={{__html: item.name}}
								/>
						</li>
					))}
				</ul>
			)
		}
	}

	class App extends React.Component {
		constructor() {
			super()
			let collection = (() => {
				return NOTES.map(note => {
					return {
						name: note,
						url: new URL(`${note.toLowerCase()}.md`, location).href,
						data: null,
						subitems: null
					}
				})
			})()
			this.state = {
				notes: collection,
				active: 0,
				isLoading: true
			}
			this.fetchCurrentNote()
		}

		fetchCurrentNote() {
			let current = this.state.notes[this.state.active]

			if (current.data) {
				return
			}

			this.setState({
				isLoading: true
			})

			fetch(current.url)
				.then(response => {
					return response.text()
				})
				.then(data => {
					// Clear `h2` collection
					h2s = []
					current.data = marked(
						data,
						{
							sanitize: true,
							gfm: true,
							highlight: code => {
								return hljs.highlightAuto(code).value
							},
							renderer: markedRenderer
						}
					)
					// Write `h2` collection
					current.h2 = h2s
					this.setState({
						isLoading: false
					})
				})
				.catch(() => {
					this.setState({
						isLoading: false
					})
				})
		}

		handleSelect(index) {
			this.setState({
				active: index,
			}, () => {this.fetchCurrentNote()})
		}

		render() {
			let {notes, active: activeIndex, isLoading} = this.state
			let active = notes[activeIndex]

			return (
				<Grid>
					<Row>
						<Col md={12}>
							<ProgressBar
								active={isLoading ? true : false}
								bsStyle={isLoading ? '' : 'success'}
								now={100}
								/>
						</Col>

						<Col md={3}>
							<Panel>
								<Menu
									notes={notes}
									active={activeIndex}
									onSelect={this.handleSelect.bind(this)}
									/>
							</Panel>
						</Col>

						<Col md={9}>
							<Panel>
								{active.data ? (
									<div
										className="rendered-note"
										dangerouslySetInnerHTML={{__html: active.data}}
										/>
								) : null}
							</Panel>
						</Col>
					</Row>
				</Grid>
			)
		}
	}

	ReactDOM.render(<App />, document.getElementById('app'))
})()
