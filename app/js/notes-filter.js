/* global React */

import {createElement} from './utils.js'
import {convertCharLayout} from './convert-layout.js'

const {
	useCallback,
	useEffect,
	useRef,
	useState
} = React

function NotesFilter({
	onChange,
	onSubmit
}) {
	const [value, setValue] = useState('')
	const inputRef = useRef()

	useEffect(() => {
		document.addEventListener('keydown', event => {
			if (
				event.target !== inputRef.current &&
				event.code === 'Slash'
			) {
				resetValue()
				focusInput()
				event.preventDefault()
			}
		})
	}, [])

	function focusInput() {
		inputRef.current.focus()
	}

	const handleChange = useCallback(event => {
		const value = event.target.value
		const processedValue = value
			.split('')
			.map(char => convertCharLayout(char))
			.join('')

		saveValue(processedValue)
	})

	const handleKeyDown = useCallback(event => {
		switch (event.key) {
			case 'Enter':
				onSubmit()
				break
			case 'Escape':
				resetValue()
				break
			default:
				break
		}
	})

	const handleClickClear = useCallback(() => {
		resetValue()
	})

	const handleClickHelp = useCallback(() => {
		focusInput()
	})

	function resetValue() {
		saveValue('')
	}

	function saveValue(value) {
		setValue(value)
		onChange(value)
	}

	return createElement('div', {className: 'notes-filter'},
		createElement('div', {className: 'notes-filter__container'},
			createElement('input', {
				ref: inputRef,
				type: 'text',
				className: 'form-control notes-filter__input',
				value,
				onChange: handleChange,
				onKeyDown: handleKeyDown,
				autoComplete: 'off',
				autoCorrect: 'off',
				autoCapitalize: 'off',
				cpellcheck: 'false',
				autoFocus: true
			}),
			createElement('button', {
				className: 'btn notes-filter__clear',
				type: 'button',
				title: 'Clear filter',
				tabIndex: -1,
				onClick: handleClickClear
			}, '×'),
			createElement('span', {
				className: 'notes-filter__focus-help',
				title: 'Press `/` key to focus on filter',
				onClick: handleClickHelp
			}, '/')
		)
	)
}

export default NotesFilter
