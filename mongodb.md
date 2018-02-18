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
