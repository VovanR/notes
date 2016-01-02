# JavaScript

----

## Remove last line
```javascript
var foo = 'a\nb\nc\nd';
foo = foo.substring(0, foo.lastIndexOf('\n')); // 'a\nb\nc'
```


## Fetch
```javascript
fetch('https://api.github.com/users/vovanr').then(x => x.json()).then(x => {console.log(x)})
```


### Array

```javascript
var foo = [1, 2, 3];

foo.shift(); // 1 (removed item)
// foo = [2, 3]

foo.unshift(4); // 3 (new foo.length)
// foo = [4, 2, 3]

foo.pop(); // 3 (removed item)
// foo = [4, 2]

foo.push(5); // 4 (new foo.length)
// foo = [4, 2, 5]
```

#### concat
```javascript
var foo = [1, 2];
var bar = [3, 4];
foo.concat(bar); // [1, 2, 3, 4]
// foo = [1, 2]
// bar = [3, 4]
```
