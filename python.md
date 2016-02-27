# Python

----

## Как узнать что возвращает ajax-запрос

`mysite/apps/user/views.py`

```python
return self.render_to_response({'pk': user.pk})
```

Значит вернёт `pk`
