/* global React */

import {e} from './utils.js'

class NotesFilter extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			value: ''
		}

		this.inputRef = null

		this.handleChange = this.handleChange.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.setInputRef = this.setInputRef.bind(this)
	}

	componentDidMount() {
		document.addEventListener('keyup', (e) => {
			if (e.code === 'Slash') {
				this.inputRef.focus()
			}
		})
	}

	setInputRef(ref) {
		this.inputRef = ref
	}

	handleChange(e) {
		this.setValue(e.target.value)
	}

	handleKeyDown(e) {
		switch (e.key) {
			case 'Enter':
				this.props.onSubmit()
				break
			case 'Escape':
				this.resetValue()
				break
			default:
				break
		}
	}

	resetValue() {
		this.setValue('')
	}

	setValue(value) {
		this.setState({value}, () => {
			this.props.onChange(value)
		})
	}
	
	render() {
		const {
			value
		} = this.state

		return e('div', {className: 'notes-filter'},
			e('input', {
				ref: this.setInputRef,
				type: 'text',
				className: 'notes-filter__input form-control',
				value,
				onChange: this.handleChange,
				onKeyDown: this.handleKeyDown,
				autoComplete: 'off',
				autocorrect: 'off',
				autoCapitalize: 'off',
				cpellcheck: 'false',
				autoFocus: true
			})
		)
	}
}

export default NotesFilter
