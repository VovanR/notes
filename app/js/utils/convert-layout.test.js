import test from 'node:test'
import assert from 'node:assert'
import convertCharLayout from './convert-layout.js'

test('return EN char if received RU char', () => {
	assert.strictEqual(convertCharLayout('ф'), 'a')
})

test('return EN char if received EN char', () => {
	assert.strictEqual(convertCharLayout('w'), 'w')
})
