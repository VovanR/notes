# React

----

- See: http://facebook.github.io/react/docs/getting-started.html
- See: http://facebook.github.io/react/docs/tutorial.html
- See: http://facebook.github.io/react/docs/addons.html
- See: http://stackoverflow.com/questions/tagged/reactjs?sort=votes&pageSize=15

```js
var Color = React.createClass({
	render: function() {
		return (
			<span style={{ backgroundColor: this.props.value }}>
				{this.props.value}
			</span>
		);
	}
});

ReactDOM.render(
	<Color value="#ff0000" />,
	document.getElementById('container')
);
```



## Атрибуты
- `class` -> `className`
- `for` -> `htmlFor`



## Special Non-DOM Attributes
- `key`
- `ref`
- `dangerouslySetInnerHTML`



## Using props
any nested elements as `this.props.children`
```js
// tutorial4.js
var Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		);
	}
});
```


## Функция внутри
```js
// tutorial6.js
var Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{marked(this.props.children.toString())}
			</div>
		);
	}
});
```

```js
// tutorial7.js
var Comment = React.createClass({
	rawMarkup: function() {
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		return { __html: rawMarkup };
	},

	render: function() {
	return (
		<div className="comment">
			<h2 className="commentAuthor">
				{this.props.author}
			</h2>
			<span dangerouslySetInnerHTML={this.rawMarkup()} />
		</div>
	);
	}
});
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
var CommentBox = React.createClass({
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
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
	},
	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
});
```

Периодически опрашивать сервер на наличие изменений
```js
// tutorial14.js
var CommentBox = React.createClass({
	loadCommentsFromServer: function() {
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
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox url="/api/comments" pollInterval={2000} />,
	document.getElementById('content')
);
```

Отправлять форму на сервер
```js
// tutorial19.js
var CommentBox = React.createClass({
	loadCommentsFromServer: function() {
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
	},
	handleCommentSubmit: function(comment) {
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
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
});
```






## If-Else in JSX
http://facebook.github.io/react/tips/if-else-in-JSX.html
```js
<div>
	{(true
		? <div>Showing true item</div>
		: <div>Never showing false item</div>
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
	{shouldIncludeChild ? <ChildComponent/> : false}
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



## Event keyCode which
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
var UserGist = React.createClass({
	getInitialState: function() {
		return {
			username: '',
			lastGistUrl: ''
		};
	},

	componentDidMount: function() {
		$.get(this.props.source, function(result) {
			var lastGist = result[0];
			if (this.isMounted()) {
				this.setState({
					username: lastGist.owner.login,
					lastGistUrl: lastGist.html_url
				});
			}
		}.bind(this));
	},

	render: function() {
		return (
			<div>
				`${this.state.username}'s last gist is`
				<a href={this.state.lastGistUrl}>here</a>.
			</div>
		);
	}
});

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
