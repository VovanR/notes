# React

----

- See: http://facebook.github.io/react/docs/getting-started.html
- See: http://facebook.github.io/react/docs/tutorial.html
- See: http://facebook.github.io/react/docs/addons.html
- See: http://stackoverflow.com/questions/tagged/reactjs?sort=votes&pageSize=15
- See: [Шаблоны проектирования в React](https://medium.freecodecamp.org/evolving-patterns-in-react-116140e5fe8f) [перевод](https://habrahabr.ru/company/ruvds/blog/349198/)
- See: [React Patterns](https://reactpatterns.com/) [source](https://github.com/chantastic/reactpatterns.com)
- See: [`useHooks`](https://usehooks.com/)



## UI

- See: [Material-UI](https://material-ui.com/)
- See: [Ring UI](https://github.com/JetBrains/ring-ui)
- See: [ANT DESIGN PRO](https://ant.design/)


## Libraries

- See: https://github.com/theKashey?tab=repositories

### Полоса прокрутки (scrollbar)
- See: https://github.com/malte-wessel/react-custom-scrollbars

### Всплывающая подсказка (tooltip) и выпадающее меню (dropdown)
- See: https://github.com/atomiks/tippy.js-react

### Уведомления
- See: https://github.com/fkhadra/react-toastify

### Формы
- See: https://github.com/jaredpalmer/formik

### Inputs
- See: https://github.com/JedWatson/react-input-autosize

### Input format and mask
-See: https://github.com/istarkov/rifm

### Обработка клика вне компонента
- See: https://github.com/Pomax/react-onclickoutside
- See: https://github.com/nanot1m/react-foco

### Управление фокусом
- See: https://github.com/theKashey/react-focus-lock

### Анимация
- See: https://github.com/react-spring/react-spring
- See: https://github.com/reactjs/react-transition-group

### Tilt
- See: https://github.com/mkosir/react-parallax-tilt

### Админка
- See: https://marmelab.com/react-admin/Tutorial.html

### Storybook
- See: https://github.com/vrizo/uibook/
- See: https://storybook.js.org/



## Атрибуты

- See: https://reactjs.org/docs/dom-elements.html#differences-in-attributes


- `class` -> `className`
- `for` -> `htmlFor`
- `key`
- `ref`
- `dangerouslySetInnerHTML`



## Использование CDN

- See: https://cdnjs.com/libraries/react
- See: https://cdnjs.com/libraries/react-dom
- See: https://facebook.github.io/react/downloads.html

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title></title>
</head>
<body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.9.0/umd/react.production.min.js" integrity="sha256-15e7WPERh0o2wO4LNQS156a0LZ6EpYHY9wzApyqie08=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.9.0/umd/react-dom.production.min.js" integrity="sha256-WQOxvuR1poOi0qwIafu9sWYJ4rje3oAn0v7idBItkAM=" crossorigin="anonymous"></script>
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
        const {
            value,
        } = this.props

        return (
            <span style={{backgroundColor: value}}>
                {value}
            </span>
        );
    }
}

ReactDOM.render(
    <Color value="#ff0000"/>,
    document.getElementById('container')
);
```



## Using props

any nested elements as `this.props.children`
```js
// tutorial4.js
import React, {Component} from 'react'

class Comment extends Component {
    render() {
        const {
            author,
            children,
        } = this.props

        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {author}
                </h2>

                {children}
            </div>
        );
    }
}
```


## Функция внутри

```js
// tutorial6.js
import React, {Component} from 'react'

class Comment extends Component {
    render() {
        const {
            author,
            children,
        } = this.props

        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {author}
                </h2>

                {marked(children.toString())}
            </div>
        );
    }
}
```

```js
// tutorial7.js
import React, {Component} from 'react'

class Comment extends Component {
    rawMarkup() {
        return {
            __html: marked(this.props.children.toString(), {sanitize: true}),
        };
    }

    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>

                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
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
import React, {Component} from 'react'

class CommentBox extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        const {
            url,
        } = this.props

        $.ajax({
            url,
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({data});
            },
            error: (xhr, status, err) => {
                console.error(url, status, err.toString());
            },
        });
    }

    render() {
        return (
            <div className="commentBox">
                <h1>
                    Comments
                </h1>

                <CommentList data={this.state.data}/>

                <CommentForm/>
            </div>
        );
    }
}
```

Периодически опрашивать сервер на наличие изменений
```js
// tutorial14.js
import React, {Component} from 'react'

class CommentBox extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            data: [],
        };
    }

    loadCommentsFromServer() {
        const {
            url,
        } = this.props

        $.ajax({
            url,
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({data});
            },
            error: (xhr, status, err) => {
                console.error(url, status, err.toString());
            },
        });
    }

    componentDidMount() {
        this.loadCommentsFromServer();

        setInterval(() => this.loadCommentsFromServer, this.props.pollInterval);
    }

    render() {
        return (
            <div className="commentBox">
                <h1>
                    Comments
                </h1>

                <CommentList data={this.state.data}/>

                <CommentForm/>
            </div>
        );
    }
}

ReactDOM.render(
    <CommentBox
      url="/api/comments"
      pollInterval={2000}
    />,
    document.getElementById('content')
);
```

Отправлять форму на сервер
```js
// tutorial19.js
import React, {Component} from 'react'

class CommentBox extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            data: [],
        };
    }

    loadCommentsFromServer() {
        const {
            url,
        } = this.props

        $.ajax({
            url,
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({data});
            },
            error: (xhr, status, err) => {
                console.error(url, status, err.toString());
            },
        });
    }

    handleCommentSubmit(comment) {
        const {
            url,
        } = this.props

        $.ajax({
            url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: data => {
                this.setState({data});
            },
            error: (xhr, status, err) => {
                console.error(url, status, err.toString());
            },
        });
    }

    componentDidMount() {
        this.loadCommentsFromServer();

        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }

    render() {
        return (
            <div className="commentBox">
                <h1>
                    Comments
                </h1>

                <CommentList data={this.state.data}/>

                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
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


- See: [`isMounted` is an anti-pattern](https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html)

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



## Ignore events from children of component

```jsx
handleKeyDown = (e) => {
    // Ignore events from children
    if (e.currentTarget !== e.target) {
        return
    }

    if (e.keyCode === KEY_CODE.BACKSPACE) {
        e.preventDefault()
        this.handleClickDelete()
    } else if (e.keyCode === KEY_CODE.ESC) {
        e.preventDefault()
        if (this.chipRef) {
            this.chipRef.blur()
        }
    }
}
```



## Portal

- See: https://css-tricks.com/using-react-portals-to-render-children-outside-the-dom-hierarchy/
- See: https://codepen.io/kinsomicrote/pen/JeLNqa?editors=0110



## `<textarea>`

- See: https://reactjs.org/docs/forms.html

```jsx
<textarea
	value={this.state.value}
	onChange={this.handleChange}
/>
```



## Redux

- See: [Flux Standard Action utilities for Redux](https://github.com/redux-utilities/redux-actions)
- See: [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
- See: [Redux in 1 min](https://poet.codes/e/KMXQEO2gquN)



## CSS custom properties

- See: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

```jsx
import React, {Component, createRef} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const DEFAULT_TEXT_SIZE = 1

export class TextContainer extends Component {
  constructor(props, context) {
    super(props, context)

    this.containerRef = createRef()
  }

  componentDidMount() {
    this.updateTextSize()
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    const {
      textSize,
    } = this.props

    if (textSize !== prevProps.textSize) {
      this.updateTextSize()
    }
  }

  updateTextSize() {
    this.containerRef.current.style.setProperty('--text-size', this.props.textSize)
  }

  render() {
    const {
      className,
    } = this.props

    return (
      <div
        ref={this.containerRef}
        className={classNames('text-container', className)}
      >
        Foo bar baz
      </div>
    )
  }
}

TextContainer.propTypes = {
  className: PropTypes.string,
  textSize: PropTypes.number,
}

TextContainer.defaultProps = {
  textSize: DEFAULT_TEXT_SIZE,
}

export default TextContainer
```

```css
.text-container {
  --text-size: 1;

  font-size: calc(1em * var(--text-size));
}
```
