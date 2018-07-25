# JavaScript

----

- See: https://github.com/loverajoel/jstips
- See: https://github.com/oneuijs/You-Dont-Need-jQuery
- See: https://github.com/HubSpot/youmightnotneedjquery
- See: https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore
- See: https://github.com/getify/You-Dont-Know-JS
- See: http://codeguide.co
- See: http://es6-features.org/
- See: https://ponyfoo.com/articles/es6
- See: https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
- See: https://github.com/h5bp/Front-end-Developer-Interview-Questions
- See: https://github.com/you-dont-need/You-Dont-Need-JavaScript
- See: https://github.com/loiane/javascript-datastructures-algorithms
- See: [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- See: [Шаблоны проектирования в JavaScript](https://medium.com/@marina.kovalyova/java-script-design-patterns-569c627d25f9)

## String

### Remove last line

```javascript
var foo = 'a\nb\nc\nd';
foo = foo.substring(0, foo.lastIndexOf('\n')); //=> 'a\nb\nc'
```

### Remove first character

```js
var foo = 'foo';
foo.substr(1); //=> 'oo'
```

### Remove last character

```js
var foo = 'foo';
foo.slice(0, -1); //=> 'fo'
```

### Remove first and last character

```js
var foo = 'foo';
foo.slice(1, -1); //=> 'o'
```



## Fetch

```javascript
fetch('https://api.github.com/users/vovanr')
    .then(x => x.json())
    .then(x => {console.log(x)})
```



## Array

```javascript
var foo = [1, 2, 3];

foo.shift(); //=> 1 (removed item)
console.log(foo); //=> [2, 3]

foo.unshift(4); //=> 3 (new foo.length)
console.log(foo); //=> [4, 2, 3]

foo.pop(); //=> 3 (removed item)
console.log(foo); //=> [4, 2]

foo.push(5); //=> 4 (new foo.length)
console.log(foo); //=> [4, 2, 5]

foo.splice(foo.indexOf(2), 1, 3); //=> [2] (replaced items)
console.log(foo); //=> [4, 3, 5]
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

```js
var m = [{id: 8}, {id: 2}, {id: 3}];
var s = [3, 2, 8];
m.sort((a, b) => s.indexOf(a.id) - s.indexOf(b.id));
console.log(m); //=> [{id: 3}, {id: 2}, {id: 8}]
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



## Округление числа

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



## Оператор `for in`

```javascript
for (key in object) {
    if (!{}.hasOwnProperty.call(object, key)) continue;

    console.log(object[key]);
}

for (key in object) if ({}.hasOwnProperty.call(object, key)) {
    console.log(object[key]);
}
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



## Оставить целое

```js
Math.floor(100.999)
//=> 100

100.999 | 0
//=> 100
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



## Clone object

- See: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Cloning_an_object

```js
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```



## Deep Clone object

```js
const DATA = JSON.parse(JSON.stringify(window.DATA));
```



## Merge objects

- See: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Merging_objects

```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); //=> { a: 1, b: 2, c: 3 }
console.log(o1);  //=> { a: 1, b: 2, c: 3 }, target object itself is changed.
```



## object `forEach`

```js
Object.keys(items).forEach(id => {
    console.log(items[id]);
});
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



## reduce

- See: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


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

- See: https://medium.com/@frontman/%D0%BA%D0%BE%D1%80%D1%82%D0%B5%D0%B6%D0%B8-%D0%B2-javascript-%D0%B8-typescript-74950fac15c3

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



## Нэйминг (именование)

- See: https://habr.com/post/172091/
- See: https://ymatuhin.ru/front-end/how-to-name-variables/

### Булево

`disabled` / `enabled`


### Функция проверка условие

`isOnline`
`isDisabled`


### Функция сравнения

`compareDate`


### Функция преобразования

`prepareFetchData`


### Функция вычислений

`calculateDays`


### Константа

```js
BUTTON_VARIANT = {
    DANGER: 'danger',
    WARNING: 'warning',
}
```


### Метод

`getName`


### Обработчик события

`HIA` (Handle Item Action)

`handleClick`
`handleListItemClick`


### Класс


### Переменная


### Каррирование

`curriedSum`
`curriedProcessInputData`



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
