import createElement from './utils/create-element.js'

function SubMenu({items}) {
	return createElement('ul', {className: 'nav-submenu'},
		items.map((item, index) => createElement('li', {key: index},
			createElement('a', {
				href: item.url,
				dangerouslySetInnerHTML: {__html: item.name},
			}),
		)),
	)
}

export default SubMenu
