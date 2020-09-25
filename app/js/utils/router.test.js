import test from 'ava'
import Router from './router'

test('defaultRoute', t => {
	global.window = {
		location: {
		},
		addEventListener: () => {}
	}

	const router = new Router({
		routes: {
			readme: {
				title: '',
				url: ''
			}
		},
		defaultRoute: 'readme'
	})

	t.true(router.is('readme'))
})
