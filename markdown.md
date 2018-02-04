# Markdown

----

```markdown
> Blockquote

## h2

### h3
```

```markdown
*em*
_em_
**strong**
__strong__
```

```markdown
- li

  p in li

- li

  p in li
```

```markdown
[link text](http://url.com/ "title")
[link text](http://url.com/)
```

```markdown
![image](/images/preview.png)
[![image](/images/preview.png)](/images/image.png)
```

```markdown
<acronym title="Internet Protocol">IP</acronym>
```

```markdown
<kbd>Meld</kbd>→<kbd>Preferences</kbd>→<kbd>File Filters</kbd>
```

## Tables
See: [Markdown Tables Generator](http://www.tablesgenerator.com/markdown_tables)

```markdown
| url            | HTTP Method | Operation                                                      |
|----------------|-------------|----------------------------------------------------------------|
| /api/books     | GET         | Считывание массива книг                                        |
| /api/books/:id | GET         | Считывание книги с идентификатором :id                         |
| /api/books     | POST        | Добавление новой книги и ее возвратс добавленным атрибутом :id |
| /api/books/:id | PUT         | Обновление книги с идентификатором :id                         |
| /api/books/:id | DELETE      | Удаление книги с идентификатором :id                           |
```
