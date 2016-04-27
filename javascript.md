# JavaScript

----

- See: https://github.com/loverajoel/jstips
- See: https://github.com/oneuijs/You-Dont-Need-jQuery
- See: http://codeguide.co
- See: http://es6-features.org/
- See: https://ponyfoo.com/articles/es6
- See: https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules

## Remove last line
```javascript
var foo = 'a\nb\nc\nd';
foo = foo.substring(0, foo.lastIndexOf('\n')); // 'a\nb\nc'
```



## Fetch
```javascript
fetch('https://api.github.com/users/vovanr').then(x => x.json()).then(x => {console.log(x)})
```



## Array

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



### concat
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



## Выделить текст инпута при фокусе
```html
<input type="text" readonly onfocus="this.select();" onclick="this.select();" value="Hello World!">
```



## Выбор цвета, в соответствии со значение параметра `d`
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



## Фрагмент документа:
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



## Отключить увеличение страницы Ctrl+Mousewheel
See: http://stackoverflow.com/a/29994607
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



## Ждем окончания загрузки страницы
See: https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
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
    if (!object.hasOwnProperty(key)) continue;

    console.log(object[key]);
}

for (key in object) if (object.hasOwnProperty(key)) {
    console.log(object[key]);
}
```



## Проверка в цикле
```javascript
for (var i = 0; i < 10; i++) {
    if (не подходит) {
        continue;
    }
    ...
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
Возвращает значение 0,1,2,3
```js
Math.floor(Math.random() * 4)
```
https://github.com/Microsoft/TypeScriptSamples/blob/master/jsx/src/app.tsx
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



## Наследование
See: https://youtu.be/4oudziatkLI?list=PL363QX7S8MfSxcHzvkNEqMYbOyhLeWwem
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



## Classof
See: https://youtu.be/a3X9uqCoxKY?list=PL363QX7S8MfSxcHzvkNEqMYbOyhLeWwem
```javascript
var classof = function (object) {
    return Object.prototype.toString.call(object).slice(8, -1);
};
```



## Вместо `e.stopPropagation()`
```javascript
if (e.isDefaultPrevented()) {
    return false;
}
```



## localStorage

```js
// Установка ключа
localStorage.username = 'Ivan';
...
// Чтение ключа
output_text = 'Добро пожаловать, ' + localStorage.username;
```

```js
// Установка ключа
localStorage['username'] = 'Ivan';
...
// Чтение ключа
output_text = 'Добро пожаловать, ' + localStorage['username'];
```

```js
// Установка ключа
localStorage.setItem('username', 'Ivan');
...
// Чтение ключа
output_text = 'Добро пожаловать, ' + localStorage.getItem('username');
// Так же есть специальный метод для удаления ключа
localStorage.removeItem('username');
```



## Clone object
See: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Cloning_an_object
```js
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```



## Deep Clone object
```js
const DATA = JSON.parse(JSON.stringify(window.DATA));
```



## Clone Array `slice`
```js
const a = [1, 2];
const b = a;
const c = a.slice(); // Clone
a[0] = 3;
a === [3, 2]
b === [3, 2]
c === [1, 2] // Clone
```



## Merge objects
See: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Merging_objects
```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
```



## forEach object
```js
Object.keys(items).forEach(id => {
    console.log(items[id]);
});
```



## Pure functions
See: https://github.com/ghengeveld/react-redux-styleguide#pure-functions
```js
function inc(object) {
    return {...object, value: object.value + 1};
}
```
