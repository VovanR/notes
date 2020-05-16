/* global React, ReactCustomScrollbars */

import {createElement} from './utils.js'

const {Scrollbars} = ReactCustomScrollbars

const renderDiv = (props, className) => createElement('div', {...props, className})

class CustomScrollbars extends React.Component {
	renderTrackVertical(props) {
		return renderDiv(props, 'custom-scrollbars__track custom-scrollbars__track_vertical')
	}

	renderThumbVertical(props) {
		return renderDiv(props, 'custom-scrollbars__thumb custom-scrollbars__thumb_vertical')
	}

	renderView(props) {
		return renderDiv(props, 'custom-scrollbars__view')
	}

	render() {
		return createElement(Scrollbars, {
			renderTrackVertical: this.renderTrackVertical,
			renderThumbVertical: this.renderThumbVertical,
			renderView: this.renderView,
			className: 'custom-scrollbars ' + (this.props.className || '')
		}, this.props.children)
	}
}

export default CustomScrollbars
