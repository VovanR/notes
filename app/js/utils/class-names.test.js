import test from 'node:test'
import assert from 'node:assert'
import classNames from './class-names.js'

test('returns class name string', () => {
	assert.strictEqual(classNames({a: true, b: false, c: true}), 'a c')
})
