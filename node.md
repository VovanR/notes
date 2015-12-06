# Node.js

----

## Записать в файл
```javascript
var stream = fs.createWriteStream(filePath);
stream.once('open', function (fd) {
    stream.write('.block' + '\n    {}\n');
    stream.end();
});
```



## Изменяем версию пакета и публикуем ее
- See: https://docs.npmjs.com/getting-started/publishing-npm-packages
- See: https://docs.npmjs.com/misc/developers#before-publishing-make-sure-your-package-installs-and-works

```bash
npm version 0.2.2
git push
git push --tags
npm publish
npm i -g bemstyla
```



## Для тестирования локального пакета (вместо `link`)
```bash
cd ~/work/bemstyla/
npm i -g .
```



## Новый тэг в гите
```bash
git tag -a v1.1.0
    1.1.0
```


## Авторизоваться в `npm`
```bash
npm adduser
    username
    password
    mail@gmail.com
```
