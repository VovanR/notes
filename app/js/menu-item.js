/* global React */

import createElement from './utils/create-element.js'
import classNames from './utils/class-names.js'
import SubMenu from './sub-menu.js'

const {
	useCallback,
	useEffect,
	useState
} = React

function MenuItem({
	note,
	active,
	loading,
	onSelect
}) {
	const [showSubmenu, setShowSubmenu] = useState(true)

	useEffect(() => {
		if (showSubmenu === false) {
			setShowSubmenu(true)
		}
	}, [active])

	const handleSelect = useCallback(event => {
		event.preventDefault()

		if (!active) {
			onSelect(note.id)
			return
		}

		if (active && note.h2) {
			setShowSubmenu(!showSubmenu)
		}
	})

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
				onClick: handleSelect
			},
			note.name,
			loading && createElement(
				'span',
				{
					className: 'nav-menu__spinner'
				}
			)
		),
		showSubmenu && note.h2 && createElement(SubMenu, {items: note.h2})
	)
}

export default MenuItem
