import {e} from './utils.js'

const Progress = () => e('div', {className: 'progress'},
	e('div', {
		className: 'progress-bar progress-bar-striped progress-bar-animated',
		role: 'progressbar',
		style: {width: '100%'},
		'aria-valuenow': '100',
		'aria-valuemin': '0',
		'aria-valuemax': '100'
	})
)

export default Progress
