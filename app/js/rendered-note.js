import {e} from './utils.js'

const RenderedNote = ({data, htmlData}) => {
	return e('div', {
		className: 'rendered-note',
		dangerouslySetInnerHTML: htmlData && {__html: htmlData}
	}, data)
}

export default RenderedNote