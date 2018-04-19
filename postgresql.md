# PostgreSQL

----

- See: https://www.postgresql.org/

## Install
```shell
sudo apt-get install postgresql postgresql-contrib libpq5 libpq-dev pgadmin3
```

```shell
postgres -V
  psql (PostgreSQL) 9.6.7
```



## Войти
See: https://stackoverflow.com/questions/11919391/postgresql-error-fatal-role-username-does-not-exist
```shell
sudo su - postgres
psql postgres
```

Если создан пользователь, то заходим так
```shell
psql postgres -U user_name
```



## User
По умолчанию создан пользователь `postgres`
```shell
psql postgres
```

Показать список пользователей
```sql
postgres=# \du
```

По умолчанию пользователь `postgres` не имеет пароля, установим
```sql
postgres=# \password postgres
```

### Создать пользователя
```sql
postgres=# CREATE ROLE user_name WITH LOGIN PASSWORD 'user_password';
postgres=# \du
```

Дадим возможность пользователю создавать базы
```sql
postgres=# ALTER ROLE user_name CREATEDB;
```


## Создать базу данных
Создаём базу
```sql
postgres=# create database "example-db";

postgres=# grant all on database "example-db" to user_name;

postgres=# grant all on schema "public" to user_name;
postgres=# grant all on all tables in schema "public" to user_name;
postgres=# grant all on all sequences in schema "public" to user_name;
```

А можно так
```sql
postgres=# GRANT ALL PRIVILEGES ON DATABASE 'example-db' TO user_name;
```

Импортируем данные
```shell
sudo -u postgres psql 'example-db' < fixtures/pg/schema.sql
sudo -u postgres psql 'example-db' < fixtures/pg/insert.sql
```

Список баз
```sql
postgres=# \list
```
или в терминале
```shell
psql -l
```

Подключиться к БД
```sql
postgres=# \connect 'example-db'
```

Показать таблицы БД
```sql
postgres=# \dt
```


## Переименовать БД
```sql
postgres=# ALTER DATABASE 'example-db' RENAME TO 'renamed-example-db';
```


## Удалить БД
```sql
postgres=# DROP DATABASE 'example-db';
```


## Удалить пользователя
```sql
postgres=# DROP USER user_name;
```

Если выводит
```
ERROR:  role "user_name" cannot be dropped because some objects depend on it
DETAIL:  privileges for schema public
```

Выполним
```sql
postgres=# revoke ALL on schema public from user_name;
```
