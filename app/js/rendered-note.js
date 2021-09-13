import createElement from './utils/create-element.js'

function RenderedNote({data, htmlData}) {
	return createElement('div', {
		className: 'rendered-note',
		dangerouslySetInnerHTML: htmlData && {__html: htmlData},
	}, data)
}

export default RenderedNote
