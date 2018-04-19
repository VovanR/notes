# Python

----

## Как узнать что возвращает ajax-запрос

`mysite/apps/user/views.py`

```python
return self.render_to_response({'pk': user.pk})
```

Значит вернёт `pk`



## Развернуть проект
```shell
virtualenv --python=python3 env
source env/bin/activate
pip install -r requirements.txt
```

Запуск проекта
```shell
source env/bin/activate
python ./server.py
```

Обновление зависимостей
```shell
source env/bin/activate
pip install -r requirements.txt --upgrade
```
