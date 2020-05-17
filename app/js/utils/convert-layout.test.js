import test from 'ava'
import convertCharLayout from './convert-layout.js'

test('return EN char if received RU char', t => {
	t.is(convertCharLayout('ф'), 'a')
})

test('return EN char if received EN char', t => {
	t.is(convertCharLayout('w'), 'w')
})
