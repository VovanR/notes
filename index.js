(function () {
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
		'JavaScript',
		'JS-TDD',
		'Linux',
		'Markdown',
		'Node',
		'Pug',
		'Python',
		'React',
		'RegExp',
		'Tmux',
		'TypeScript',
		'Vim',
	]

	const {Grid, Row, Col, Panel, ProgressBar} = ReactBootstrap
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
		constructor(props) {
			super(props)
			this.handleSelect = this.handleSelect.bind(this)
		}

		handleSelect(index, e) {
			e.preventDefault()
			this.props.onSelect(index)
		}

		render() {
			const {
				active,
				notes
			} = this.props

			return (
				<ul className="nav-menu">
					{notes.map((note, index) => (
						<li
							key={index}
							className={active === index ? 'active' : ''}
						>
							<a
								href={note.url}
								onClick={this.handleSelect.bind(this, index)}
							>
								{note.name}
							</a>

							{note.h2 && <SubMenu items={note.h2}/>}
						</li>
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
		constructor() {
			super()
			const collection = (() => {
				return NOTES.map(note => ({
					name: note,
					url: new URL(`${note.toLowerCase()}.md`, location).href,
					data: null,
					subitems: null
				}))
			})()
			this.state = {
				notes: collection,
				active: null,
				isLoading: false
			}

			this.handleSelect = this.handleSelect.bind(this)
		}

		fetchCurrentNote() {
			const current = this.state.notes[this.state.active]

			if (current.data) {
				return
			}

			this.setState({isLoading: true})

			fetch(current.url)
				.then(response => response.text())
				.then(data => {
					// Clear `h2` collection
					h2s = []
					current.data = marked(
						data,
						{
							sanitize: true,
							gfm: true,
							highlight: code => hljs.highlightAuto(code).value,
							renderer: markedRenderer
						}
					)
					// Write `h2` collection
					current.h2 = h2s
					this.setState({isLoading: false})
				})
				.catch(() => {
					this.setState({isLoading: false})
				})
		}

		handleSelect(index) {
			this.setState({
				active: index,
			}, () => {this.fetchCurrentNote()})
		}

		render() {
			const {
				active: activeIndex,
				isLoading,
				notes
			} = this.state
			const active = activeIndex !== null ? notes[activeIndex] : {}

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
									onSelect={this.handleSelect}
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

	ReactDOM.render(<App/>, document.getElementById('app'))
})()
