import test from 'ava'
import classNames from './class-names.js'

test('returns class name string', t => {
	t.is(classNames({a: true, b: false, c: true}), 'a c')
})
