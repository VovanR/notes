import test from 'ava'
import processNote from './process-note.js'

test('process note', t => {
	global.window = {
		location: 'http://test_location',
	}

	const note = {
		name: 'Test_name',
		archive: true,
		popular: true,
	}

	const processedNote = {
		id: 'Test_name',
		name: 'Test name',
		sourceURL: 'https://github.com/VovanR/notes/blob/master/notes/test_name.md',
		url: 'http://test_location/notes/test_name.md',
		data: null,
		subitems: null,
		archive: true,
		popular: true,
	}

	t.deepEqual(processNote(note), processedNote)
})
