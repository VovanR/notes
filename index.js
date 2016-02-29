(function () {
	'use strict'

	const NOTES = [
		'AngularJS',
		'Backbone',
		'Bash',
		'Django',
		'Git',
		'JavaScript',
		'JS-TDD',
		'Node',
		'Python',
		'React',
		'RegExp',
		'Tmux',
		'TypeScript',
		'Vim'
	]

	const {Grid, Row, Col, Panel, Nav, NavItem} = ReactBootstrap
	const {Router, Route, Link} = ReactRouter
	const markedRenderer = new marked.Renderer()

	markedRenderer.heading = (text, level) => {
		const escapedText = text.toLowerCase().replace(/[^\wА-Яа-я]+/g, '-')
		const id = `anchor-${escapedText}`
		return `<h${level} id="${id}"><a href="#${id}"></a>${text}</h${level}>`
	}

	class Menu extends React.Component {
		handleSelect(index) {
			this.props.onSelect(index)
		}

		render() {
			return (
				<Nav
					bsStyle="pills"
					stacked
					activeKey={this.props.active}
					onSelect={this.handleSelect.bind(this)}
					>
					{this.props.notes.map((note, index) => (
						<NavItem
							eventKey={index}
							href={note.url}
							>
							{note.name}
						</NavItem>
					))}
				</Nav>
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
						data: null
					}
				})
			})()
			this.state = {
				notes: collection,
				active: 0
			}
			this.fetchCurrentNote()
		}

		fetchCurrentNote() {
			let current = this.state.notes[this.state.active]

			if (current.data) {
				return
			}

			fetch(current.url)
				.then(response => {
					return response.text()
				})
				.then(data => {
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
					this.setState()
				})
				.catch(() => {})
		}

		handleSelect(index) {
			this.setState({
				active: index
			}, () => {this.fetchCurrentNote()})
		}

		render() {
			let {notes, active: activeIndex} = this.state
			let active = notes[activeIndex]

			return (
				<Grid>
					<Row>
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
