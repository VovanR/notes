import {createElement} from './utils.js'

const RenderedNote = ({data, htmlData}) => {
	return createElement('div', {
		className: 'rendered-note',
		dangerouslySetInnerHTML: htmlData && {__html: htmlData}
	}, data)
}

export default RenderedNote
