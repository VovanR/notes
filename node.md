# Node.js

----

## Обновление глобальных пакетов
See: https://docs.npmjs.com/getting-started/updating-global-packages
```shell
npm outdated -g --depth=0
```
```shell
npm update -g
```



## Записать в файл
```javascript
var stream = fs.createWriteStream(filePath);
stream.once('open', function (fd) {
    stream.write('.block' + '\n    {}\n');
    stream.end();
});
```


## Прочитать файл
```js
const schemaRaw = fs.readFileSync('./schema.graphql', 'utf-8')
```


## Преобразовать файл
```js
const fs = require('fs');

const items = fs.readFileSync('./items.json', 'utf-8')
const itemsArray = JSON.parse(items)
const slugsArray = itemsArray.map(item => item.slug)

const urlsArray = slugsArray.map(slug => `https://example.com/static/img/items/64x64/${slug}.png`)
const content = urlsArray.join('\n')

fs.writeFile('./urls', content)
```



## Изменяем версию пакета и публикуем ее
- See: https://docs.npmjs.com/getting-started/publishing-npm-packages
- See: https://docs.npmjs.com/misc/developers#before-publishing-make-sure-your-package-installs-and-works

```shell
npm version 0.2.2
git push
git push --tags
npm publish
npm i -g bemstyla
```



## Для тестирования локального пакета (вместо `link`)
```shell
cd ~/work/bemstyla/
npm i -g .
```



## Новый тэг в гите
```shell
git tag -a v1.1.0
    1.1.0
```


## Авторизоваться в `npm`
```shell
npm adduser
    username
    password
    mail@gmail.com
```
