/* global React */

import {e} from './utils.js'
import SubMenu from './sub-menu.js'

class MenuItem extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			showSubmenu: true
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
			onSelect
		} = this.props

		if (!isActive) {
			onSelect(note.id)
			return
		}

		if (isActive && note.h2) {
			this.setState(prevState => ({
				showSubmenu: !prevState.showSubmenu
			}))
		}
	}

	render() {
		const {
			isLoading,
			isActive,
			note
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
		)
	}
}

export default MenuItem
