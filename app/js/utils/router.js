class Router {
	/**
	 * @param {Object} routes
	 * @param {string} routes.title
	 * @param {string} routes.url
	 * @param {string} defaultRoute
	 */
	constructor({
		routes,
		defaultRoute
	}) {
		this._routes = routes
		this._defaultRoute = defaultRoute

		this._state = {
			name: null,
			parameters: null
		}

		window.addEventListener('hashchange', () => this._updateState())

		this._updateState()
	}

	createUrl(name, parameters, query) {
		name = name || this._state.name
		parameters = parameters || this._state.parameters

		const path = this._routes[name].url
			.split('/')
			.map(part => {
				let parameterName = /:(.+)/.exec(part)
				parameterName = parameterName ? parameterName[1] : null
				if (parameterName) {
					return parameters[parameterName]
				}

				return part
			})
			.join('/')

		// TODO: Add query parameters
		console.log(query)
		return '#' + path
	}

	go(...args) {
		window.location.href = this.createUrl(...args)
	}

	is(name) {
		return this._state.name === name
	}

	_updateState() {
		const {
			path,
			query
		} = this._parseHash()
		const matchingRoute = this._findMatchingRoute(path)

		if (!matchingRoute) {
			this._state = {
				name: this._defaultRoute
			}
			this.go()

			return
		}

		this._state = {
			...matchingRoute,
			query
		}

		// TODO: Fire change?
		// TODO: Update document title?
	}

	_parseHash() {
		return {
			path: '',
			query: ''
		}
	}

	_findMatchingRoute(path) {

	}
}

export default Router
