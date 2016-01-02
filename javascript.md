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



### Обход массива
```javascript
var arr = ['a', 'b', 'c'];
var i = arr.length;
while (i--) {
	arr[i] // 'c', 'b', 'a'
}
```



### Выделить текст инпута при фокусе
```html
<input type="text" readonly onfocus="this.select();" onclick="this.select();" value="Hello World!">
```



### Выбор цвета, в соответствии со значение параметра `d`
See: http://leafletjs.com/examples/choropleth.html#adding-some-color
```javascript
/**
 * @param {Number} d
 * @return {String} HEX-color code
 */
function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}
```



### Округление числа
```javascript
/**
 * Округление числа
 *
 * @param {Number} num Число с плавающей точкой
 * @return {Number} Целое число
 */
var mathRound = function (num) {
    return (0.5 + num) << 0;
};
```



### Фрагмент документа:
```javascript
var frag = document.createDocumentFragment();

var p = document.createElement('p');
var t = document.createTextNode('first paragraph');
p.appendChild(t);
frag.appendChild(p);

p = document.createElement('p');
t = document.createTextNode('second paragraph');
p.appendChild(t);
frag.appendChild(p);

document.body.appendChild(frag);
```
