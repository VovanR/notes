# RegExp

----

- See: [Regular Expression Denial of Service (ReDoS) and Catastrophic Backtracking](https://snyk.io/blog/redos-and-catastrophic-backtracking/)

## Вперед смотрящий

Выберет `foo`, после которого идет `bar`
```
foo(?= bar)
```

не идет `bar`
```
foo(?! bar)
```



## Флаги

```
\...\gim
```
- `g` — Глобально (без него выбирается первое вхождение)
- `i` — Регистронезависимый
- `m` — Многострочный



## Не жадный поиск

- See: [Жадная и ленивая квантификация](https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5_%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F#%D0%96%D0%B0%D0%B4%D0%BD%D0%B0%D1%8F_%D0%B8_%D0%BB%D0%B5%D0%BD%D0%B8%D0%B2%D0%B0%D1%8F_%D0%BA%D0%B2%D0%B0%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F)
- See: https://habrahabr.ru/post/68345/

```
a{2,10}?e
```

`?` — Включает нежадный (non-greedy) или ленивый (lazy) поиск



## Запоминающие группы (в скобках)

Не запоминающие — `?:`
```
java(?:script)?
```



## Удалить не буквы

```js
"o'dowd, roy mn.".replace(/[^\w ]/ig, '')
//=> "odowd roy mn"
```



## Шаблоны

- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter
- See: https://medium.com/@frontman/string-prototype-replace-ed2507c14a60


`$$` — вставляет символ доллара "$"
`$&` — вставляет сопоставившуюся подстроку
$` — вставляет часть строки, предшествующую сопоставившейся подстроке.
`$’` — вставляет часть строки, следующую за сопоставившейся подстрокой

```js
"asdf".replace("sd", "-$$-")
//=> "a-$-f"
"asdf".replace("sd", "-$&-")
//=> "a-sd-f"
"asdf".replace("sd", "-$`-")
//=> "a-a-f"
"asdf".replace("sd", "-$'-")
//=> "a-f-f"
```
