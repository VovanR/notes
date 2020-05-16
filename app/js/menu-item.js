/* global React */

import {
	createElement,
	classNames
} from './utils.js'
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
			this.props.active !== nextProps.active &&
			this.state.showSubmenu === false
		) {
			this.setState({showSubmenu: true})
		}
	}

	handleSelect(event) {
		event.preventDefault()

		const {
			active,
			note,
			onSelect
		} = this.props

		if (!active) {
			onSelect(note.id)
			return
		}

		if (active && note.h2) {
			this.setState(previousState => ({
				showSubmenu: !previousState.showSubmenu
			}))
		}
	}

	render() {
		const {
			loading,
			active,
			note
		} = this.props

		return createElement(
			'li',
			{
				className: classNames({
					popular: note.popular,
					active
				})
			},
			createElement(
				'a',
				{
					href: note.url,
					onClick: this.handleSelect
				},
				note.name,
				loading && createElement(
					'span',
					{
						className: 'nav-menu__spinner'
					}
				)
			),
			this.state.showSubmenu && note.h2 && createElement(SubMenu, {items: note.h2})
		)
	}
}

export default MenuItem
