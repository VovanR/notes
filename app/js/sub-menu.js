import {e} from './utils.js'

const SubMenu = props => e('ul', {className: 'nav-submenu'},
	props.items.map((item, index) => e('li', {key: index},
		e('a', {
			href: item.url,
			dangerouslySetInnerHTML: {__html: item.name}
		})
	))
)

export default SubMenu
