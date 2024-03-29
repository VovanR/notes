import createElement from './utils/create-element.js'

function Progress() {
	return createElement('div', {className: 'progress'},
		createElement('div', {
			className: 'progress-bar progress-bar-striped progress-bar-animated',
			role: 'progressbar',
			style: {width: '100%'},
			'aria-valuenow': '100',
			'aria-valuemin': '0',
			'aria-valuemax': '100',
		}),
	)
}

export default Progress
