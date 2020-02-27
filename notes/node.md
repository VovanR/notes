# Node.js

----

- See: [Таблица поддержки ECMAScript версиями Node.js](http://node.green/)
- See: [Node.js Everywhere with Environment Variables!](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)

## Генераторы документации

- See: [Docusaurus](https://github.com/facebook/Docusaurus)



## CMS

- See: https://twitter.com/fliptheweb/status/1230401645269389317
- See: [Strapi](https://github.com/strapi/strapi)
- See: [KeystoneJS](https://www.keystonejs.com/)
- See: [TypeORM](https://github.com/typeorm/typeorm)


## UI

- See: [Ring UI](https://github.com/JetBrains/ring-ui)


## Server

- See: https://github.com/typicode/json-server
- See: https://github.com/lukeed/polka
- See: https://github.com/lukeed/sirv



## Environment

- See: https://github.com/motdotla/dotenv



## Обновление глобальных пакетов

- See: https://docs.npmjs.com/getting-started/updating-global-packages

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



## Проверить как будет выглядеть опубликованный пакет

```shell
npm pack
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


## Интерфейсы командной строки (CLI)

- See: https://github.com/SBoudrias/Inquirer.js
- See: https://github.com/sindresorhus/fkill-cli/blob/master/cli.js


## Travis CI

- See: https://travis-ci.org/
- See: [Node.js versions](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/#Specifying-Node.js-versions)

```yaml
language: node_js
cache: yarn
node_js:
  - node
  - "8"
  - "6"
```



## `NODE_PATH` environment

- See: [Modules. Loading from the global folders](https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders)
- See: [node-path-environment-variable-demo](https://github.com/inside-demo/node-path-environment-variable-demo)

```json
{
  "scripts": {
    "dev": "cross-env NODE_PATH=\"./utils:./node_modules\" NODE_ENV=development gulp serve"
  }
}
```



## Install package version

```shell
npm install bootstrap@3
```



## Что делать, если имя пакета уже занято?

- See: https://docs.npmjs.com/misc/scope

Для этого используют пространства имён [`npm-scope`](https://docs.npmjs.com/misc/scope).  
Например у тебя есть пакет `"utils"`, но это имя уже занято.
Принято добавить пространство имени организации или пользователя, например `"@vovanr/utils"`.
