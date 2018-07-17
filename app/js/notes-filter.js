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
		this.handleClickClear = this.handleClickClear.bind(this)
		this.handleClickHelp = this.handleClickHelp.bind(this)
		this.setInputRef = this.setInputRef.bind(this)
	}

	componentDidMount() {
		document.addEventListener('keyup', e => {
			if (e.code === 'Slash') {
				this.resetValue()
				this.focusInput()
			}
		})
	}

	setInputRef(ref) {
		this.inputRef = ref
	}

	focusInput() {
		this.inputRef.focus()
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

	handleClickClear() {
		this.resetValue()
	}

	handleClickHelp() {
		this.focusInput()
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
			e('div', {className: 'notes-filter__container'},
				e('input', {
					ref: this.setInputRef,
					type: 'text',
					className: 'form-control notes-filter__input',
					value,
					onChange: this.handleChange,
					onKeyDown: this.handleKeyDown,
					autoComplete: 'off',
					autoCorrect: 'off',
					autoCapitalize: 'off',
					cpellcheck: 'false',
					autoFocus: true
				}),
				e('button', {
					className: 'btn notes-filter__clear',
					type: 'button',
					title: 'Clear filter',
					tabIndex: -1,
					onClick: this.handleClickClear
				}, '×'),
				e('span', {
					className: 'notes-filter__focus-help',
					title: 'Press `/` key to focus on filter',
					onClick: this.handleClickHelp
				}, '/')
			)
		)
	}
}

export default NotesFilter
