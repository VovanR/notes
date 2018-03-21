# MongoDB

----

See: https://docs.mongodb.com/manual/reference/program/mongo/

## Install
```shell
sudo apt-get install mongodb
```



## Войти
```shell
mongo
```


## Показать базы данных
```
> show dbs
```


## Подключиться к бд
```
> var l = connect('example-db')
```


## Очистить коллекцию
```
> l.users.remove({})
> l.users.dropIndexes()
> l.users.count()
```


## Схема базы
See: https://github.com/variety/variety


## Dump
- See: https://www.mongodb.com/blog/post/archiving-and-compression-in-mongodb-tools
Создать дамп базы данных, но без коллекции пользователей
- See: https://docs.mongodb.com/manual/reference/program/mongodump/
```shell
mongodump --db=DB_NAME --excludeCollection=users --out=dump
```

Загрузить дамп на сервер
```shell
rsync -a dump USER@HOST:/var/www/foo.ru/
```

Подключиться к серверу
```shell
ssh USER@HOST
```

Перейти в директорию сайта
```shell
/var/www/foo.ru/
```

Импортировать дамп
- See: https://docs.mongodb.com/manual/reference/program/mongorestore/
```shell
mongorestore --db=DB_NAME dump/
```
