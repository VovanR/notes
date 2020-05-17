/* global ReactCustomScrollbars */

import {createElement} from './utils.js'

const {Scrollbars} = ReactCustomScrollbars

const renderDiv = (props, className) => createElement('div', {...props, className})

function CustomScrollbars({
	className,
	children
}) {
	function renderTrackVertical(props) {
		return renderDiv(props, 'custom-scrollbars__track custom-scrollbars__track_vertical')
	}

	function renderThumbVertical(props) {
		return renderDiv(props, 'custom-scrollbars__thumb custom-scrollbars__thumb_vertical')
	}

	function renderView(props) {
		return renderDiv(props, 'custom-scrollbars__view')
	}

	return createElement(Scrollbars, {
		renderTrackVertical,
		renderThumbVertical,
		renderView,
		className: 'custom-scrollbars ' + (className || '')
	}, children)
}

export default CustomScrollbars
