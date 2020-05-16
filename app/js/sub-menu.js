import {createElement} from './utils.js'

const SubMenu = props => createElement('ul', {className: 'nav-submenu'},
	props.items.map((item, index) => createElement('li', {key: index},
		createElement('a', {
			href: item.url,
			dangerouslySetInnerHTML: {__html: item.name}
		})
	))
)

export default SubMenu
