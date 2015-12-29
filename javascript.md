# JavaScript

----

## Remove last line
```javascript
var foo = 'a\nb\nc\nd';
foo = foo.substring(0, foo.lastIndexOf('\n')); // 'a\nb\nc'
```
