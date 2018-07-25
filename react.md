# React

----

- See: http://facebook.github.io/react/docs/getting-started.html
- See: http://facebook.github.io/react/docs/tutorial.html
- See: http://facebook.github.io/react/docs/addons.html
- See: http://stackoverflow.com/questions/tagged/reactjs?sort=votes&pageSize=15
- See: [Шаблоны проектирования в React](https://medium.freecodecamp.org/evolving-patterns-in-react-116140e5fe8f) [перевод](https://habrahabr.ru/company/ruvds/blog/349198/)
- See: [React Patterns](https://reactpatterns.com/) [source](https://github.com/chantastic/reactpatterns.com)

## Атрибуты

- See: https://reactjs.org/docs/dom-elements.html#differences-in-attributes


- `class` -> `className`
- `for` -> `htmlFor`
- `key`
- `ref`
- `dangerouslySetInnerHTML`



## Использование CDN

- See: https://cdnjs.com/libraries/react/
- See: https://facebook.github.io/react/downloads.html

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title></title>
</head>
<body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js"></script>
<script>
window.React || document.write('<script src="/static/js/react.min.js"><\/script>');
window.ReactDOM || document.write('<script src="/static/js/react-dom.min.js"><\/script>');
</script>

</body>
</html>
```




## Style

```js
class Color extends PureComponent {
	render() {
		return (
			<span style={{ backgroundColor: this.props.value }}>
				{this.props.value}
			</span>
		);
	}
}

ReactDOM.render(
	<Color value="#ff0000" />,
	document.getElementById('container')
);
```



## Using props

any nested elements as `this.props.children`
```js
// tutorial4.js
class Comment extends React.Component {
	render() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>

				{this.props.children}
			</div>
		);
	}
}
```


## Функция внутри

```js
// tutorial6.js
class Comment extends React.Component {
	render() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>

				{marked(this.props.children.toString())}
			</div>
		);
	}
}
```

```js
// tutorial7.js
class Comment extends React.Component {
	rawMarkup() {
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		return { __html: rawMarkup };
	}

	render() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>

				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
		);
	}
}
```


## Fetching from the server

```js
// tutorial11.js
ReactDOM.render(
	<CommentBox url="/api/comments" />,
	document.getElementById('content')
);
```

Получать данные с сервера
```js
// tutorial13.js
class CommentBox extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}

	render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
}
```

Периодически опрашивать сервер на наличие изменений
```js
// tutorial14.js
class CommentBox extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			data: []
		};
	}

	loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}

	componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	}

	render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
}

ReactDOM.render(
	<CommentBox url="/api/comments" pollInterval={2000} />,
	document.getElementById('content')
);
```

Отправлять форму на сервер
```js
// tutorial19.js
class CommentBox extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			data: []
		};
	}

	loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}

	handleCommentSubmit(comment) {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}

	componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	}

	render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
}
```






## If-Else in JSX

- See: http://facebook.github.io/react/tips/if-else-in-JSX.html

```js
<div>
	{true ? (
		<div>Showing true item</div>
	) : (
		<div>Never showing false item</div>
	)}
</div>
```

```js
<p>My name is {this.name || "default name"}</p>
```

```js
var content = <Container>{window.isLoggedIn ? <Nav /> : <Login />}</Container>;
```

```js
<div>
	{shouldIncludeChild && <ChildComponent/>}
</div>
```

```js
render() {
	return {() => {
		if (this.props.isLoggedIn) {
			return <Dashboard />
		} else {
			return <SignIn />
		}
	}()}
}
```



## Event `keyCode` `which`
```js
handleKeyDown(event: React.KeyboardEvent) {
	if (event.which === ESCAPE_KEY) {
		this.setState({editText: this.props.todo.title});
		this.props.onCancel();
	} else if (event.which === ENTER_KEY) {
		this.handleSubmit();
	}
}
```



```js
class UserGist extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			username: '',
			lastGistUrl: ''
		};
	}

	componentDidMount() {
		$.get(this.props.source, (result) => {
			var lastGist = result[0];
			if (this.isMounted()) {
				this.setState({
					username: lastGist.owner.login,
					lastGistUrl: lastGist.html_url
				});
			}
		});
	}

	render() {
		return (
			<div>
				`${this.state.username}'s last gist is`
				<a href={this.state.lastGistUrl}>here</a>.
			</div>
		);
	}
}

ReactDOM.render(
	<UserGist source="https://api.github.com/users/octocat/gists" />,
	mountNode
);
```



## Пробел между компонентами в JSX

Добавляем `{' '}`
```js
class GlobalNav extends React.Component {
	render() {
		return (
			<div>
				<Link to="/">Home</Link>{' '}
				<Link to="/calendar">Calendar</Link>
			</div>
		)
	}
}
```



## Тестирование test, TDD

- See: https://facebook.github.io/react/docs/test-utils.html
- See: https://github.com/VovanR/react-decinc/blob/master/test.js
- See: https://github.com/reactjs/react-tabs/blob/master/lib/components/__tests__/Tabs-test.js



## Enzyme

- See: http://airbnb.io/enzyme/
- See: https://github.com/airbnb/enzyme/issues/76#issuecomment-189606849

Trigger input change event  
```js
wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
```



## `PureComponent`

- See: https://facebook.github.io/react/docs/react-api.html#react.purecomponent

Неглубокая сверка новых параметров и состояния. Хорошо сочетается с [Immutable.js](http://facebook.github.io/immutable-js/).  

Массивы можно изменять `concat(['new-item'])`, вместо `push`.  

Не использовать для контейнеров (`redux connect`), так как там так же переопределен `shouldComponentUpdate`



## Reselect

- See: https://github.com/reactjs/reselect
- See: https://github.com/neilff/react-redux-performance  

Для мемоизации вычисляемых значений



## React Intl

- See: https://github.com/yahoo/react-intl
- See: https://github.com/yahoo/react-intl/wiki  

Для интернационализации i18n



## Рендерить только видимую часть больших списков

- See: [`react-virtualized`](https://github.com/bvaughn/react-virtualized)
- See: [`react-window`](https://github.com/bvaughn/react-window)



## Jest
### Redux action

```js
import * as actions from '../actions'

describe('deleteItemsAction', () => {
  test('delete', () => {
    const dispatch = jest.fn()
    const itemIds = [1, 2]
    actions.deleteItemsAction(itemIds)(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: ITEM_REMOVED,
      data: {
        id: itemIds[0]
      }
    })
  })
})
```

Action dispatched action
```js
import * as actions from '../actions'

describe('deleteItemsAction', () => {
  test('delete', () => {
    const spy = jest.spyOn(actions, 'delete')
    const dispatch = jest.fn()
    const itemIds = [1, 2]
    actions.deleteItemsAction(itemIds)(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy.mock.calls[0][0]).toEqual([
      type: ITEM_REMOVED,
      data: {
        id: itemIds[0]
      }
    })

    spy.mockReset()
    spy.mockRestore()
  })
})
```



## Профилирование

- See: https://medium.freecodecamp.org/make-react-fast-again-tools-and-techniques-for-speeding-up-your-react-app-7ad39d3c1b82

Добавить в адрес параметр `react_perf`  
Например: `http://localhost:8080?react_perf`  
Открываем **Chrome DevTools** вкладку **Performance**, жмём **Record**
Нам интересна секция **User Timing**



## ref
```js
export class Button extends PureComponent {
	setButtonRef = (ref) => {
		this.buttonRef = ref
	}

	render() {
		return (
			<button
				ref={this.setButtonRef}
				type="button"
			>
				Click
			</button>
		)
	}
}
```



## `<textarea>`

- See: https://reactjs.org/docs/forms.html

```jsx
<textarea
	value={this.state.value}
	onChange={this.handleChange}
/>
```
