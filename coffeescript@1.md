# CoffeeScript v1

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
