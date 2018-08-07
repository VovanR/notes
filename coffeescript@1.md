# CoffeeScript v. 1

----

- See: http://coffeescript.org/v1/

## The Existential Operator

- See: http://coffeescript.org/v1/#existential-operator

### `value?`
```coffeescript
value = now if value?
```

```javascript
if (typeof value !== "undefined" && value !== null) {
  value = now;
}
```


### `value?`

```coffeescript
value = now if !value?
```

```javascript
if (typeof value === "undefined" || value === null) {
  value = now;
}
```


### `?=`

```coffeescript
speed ?= 15
```

```javascript
if (speed == null) {
  speed = 15;
}
```


### `?`

```coffeescript
footprints = yeti ? "bear"
```

```javascript
footprints = typeof yeti !== "undefined" && yeti !== null ? yeti : "bear";
```


### `?.`

```coffeescript
foo?.bar
```

```javascript
if (typeof foo !== "undefined" && foo !== null) {
  foo.bar;
}
```

```coffeescript
foo?().bar
```

```javascript
if (typeof foo === "function") {
  foo().bar;
}
```



## `if then else`

```coffeescript
date = if friday then sue else jill
```

```javascript
date = friday ? sue : jill;
```



## Operators and Aliases

- `is`, `==` — `===`
- `isnt`, `!=` — `!==`
- `not` — `!`
- `and` — `&&`
- `or` — `||`
- `on`, `yes` — `true`
- `off`, `no` — `false`
- `unless` — as inverse of `if`
  ```coffeescript
  unless foo
	console.log 'no foo'
  ```
  ```javascript
  if (!foo) {
    console.log('no foo');
  }
  ```
  ```coffeescript
  return unless e.target.validity.valid
  ```
  ```javascript
  if (!e.target.validity.valid) {
    return;
  }
  ```
- `@` — `this`



## Присвоить значение аргумента

Присвоит `this.foo` значение аргумента `foo`
```coffeescript
(@foo) =>
```

```javascript
(function(_this) {
  return (function(foo) {
    _this.foo = foo;
  });
})(this);
```

Например
```javascript
getFooData()
  .then((@foo) =>)
```



## Имя ключа

```coffeescript
foo = {
    "#{bar}": false
}
```

```js
foo = {
    [bar]: false
}
```



## Массив объектов

```coffeescript
controls = [
    name: 'firstName'
    value: 'Foo'
  ,
    name: 'lastName'
    value: 'Bar'
  ,
    name: 'middleName'
    value: ''
]
```
