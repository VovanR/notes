# JavaScript

----

- See: [JS Tips](https://github.com/loverajoel/jstips)
- See: [You Don't Need jQuery](https://github.com/camsong/You-Dont-Need-jQuery)
- See: [You might not need jQuery](https://github.com/HubSpot/youmightnotneedjquery)
- See: [You don't (may not) need Lodash/Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore)
- See: [You Don't Need JavaScript](https://github.com/you-dont-need/You-Dont-Need-JavaScript)
- See: [You Don't Know JS (book series)](https://github.com/getify/You-Dont-Know-JS)
- See: https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules
- See: [JavaScript Data Structures and Algorithms](https://github.com/loiane/javascript-datastructures-algorithms)
- See: [Content Security Policies](https://frontendian.co/csp)
- See: [Asynchronous iteration](http://exploringjs.com/es2018-es2019/ch_asynchronous-iteration.html)
- See: [Вопросы кандидату на должность front-end разработчика](https://h5bp.org/Front-end-Developer-Interview-Questions/translations/russian/) https://github.com/h5bp/Front-end-Developer-Interview-Questions
- See: [`dat.GUI`](https://github.com/dataarts/dat.gui)
- See: http://codeguide.co
- See: [Removing jQuery from GitHub.com front-end](https://github.blog/2018-09-06-removing-jquery-from-github-frontend/)
- See: [Preload, prefetch and other `<link>` tags](https://3perf.com/blog/link-rels/)
- See: [Browser extension](https://24ways.org/2018/my-first-chrome-extension/)
- See: [«И так сойдёт!» или главные ошибки кандидатов](https://blog.csssr.com/ru/article/candidates-mistakes/)
- See: [Performance (KharkivCSS 20 апреля 2019 года Слайды)](https://silentimp.github.io/performance/)
- See: [What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)
- See: https://30secondsofcode.org/
- See: [An introduction to JSDoc](http://2ality.com/2011/08/jsdoc-intro.html)
- See: [JavaScript-движки: как они работают? От стека вызовов до промисов — (почти) всё, что вам нужно знать](https://habr.com/ru/company/vk/blog/452906/)
- See: [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- See: [Callback Hell](http://callbackhell.com/)
- See: [Web Performance 101](https://3perf.com/talks/web-perf-101/)
- See: [`String.prototype.normalize()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
- See: [Remainder operator vs. modulo operator (with JavaScript code)](https://2ality.com/2019/08/remainder-vs-modulo.html)
- See: [ECMAScript features by version](https://github.com/sudheerj/ECMAScript-features)


## Performance

- See: [Array.includes vs Set.has vs Map.has vs Object[]](https://jsbench.me/wwl3ijswla/1)



## Libs, Библиотеки

### Работа с цветом

- See: https://github.com/gka/chroma.js/

### Календарь

- See: https://fullcalendar.io/

### Validation Rules

- See: https://www.npmjs.com/package/yup
- See: http://livr-spec.org/

### Подписка на изменения видимой области

- See: https://github.com/robb0wen/tornis

### Блокировка прокрутки страницы

- See: https://github.com/willmcpo/body-scroll-lock

### Базы данных

- See: https://github.com/typicode/lowdb
- See: https://github.com/sequelize/sequelize



## Test libs

- See: https://github.com/thoov/mock-socket
- See: https://github.com/wheresrhys/fetch-mock



## CORS

- See: [CORS](https://frontendian.co/cors)

Если надо локально протестировать АПИ, которая ругается, можно использовать прокси [`cors-anywhere`](https://github.com/Rob--W/cors-anywhere/)

```diff
-fetch(`https://api.weather.yandex.ru/v1/forecast`)
+fetch(`https://cors-anywhere.herokuapp.com/https://api.weather.yandex.ru/v1/forecast`)
```



## Tolerance, within

```js
/**
 * @param {number} value1
 * @param {number} value2
 * @param {number} tolerance
 * @returns {boolean}
 *
 * @example
 * diffIsTolerance(10, 12, 3)
 * //=> true
 * diffIsTolerance(10, 15, 3)
 * //=> false
 */
const diffIsTolerance = (value1, value2, tolerance) => Math.abs(value1 - value2) <= tolerance
```



## In Range

- See: https://lodash.com/docs/#inRange

```js
/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 *
 * @example
 * inRange(4, 1, 5)
 * //=> true
 * inRange(6, 1, 5)
 * //=> false
 */
const inRange = (value, min, max) => value >= min && value <= max
```



## Привести к лимиту

- See: [clamp](https://lodash.com/docs/#clamp)

```js
/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 *
 * @example
 * limit(5, 10, 20)
 * //=> 10
 * limit(99, 5, 30)
 * //=> 30
 * limit(3, 1, 5)
 * //=> 3
 */
const limit = (value, min, max) => Math.min(Math.max(value, min), max);
```



## ES2015 (ES6)

- See: http://es6-features.org/
- See: https://ponyfoo.com/articles/es6



## Деньги

- See: [Dinero.js](https://github.com/sarahdayan/dinero.js)



## Описание API

- See: [Переменные liquid](https://liquidhub.ru/collection/shpargalka-liquid)



## String

### Remove last line

```javascript
var foo = 'a\nb\nc\nd';
foo = foo.substring(0, foo.lastIndexOf('\n')); //=> 'a\nb\nc'
```

### Remove first character

```js
var foo = 'abc';
foo.slice(1); //=> 'bc'
```

### Remove last character

```js
var foo = 'abc';
foo.slice(0, -1); //=> 'ab'
```

### Remove first and last character

```js
var foo = 'abc';
foo.slice(1, -1); //=> 'b'
```

### Get last character
```javascript
var foo = 'abc';
foo.slice(-1); //=> 'c'
```



## Fetch

```javascript
fetch('https://api.github.com/users/vovanr')
  .then(x => x.json())
  .then(x => {console.log(x)})
```



## Array

```javascript
var foo = ['a', 'b', 'c'];

// Remove first item
foo.shift(); //=> 'a' (removed item)
console.log(foo); //=> ['b', 'c']

// Add first item
foo.unshift('d'); //=> 3 (new foo length)
console.log(foo); //=> ['d', 'b', 'c']

// Remove last item
foo.pop(); //=> 'c' (removed item)
console.log(foo); //=> ['d', 'b']

// Add last item
foo.push('e'); //=> 3 (new foo length)
console.log(foo); //=> ['d', 'b', 'e']

// Replace item with another item
foo.splice(foo.indexOf('b'), 1, 'f'); //=> ['b'] (replaced items)
console.log(foo); //=> ['d', 'f', 'e']

// Remove item from array
foo.splice(foo.indexOf('f'), 1); //=> ['f'] (replaced items)
console.log(foo); //=> ['d', 'e']
```

### Fill

- See: https://exploringjs.com/impatient-js/ch_arrays.html#filling-arrays

```javascript
Array.from({length: 3}, (n, i) => i); //=> [0, 1, 2]
[...Array(3).keys()]; //=> [0, 1, 2]

new Array(3).fill(0); //=> [0, 0, 0]
Array.from({length: 3}, () => 0); //=> [0, 0, 0]
```

### Range

```javascript
/**
 * @param {number} start
 * @param {number} end
 * @returns {Array}
 *
 * @example
 * createRange(2, 5); //=> [2, 3, 4]
 */
function createRange(start, end) {
  return Array.from({length: end - start}, (_, i) => i + start);
}
```



### First N items

```javascript
var foo = [1, 2, 3, 4, 5];

// First 3 items
foo.slice(0, 3); //=> [1, 2, 3]
foo //=> [1, 2, 3, 4, 5]
```

### Last N items

```javascript
var foo = [1, 2, 3, 4, 5];

// Last 3 items
foo.slice(-3); //=> [3, 4, 5]
foo //=> [1, 2, 3, 4, 5]
```



### `concat`

```javascript
var foo = [1, 2];
var bar = [3, 4];
foo.concat(bar); //=> [1, 2, 3, 4] (new array)
// foo = [1, 2]
// bar = [3, 4]
```



### Clone Array `slice`

```javascript
const a = [1, 2];
const b = a; // link
const c = a.slice(); // clone
a[0] = 3;
// a = [3, 2]
// b = [3, 2] // link
// c = [1, 2] // clone
```



### Обход массива

```javascript
var arr = ['a', 'b', 'c'];
var i = arr.length;
while (i--) {
  arr[i] //=> 'c', 'b', 'a'
}
```



### Сортировка массива объектов по массиву ID

```javascript
var m = [{id: 8}, {id: 2}, {id: 3}];
var s = [3, 2, 8];
m.sort((a, b) => s.indexOf(a.id) - s.indexOf(b.id));
console.log(m); //=> [{id: 3}, {id: 2}, {id: 8}]
```



### Reduce

- See: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

Arguments:
- `callback`
  - `accumulator`
  - `currentValue`
  - `currentIndex`
  - `array`
- `initialValue`

```js
[0, 1, 2, 3].reduce(function(sum, value) {
  return sum + value
}, 0)
```

```js
[0, 1, 2, 3, 4].reduce(
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue
  },
  10
)
```

```js
[0, 1, 2, 3].reduce(
  (acc, cur) => acc + cur,
  0
)
```



## Object

### Clone object

- See: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Cloning_an_object

```js
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```



### Deep Clone object

```js
const DATA = JSON.parse(JSON.stringify(window.DATA));
```



### Merge objects

- See: [Merging objects](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Merging_objects)

```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); //=> { a: 1, b: 2, c: 3 }
console.log(o1);  //=> { a: 1, b: 2, c: 3 }, target object itself is changed.
```



### Object `forEach`

- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

```js
Object.keys(object).forEach(key => {
  console.log(object[key]);
});
```

```js
Object.entries(object).forEach(([key, value]) => {
   console.log(key, value);
});
```



### Оператор `for in` (`forin`, `for..in`)

- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

```javascript
for (key in object) {
  if (!Object.prototype.hasOwnProperty.call(object, key)) {
    continue;
  }

  console.log(object[key]);
}

for (key in object) {
  if (!Object.prototype.hasOwnProperty.call(object, key)) continue;

  console.log(object[key]);
}

for (key in object) if (Object.prototype.hasOwnProperty.call(object, key)) {
  console.log(object[key]);
}
```



### Оператор `for of` (`forof`, `for..of`)

- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

```javascript
const object = {a: 1, b: 2};
for (const [key, value] of Object.entries(object)) {
  console.log(key, value);
}
//=> "a", 1
//=> "b", 2
```

```javascript
const booksById = new Map();
booksById.set('a', 'Foo');
booksById.set('b', 'Bar');
for (const [id, book] of booksById) {
  console.log(id, book);
}
//=> "a", "Foo"
//=> "b", "Bar"
```



## Number

### Округление числа

- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

```javascript
/**
 * Equals `Math.round();`
 *
 * @param {Number} num Число с плавающей точкой
 * @return {Number} Целое число
 */
var mathRound = function (num) {
  return (0.5 + num) << 0;
};
```



### Оставить целое

- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

```js
Math.floor(100.999)
//=> 100

100.999 | 0
//=> 100
```


## Список методов экземпляра класса. Get class instance methods

```js
class A {
  a() {}
  b() {}
}

const a = new A()

Object.getOwnPropertyNames(a.constructor.prototype).filter(i => i !== 'constructor')
//=> ["a", "b"]
```



## Выделить текст инпута при фокусе

```html
<input
  type="text"
  readonly
  onfocus="this.select();"
  onclick="this.select();"
  value="Hello World!"
>
```



## Выбор цвета, в соответствии со значением параметра `d`

- See: http://leafletjs.com/examples/choropleth.html#adding-some-color

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



## monkey-patching

- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

```js
var originalfoo = someobject.foo;
someobject.foo = function () {
  // Do stuff before calling function
  console.log(arguments);
  // Call the function as it would have been called normally:
  originalfoo.apply(this, arguments);
  // Run stuff after, here.
}
```



### Arrow function

```js
var originalfoo = someobject.foo;
someobject.foo = (dispatch, getState, ...rest) => {
  // Do stuff before calling function
  console.log([dispatch, getState, ...rest]);
  // Call the function as it would have been called normally:
  originalfoo.apply(someobject, [dispatch, getState, ...rest]);
  // Run stuff after, here.
}
```



## Фрагмент документа

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



## Задать `iframe` высоту его контента

```js
var iframe = element[0].childNodes[0];
iframe.onload = function () {
  var height;
  height = iframe.contentWindow.document.body.offsetHeight;
  var marginTop = iframe.contentWindow.window.getComputedStyle(iframe.contentWindow.document.body).marginTop;
  marginTop = parseInt(marginTop, 10);
  var marginBottom = iframe.contentWindow.window.getComputedStyle(iframe.contentWindow.document.body).marginBottom;
  marginBottom = parseInt(marginBottom, 10);
  iframe.style.height = height + marginTop + marginBottom + 'px';
};
```



## Binary

- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

Уменьшить до чётного, если нечётное. Побитовое `AND`
```js
100 & ~1 === 100;
101 & ~1 === 100;
const numberToEven = number => number & ~1;
```

```
     0000 1010   // decimal 10
AND  0000 0001   // decimal 1
  =  0000 0000
```

```
     0000 1011   // decimal 11
AND  0000 0001   // decimal 1
  =  0000 0001
```


Дробная часть. Модуль
```js
3.5 % 1 === 0.5;
3 % 1 === 0; // Не имеет дробной части — целое число
```

- See: https://exploringjs.com/impatient-js/ch_numbers.html#javascript-only-has-floating-point-numbers

`%` is a remainder operator, not a modulo operator. Its result has the sign of the first operand:
```
> 5 % 3
2
> -5 % 3
-2
```

Остаток от деления (Remainder)
```js
3 % 2 === 1;
4 % 2 === 0;
```


### Чётное/Нечётное

С помощью модуля
```js
const isOdd = number => Boolean(number % 2);
const isEven = number => !isOdd(number);
```

Побитовое `AND` работает быстрее
```js
const isOdd = number => Boolean(number & 1);
const isEven = number => !isOdd(number);
```



### Булево в число

Используется в сортировке  
Например элемент `'a'` надо собрать в начале списка, остальные останутся в том же порядке, что и были
```js
['d', 'b', 'c', 'a', 'a'].sort(i => -(Number(i === 'a')));
//=> ['a', 'a', 'd', 'b', 'c']
```

```js
const booleanToNumber = boolean => Number(boolean); // Конструктор
const booleanToNumber = boolean => boolean ? 1 : 0; // Тернарный оператор
const booleanToNumber = boolean => boolean | 0; // Бинарное `OR`
const booleanToNumber = boolean => boolean & 1; // Бинарное `AND`
const booleanToNumber = boolean => ~~boolean; // Двойное бинарное `NOT`
const booleanToNumber = boolean => +boolean; // Приведение типов
```



## Отключить увеличение страницы Ctrl + Mouse wheel

- See: http://stackoverflow.com/a/29994607

```js
document.addEventListener('mousewheel', function (e) {
  if (e.deltaY % 1 !== 0) {
    e.preventDefault();
  }
});
```



## Date

```js
const date = new Date(model.created_at);
const day = date.getDate();
const month = ((date.getMonth() + 1).toString().length > 1 ? '' : '0') + (date.getMonth() + 1).toString();
const year = date.getFullYear();
const formatedDate = `${day}.${month}.${year}`;
```

## `.setHours`

- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours

```js
new Date().setHours(hours, minutes, seconds, milliseconds)
```



## Ждём окончания загрузки страницы

- See: https://github.com/ded/domready
- See: https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded

```javascript
document.addEventListener('DOMContentLoaded', function () {
});
```



## Самое быстрое добавление класса элементу

```javascript
candidate.classList.add('one');
// Далее по убывающей
candidate.setAttribute('class', 'one');
candidate.className = 'one';
```



## Самый быстрый способ получить строку

```javascript
var arr = ['item 1', 'item 2', 'item 3', ...];
var list = '<ul><li>' + arr.join('</li><li>') + '</li></ul>';
```

```js
/**
 * @param {Array} arr
 * @returns {string}
 *
 * @example
 * createList(['Foo', 'Bar'])
 * //=> '<ul><li>Foo</li><li>Bar</li></ul>'
 */
const createList = (arr) => arr.length > 0 ? `<ul><li>${arr.join('</li><li>')}</ul></li>` : ''
```



## Проверка в цикле

```javascript
for (var i = 0; i < 10; i++) {
  if (не подходит) {
    continue;
  }
  // ...
}
```



## Отключить выделение текста

```html
<script>
if (document.getElementById('noselect')) {
  disableSelection(document.getElementById('noselect'));
}

function disableSelection(target) {
  if (typeof target.onselectstart !== 'undefined') {
    target.onselectstart = function () {
      return false;
    };
  } else if (typeof target.style.MozUserSelect !== 'undefined') {
    target.style.MozUserSelect = 'none';
  } else {
    target.onmousedown = function () {
      return false;
    };
  }

  target.style.cursor = 'default';
}
</script>
```



## Random

Возвращает `0`, `1`, `2` или `3`

```js
Math.floor(Math.random() * 4)
```

- See: https://github.com/Microsoft/TypeScriptSamples/blob/master/jsx/src/app.tsx

```js
function getRandomGreeting() {
  switch (Math.floor(Math.random() * 4)) {
    case 0: return 'Hello';
    case 1: return 'Howdy';
    case 2: return 'Greetings to you';
    case 3: return 'Hail';
  }
}
```


Рандом целого числа от и до

```js
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```



## Наследование

- See: https://youtu.be/4oudziatkLI?list=PL363QX7S8MfSxcHzvkNEqMYbOyhLeWwem

```javascript
var Person = {
  constructor: function (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    return this;
  },
  greet: function () {
    console.log('Hi, my name is ' + this.name);
  },
};

var WebDeveloper = Object.create(Person);
WebDeveloper.constructor = function (name, age, gender, skills) {
  Person.constructor.apply(this, arguments);
  this.skills = skills || [];
  return this;
};

var developer = Object.create(WebDeveloper).constructor('Jack', 21, 'male', ['html', 'css']);
```



## Class of

- See: https://youtu.be/a3X9uqCoxKY?list=PL363QX7S8MfSxcHzvkNEqMYbOyhLeWwem

```javascript
var classof = function (object) {
  return Object.prototype.toString.call(object).slice(8, -1);
};
```



## Вместо `e.stopPropagation()`

- See: https://developer.mozilla.org/en-US/docs/Web/API/Event/defaultPrevented

```javascript
if (e.defaultPrevented) {
  return false;
}
```



## `localStorage`

```js
// Установка ключа
localStorage.username = 'Ivan';

// Чтение ключа
output_text = 'Добро пожаловать, ' + localStorage.username;
```

```js
// Установка ключа
localStorage.setItem('username', 'Ivan');

// Чтение ключа
output_text = 'Добро пожаловать, ' + localStorage.getItem('username');
// Так же есть специальный метод для удаления ключа
localStorage.removeItem('username');
```



## `URLSearchParams`

- See: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
- See: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
- See: [Polyfill for the `URLSearchParams` API](https://github.com/WebReflection/url-search-params)
- See: [A `querystring` parser with nesting support](https://github.com/ljharb/qs)

Для работы с `search` параметрами

```js
const searchParams = new URLSearchParams()
searchParams.set('foo', 1)
searchParams.set('bar', 2)
searchParams.toString() //=> 'foo=1&bar=2'
searchParams.has('foo') //=> true
searchParams.set('foo', 99)
searchParams.toString() //=> 'foo=99&bar=2'
searchParams.append('bar', 3)
searchParams.toString() //=> 'foo=99&bar=2&bar=3'
searchParams.get('foo') //=> '99'
searchParams.getAll('bar') //=> ['2', '3']
searchParams.delete('bar')
searchParams.toString() //=> 'foo=99'
```

```js
const searchParams = new URLSearchParams('foo=1&bar=2')

for (const [key, value] of searchParams) {
  console.log(key, value);
}
//=> "foo", "99"
//=> "bar", "2"
```

```js
new URLSearchParams('foo=1&bar=2')
new URLSearchParams([['foo', 1], ['bar', 2]])
new URLSearchParams({foo: 1, bar: 2})
```



## Pure functions

- See: https://github.com/ghengeveld/react-redux-styleguide#pure-functions

```js
function inc(object) {
  return {
    ...object,
    value: object.value + 1
  };
}
```



## Избежать проблем без `;`

```js
console.log(1)
;[1,2].forEach(console.log)
```



## Web page screenshots

Сделать скриншоты страниц

```shell
npm i -g phantomjs webpage
```

```js
var webshot = require('webshot');

phantom.addCookie({
  name: 'sessionid',
  value: '<SESSION_ID>',
  domain: '.example.com'
});
var ids = [
  37,
  204,
  224
];
var length = ids.length;
var lastIndex = length - 1;

function screenshot(index, isLast) {
  console.log('Item:', index);

  var id = ids[index];

  var options = {
    screenSize: {
      width: 1366,
      height: 1800
    },
    shotSize: {
      width: 'window',
      height: 'all'
    },
    // renderDelay: 5000,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/2.1.1 (development) Safari/534.34'
  };

  webshot(
    'https://example.com/admin/pages/' + id + '/preview/',
    'screenshots/' + id + '.png',
    options,
    function () {
      setTimeout(function () {
        var newIndex = index - 1;

        if (isLast || newIndex < 0) {
          console.log('exit');
        } else {
          isLast = newIndex === 0;
          screenshot(newIndex, isLast);
        }
      }, 200);
    }
  );
}

screenshot(lastIndex, false);
```


## Concatenate lists with intersection

- See: https://jsfiddle.net/VovanR/4dyxszby/  

Например при получении страницы с уже имеющимся элементом, чтобы не дублировать его
```js
/**
 * Concat lists with intersection
 * 
 * @param newItems {Array}
 * @param oldItems {Array}
 * @returns {Array}
 */
function concatLists(newItems, oldItems) {
  let result = []
  const hash = Object.create(null)

  oldItems.forEach(item => {
    hash[item.id] = true
    result.push(item)
  })

  newItems.forEach(item => {
    if (hash[item.id]) {
      return
    }
    result.push(item)
  })

  return result
}
```


## Symbol

Using symbols for private attributes

```js
var _name = Symbol();
class Person {
  constructor(name) {
    this[_name] = name;
  }

  get name() {
    return this[_name];
  }

  set name(value) {
    this[_name] = value;
  }
}
```

Using symbols for object keys
```javascript
const data = {a: 1};
const b = Symbol('b');
data[b] = 2;
data[4] = 3;
Object.keys(data); //=> ['4', 'a']
```


## Reselect

- See: https://github.com/reactjs/reselect

```js
import { createSelector } from 'reselect'
import { fromJS } from 'immutable'
import { selectData } from '../selectors'
import { createIdMapFromList } from 'utils'

export const selectItems = createSelector(
  [selectData],
  (data) => data.get('items')
)

export const getItemsIdMap = createSelector(
  [selectItems],
  (items) => fromJS(createIdMapFromList(items.toJS()))
)

export const getItemById = (id, state) => getItemsIdMap(state).get(id)
```

Usage
```js
const item = getItemById(33, getState())
```



## Open in CodePen

- See: https://github.com/atomiks/30-seconds-of-css/pull/56/files



## Promise

- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- See: https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html https://habrahabr.ru/company/mailru/blog/269465/

### `then` after `catch`

```js
Promise.reject('foo')
  .then((resp) => {console.log('1 then', resp); return resp})
  .catch((resp) => {console.log('1 catch', resp); return resp})
  .then((resp) => {console.log('2 then', resp); return resp})
//=> 1 catch foo
//=> 2 then foo
```

### Back to Basics: Running Promises in Serial with `Array.reduce()`

- See: https://decembersoft.com/posts/promises-in-serial-with-array-reduce/

```js
const tasks = getTaskArray()

return tasks.reduce((promiseChain, currentTask) => {
  return promiseChain.then(chainResults =>
    currentTask.then(currentResult =>
      [ ...chainResults, currentResult ]
    )
  )
}, Promise.resolve([])).then(arrayOfResults => {
  // Do something with all results
})
```


### `Promise.all`

- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

```js
Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then((...res) => console.log('then', ...res))
  .catch((...res) => console.log('catch', ...res))
  .finally(() => console.log('finally'))
//=> then [1, 2]
//=> finally
```

```js
Promise.all([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)])
  .then((...res) => console.log('then', ...res))
  .catch((...res) => console.log('catch', ...res))
  .finally(() => console.log('finally'))
//=> catch 2
//=> finally
```



### Promise catch after catch with same error

```js
Promise.reject('Failed')
  .then(() => {
    console.log(0)
  })
  .catch(err => {
    console.log(1, err)
    return Promise.reject(err)
  })
  .catch(err => {
    console.log(2, err)
    return 'Processed Fail'
  })
  .then(data => {
    console.log(3, data)
  })
//=> 1 "Failed"
//=> 2 "Failed"
//=> 3 "Processed Fail"
```



## Cookies

- See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
- See: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
- See: https://flaviocopes.com/cookies/


**Библиотеки:**

- https://github.com/js-cookie/js-cookie
- https://github.com/expressjs/cookie-parser


**Свойства:**
- 4 KB
- Приватны для домена
- Лимит 20 на домен (зависит от браузера)

```js
document.cookie
//=> "cookies=true; FOO=123245; BAR=1234"
```

```js
document.cookie = "yummy_cookie=choco"; 
document.cookie = "tasty_cookie=strawberry"; 
console.log(document.cookie); 
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
```

Значение надо кодировать с `encodeURIComponent()`, чтобы экранировать пробелы и т.п.

### Установить срок годности

Конкретное время
```js
document.cookie = 'foo=bar; expires=Fri, 06 Apr 2018 11:52:28 GMT'
```

```js
const date = new Date()
date.setHours(date.getHours() + 1)
document.cookie = 'foo=bar; expires='  + date.toUTCString()
```

Через какое-то время в секундах. Например на 1 час:
```js
document.cookie = 'foo=bar; max-age=3600'
```


### `path`

```js
document.cookie = 'foo=bar; path="/admin"'
```
Если не установить, то `path` будет равен текущему. Глобальные куки `path="/"`


### `domain`

```js
document.cookie = 'foo=bar; domain="example.com"'
```


### `Secure`

Доступны только по `HTTPS`
```js
document.cookie = 'foo=bar; Secure'
```


### `HttpOnly`

Доступны только для сервера. Недоступны по `document.cookie`
```js
document.cookie = 'foo=bar; HttpOnly'
```


### Удаление

```js
document.cookie = 'foo=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
```



## No operation `noop`

```js
/**
 * No operation
 */
exports.noop = function() {};
```



## Кортежи

- See: [Кортежи в JavaScript и TypeScript](https://medium.com/@frontman/%D0%BA%D0%BE%D1%80%D1%82%D0%B5%D0%B6%D0%B8-%D0%B2-javascript-%D0%B8-typescript-74950fac15c3)

```js
const tuple = (...args) => Object.freeze(args);
```

```js
const tup = tuple(1, 2, 3);
tup[0] = 13; // ничего не произойдет
console.log(tup); //=> [1,2,3]
```



## Throw Error. Failing fast

- See: https://molily.de/robust-javascript/#failing-fast

```js
throw new TypeError('Expected `hour` type to be a `number`');
throw new RangeError('Expected `hour` to be a number from 0 to 23');
```



## webpack

- See: [Shimming](https://webpack.js.org/guides/shimming/)



## Babel

- See: [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill/)
- See: [babel-plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)



## ES6 Modules

- See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type
- See: https://hacks.mozilla.org/2015/08/es6-in-depth-modules/

```html
<script type="module" src="js/index.js"></script>
```

```js
import Settings from './settings.js';
```



## Modules export library utilities

In `index.js`
```js
export { default as foo } from './foo';
export { default as bar } from './bar';
export { default as baz } from './baz';
```



## Batch downloading

- See: https://github.com/sindresorhus/multi-download

Скачать много файлов

```js
/**
 * Download list of files
 *
 * @param {Array} urls
 */
function batchDownload(urls) {
  const $link = document.createElement('a');
  $link.setAttribute('download', null);
  $link.style.display = 'none';
  document.body.appendChild($link);

  urls.forEach(url => {
    $link.setAttribute('href', url);
    $link.click();
  });

  document.body.removeChild($link);
}
```



## Defer

- See: https://github.com/visionmedia/batch/blob/master/index.js#L12-L18

```js
/**
 * Defer
 */
var defer = typeof process !== 'undefined' && process && typeof process.nextTick === 'function'
  ? process.nextTick
  : fn => setTimeout(fn);
```



## `NodeList` and `forEach`

- See: https://developer.mozilla.org/en-US/docs/Web/API/NodeList

[`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
```js
const nodes = document.querySelectorAll('p');
```

[`forEach`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach)
```js
nodes.forEach(node => {
  node.style.color = 'red';
});
```

[`Array.prototype.forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
```js
Array.prototype.forEach.call(nodes, node => {
  node.style.color = 'red';
});
```

[`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
```js
Array.from(nodes).forEach(node => {
  node.style.color = 'red';
});
```

[`for..of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
```js
for (let node of nodes) {
  node.style.color = 'red';
}
```

`for`
```js
for (let i = 0; i < nodes.length; i += 1) {
  nodes[i].style.color = 'red';
}
```



## Selector

```js
const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);
```



## Синтезатор речи

- See: https://codepen.io/nalgeon/pen/LBJNXG

```js
function speak(text) {
  const message = new SpeechSynthesisUtterance();
  message.lang = "ru-RU";
  message.text = text;
  window.speechSynthesis.speak(message);
}
```



## Mithril version 0.2.5

### SVG icons

```js
function createIcon(svg, className, onClick) {
  return m('div', {'class': className, onclick: onClick},
    m.trust(`<svg class='svg-icon__cnt'><use xlink:href='${svg.id}'></use></svg>`)
  )
}
```



## Ramda

- See: https://ramdajs.com/docs/

```js
R.pipe(R.filter(R.identity), R.flatten)([null, undefined, [], [1, 3], [4]]);
//=> [1, 3, 4]
```

### Omit undefined values in Object

- See: [`reject`](https://ramdajs.com/docs/#reject)
- See: [`isNil`](https://ramdajs.com/docs/#isNil)

```javascript
R.reject(R.isNil, {a: 1, b: undefined, c: 0, d: null})
//=> {a: 1, c: 0}
```



## RequireJS

- See: https://requirejs.org/
- See: https://github.com/requirejs/requirejs
- See: https://github.com/requirejs/text



## Web Components

- See: [How to build a simple Camera component](https://frontendnews.io/editions/2018-08-15-simple-camera-component)



## Превью загружаемой картинки

- See: [Showing thumbnails of user-selected images](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images)



## Video `autoplay`

- See: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
- See: https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/

```js
var promise = document.querySelector('video').play();

if (promise !== undefined) {
  promise.then(() => {
    // Auto-play started
  }).catch(error => {
    // Auto-play was prevented
    // Show a UI element to let the user manually start playback
  });
}
```

Fetch & Play

- See: https://developers.google.com/web/updates/2017/06/play-request-was-interrupted

```html
<video id="video"></video>
<button id="button"></button>

<script>
  button.addEventListener('click', onButtonClick);

  function onButtonClick() {
    // This will allow us to play video later...
    video.load();
    fetchVideoAndPlay();
  }

  function fetchVideoAndPlay() {
    fetch('https://example.com/file.mp4')
      .then(response => response.blob())
      .then(blob => {
        video.srcObject = blob;
        return video.play();
      })
      .then(_ => {
        // Video playback started ;)
      })
      .catch(e => {
        // Video playback failed ;(
      })
  }
</script>
```



## `document.activeElement`

- See: https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/activeElement

Ссылка на элемент в фокусе



## `Set`

- See: [`Set()` as it should be.](https://github.com/terkelg/zet)

```js
var a = {a:1}
var b = {b:1}

var testSet = new Set()

testSet.add(a)
//=> testSet
testSet.add(b)
//=> testSet
testSet.size
//=> 2
testSet.add(a).add(b)
testSet.size
//=> 2
testSet.has(b)
//=> true
testSet.delete(b)
//=> true
testSet.delete(b)
//=> false
testSet.has(b)
//=> false
testSet.size
//=> 1
testSet.clear()
//=> undefined
testSet.size
//=> 0
```


### `Set` to `Object`

```js
function setToObject(set) {
  const obj = new Object(null)

  for (const [key, value] of set) {
    obj[key] = value
  }

  return obj
}
```


### Class callbacks based on `Set`

```js
class Foo {
  constructor() {
    this._callbacks = new Set()
  }

  onChange(cb) {
    this._callbacks.add(cb)
  }

  offChange(cb) {
    this._callbacks.delete(cb)
  }

  _fireOnChange() {
    this._callbacks.forEach(cb => cb())
  }
}
```



## Trigger event

```javascript
formElement.addEventListener('change', onChange)

formElement.dispatchEvent(new Event('change'))
```



## Console Group

```javascript
try {
  foo();
} catch (e) {
  console.group('foo failing');
  console.log(e);
  console.trace();
  console.groupEnd();
}
```



## RegExp Named Capture Groups

- See: https://github.com/tc39/proposal-regexp-named-groups

```js
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
let result = re.exec('2015-01-02');
// result.groups.year === '2015';
// result.groups.month === '01';
// result.groups.day === '02';

// result[0] === '2015-01-02';
// result[1] === '2015';
// result[2] === '01';
// result[3] === '02';
```



## Реализация библиотеки с поддержкой плагинов

### Библиотека

- See: https://github.com/simonepri/upash/blob/master/index.js

```js
module.exports = Object.freeze({
  install,
  uninstall,
  list,
  use,
  which,

  verify,
  hash
});
```

### Использование

```js
const upash = require('upash');

// Install the algorithms of your choice.
upash.install('pbkdf2', require('@phc/pbkdf2'));
```

### Плагин

- See: https://github.com/simonepri/phc-pbkdf2/blob/master/index.js

```js
module.exports = {
  hash,
  verify,
  identifiers
};
```



## Определить находится ли элемент в зоне видимости

```js
const $element = $(element)
const overflowX = $element.outerWidth() + $element.offset().left > window.innerWidth
const overflowY = $element.outerHeight() + $element.offset().top > window.innerHeight
$element.addClass(`wrapper--${overflowY ? 'top' : 'bottom'}-${overflowX then 'left' else 'right'}`)
```



## Простой клик

- See: https://github.com/storeon/storeon/issues/33#issuecomment-487677408

```javascript
function isSimpleClick(event) {
  return event.target.target !== '_blank' &&
         event.button === 0 &&
         event.which === 1 &&
         !event.metaKey &&
         !event.ctrlKey &&
         !event.shiftKey &&
         !event.altKey
}
```



## Превью загружаемого файла

- See: https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
- See: https://twitter.com/andrey_sitnik/status/1128983108370554880

Для превью в процессе загрузки лучше использовать `URL.createObjectURL(file)` вместо `FileReader#readAsDataUrl(file)`.
Так браузер не будет перекидывать файл в память JS.

Главное, не забыть потом вызвать `URL.revokeObjectURL()`.

```diff
function read(id, file) {
-  return new Promise(resolve => {
-    const reader = new FileReader()
-    reader.onload = () => resolve([id, reader.result])
-    reader.readAsDataURL(file)
-  })
+  return [id, URL.createObjectURL(file)]
}
```



## Telegram bot

- See: https://glitch.com/~adventurous-damselfly



## Download animation

- See: https://github.com/mdn/dom-examples/blob/master/abort-api/index.html

```js
function runAnimation() {
  let animCount = 0
  const interval = setInterval(() => {
    switch (animCount++ & 3) {
      case 0: console.log('Download occuring; waiting for video player to be constructed'); break;
      case 1: console.log('Download occuring; waiting for video player to be constructed.'); break;
      case 2: console.log('Download occuring; waiting for video player to be constructed..'); break;
      case 3: console.log('Download occuring; waiting for video player to be constructed...'); break;
    }
  }, 300);

  return () => clearInterval(interval);
}
```



### WebSocket

- See: http://websocket.org/echo.html
- See: https://socket.io/demos/chat/



## Install PWA

- See: https://github.com/liyasthomas/mnmlurl/blob/master/src/index.html

```js
let pwaInstalled = localStorage.getItem('pwaInstalled') == 'yes'

if (window.matchMedia('(display-mode: standalone)').matches) {
  localStorage.setItem('pwaInstalled', 'yes')
  pwaInstalled = true
}

if (window.navigator.standalone === true) {
  localStorage.setItem('pwaInstalled', 'yes')
  pwaInstalled = true
}

if (pwaInstalled) {
  document.getElementById('installPWA').style.display = 'none'
} else {
  document.getElementById('installPWA').style.display = 'inline-flex'
}

let deferredPrompt = null
window.addEventListener('beforeinstallprompt', (e) => {
  deferredPrompt = e
})

async function installPWA() {
  if (!deferredPrompt) {
    return
  }

  deferredPrompt.prompt()

  deferredPrompt.userChoice.then(({outcome}) => {
    if (outcome === 'accepted') {
      console.log('Your PWA has been installed')
    } else {
      console.log('User chose to not install your PWA')
    }
    deferredPrompt = null
  })
}

window.addEventListener('appinstalled', () => {
  localStorage.setItem('pwaInstalled', 'yes')
  pwaInstalled = true
  document.getElementById('installPWA').style.display = 'none'
})
```



## `.valueOf`, `.toString`

- See: [Object.prototype.valueOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)
- See: [Преобразование типов в JavaScript](https://medium.com/@sergeybulavyk/%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-%D0%B2-javascript-35a15ddfc333)

```js
class Minutes {
  constructor(value) {
    this._value = value * 60 * 1000
  }

  valueOf() {
    return this._value
  }

  toString() {
    return String(this._value)
  }
}
```

```js
class Seconds {
  constructor(value) {
    this._value = value
  }

  [Symbol.Primitive](hint) {
    switch (hint) {
      case 'string':
        return `${this._value} sec`
      case 'number':
      default:
        return this._value * 1000
    }
  }
}
```



## CSS custom properties

- See: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```



### Canvas pixel ratio

- See: https://github.com/jondavidjohn/hidpi-canvas-polyfill/blob/master/src/CanvasRenderingContext2D.js
- See: https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio



## Function

- See: [5 Differences Between Arrow and Regular Functions](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)

### Function declaration

```javascript
function greet(who) {
  return `Hello, ${who}!`;
}
```

```javascript
function myFunction() {
  console.log(this);
}

const myContext = {user: 'Foo Bar'};

myFunction.call(myContext); //=> {user: 'Foo Bar'}
myFunction.apply(myContext); //=> {user: 'Foo Bar'}
```

### Function expression

```javascript
const greet = function(who) {
  return `Hello, ${who}`;
};
```

### Arrow function

```javascript
const greet = (who) => {
  return `Hello, ${who}!`;
};
```

```javascript
const greet = who => {
  return `Hello, ${who}!`;
};
```

```javascript
const greet = (who) => `Hello, ${who}!`;
```



## Generator

```javascript
const values = [2, 3];

function* genFunc() {
  yield 1;
  yield* values;
  yield 4;
}

var g = gen();
g.next();
//=> { value: 1, done: false }

g.next();
//=> { value: 2, done: false }

g.next();
//=> { value: 3, done: false }

g.next();
//=> { value: 4, done: false }

g.next();
//=> { value: undefined, done: true }

var g = gen();
[...g];
//=> [ 1, 2, 3, 4 ]
```

```javascript
function* createId() {
  let id = 0

  while (true) {
    yield id

    id += 1
  }
}

const getNewId = createId()
getNewId.next()
//=> { value: 0, done: false }
getNewId.next()
//=> { value: 1, done: false }
getNewId.next()
//=> { value: 2, done: false }
```



## Tasks and Microtasks

- See: [Using microtasks in JavaScript with `queueMicrotask()`](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)


Tasks:
- `setTimeout`
- `setInterval`
- `setImmediate`

Microtasks:
- `process.nextTick`
- `Promise callback`
- `queueMicrotask`



## Evaluate JavaScript code

- See: https://twitter.com/aemkei/status/1298022980321185794

```js
const CODE = 'alert(1)';

eval(CODE);
Function(CODE)()();
setTimeout(CODE);
document.write(`<script>${CODE}</script>`);
window.location = 'javascript:' + CODE;
import('data:text/javascript,' + CODE);
```

```js
div = document.createElement('div');
div.setAttribute('onclick', CODE);
div.click();
```

```html
<img src="404" onerror="CODE">
```
