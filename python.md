# Python

----

## Как узнать что возвращает ajax-запрос

`mysite/apps/user/views.py`

```python
return self.render_to_response({'pk': user.pk})
```

Значит вернёт `pk`



## Развернуть проект
```
virtualenv --python=python3 env
source env/bin/activate
pip install -r requirements.txt
```
Запуск проекта
```
source env/bin/activate
python ./server.py
```
Обовление зависимостей
```
source env/bin/activate
pip install -r requirements.txt --upgrade
```
