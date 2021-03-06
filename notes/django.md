# Django

----

## Значение названия поля модели формы

Например для лейблов
```django
{{ foo|verbose_name:"link"|capfirst|escape }}
```



## Thumbnail

```python
{% thumbnail form.image.value "150x100" crop="center" as im %}
    <a class="js-settings__thumb" href="{{ form.image.value.url }}">
        <img class="js-settings__preview" src="{{ im.url }}" alt="">
    </a>
{% empty %}
    <img class="js-settings__preview" src="" alt="">
{% endthumbnail %}
```



## i18n

```django
{% load i18n %}
{% trans '' %}
{% blocktrans %}{% endblocktrans %}
```

```django
{% url 'search' as url_search %}
{% blocktrans %}
<p>Ничего не найдено, воспользуйтесь <a href="{{ url_search }}">расширенным поиском</a></p>
{% endblocktrans %}
```



## Include

```django
{% include 'main/boxes.html' %}
```



## Blocks

```django
{# begin content #}
<div class="content">
</div>
{# end content #}
```



## Сжатие HTML

- See: https://docs.djangoproject.com/en/1.7/ref/templates/builtins/

```django
{% spaceless %}
{% endspaceless %}
```


## jQuery Templating

- See: http://tothinkornottothink.com/post/4282971041/using-jquery-templating-icanhaz-js-with-django

```django
{% verbatim %}
<script id="user" type="text/html">
  <a href="{% url addItem %}">Add Item</a>
</script>
{% endverbatim %}
```


- See: http://djbook.ru/apfs02.html



## `PyJade`

- See: https://github.com/syrusakbary/pyjade

```django
- load static
- load i18n
- load thumbnail

.b-foo.js-foo(
    class="{% with pk=foo.pk|stringformat:'s' %}{% with 'js-foo_pk_' as foopk %}{{ foopk|add:pk }}{% endwith %}{% endwith %}",
    data-pk="{{ foo.pk }}"
)
    a.b-foo__name-link.js-foo__name-link(href="{% url 'foo-calc' pk=foo.pk %}")
        | {{ foo.name }}
        if foo.description
            | {{ foo.description }}
        else
            - trans "Enter description"
```

```django
.b-places__dots
    for i in foo.points.all
        if forloop.first
            span._state_current
        else
            span
```

```django
//-{% if user.is_authenticated and foo|owner:user %}true{% else %}false{% endif %}


- load profile_extras

span.b-foo__favorite.js-foo__favorite.b-icon(
    class="{% iffavorite foo %}b-foo__favorite_state_current{% endiffavorite %}"
)
```


## 404 or 500

### Error pages on `devel` (404 and 505)

Set `DEBUG` to `False` in `foo/settings/devel.py`

```shell
python manage.py runserver --settings foo.settings.devel --insecure
```
Open http://127.0.0.1:8000/404


- See: http://uxscrutiny.com/2014/03/404-and-500-errors-in-django/

Problem: You’d like to see what your 404/500 error pages look like when `DEBUG=FALSE`

Potential fix: One easy hack to 'trigger' Django to show 404/500 pages is to add the routes to your `url.py`:
```python
from django.views.generic.base import TemplateView
if settings.DEBUG:
    urlpatterns += patterns('',
        (r'^500/$', TemplateView.as_view(template_name="404.html")),
        (r'^404/$', TemplateView.as_view(template_name="404.html")),
    )
```

Если нужно отображать 500 ошибку по умолчанию
```python
from django.views.defaults import server_error as server_error_view
if settings.DEBUG:
    urlpatterns += patterns('',
        (r'^500/$', server_error_view),
    )
```



## Узнать что возвращает AJAX-запрос

`foo/apps/bar/views.py`

```python
return self.render_to_response({'pk': bar.pk})
```

Значит вернёт `pk`



## Ручной сброс пароля

```
(env)vovanr@vovanr
 > ./manage.py shell
>>> from apps.users.models import User
>>> a = User.objects.get(id = 1)
>>> a.set_password('123456')
>>> a.save()
```



## Добавить рыбную страницу

Создаем шаблон страницы `foo/templates/bar.html`

Добавляем ее урл

`foo/urls.py`
```python
from django.views.generic.base import TemplateView

urlpatterns = [
    url(r'^bar/$', TemplateView.as_view(template_name='bar.html')),
]
```



## Вывод строки по условию

```python
{% if not limits.limit %} disabled{% endif%}
```
or
```python
{{ ' disabled' if not limits.limit }}
```



## Изменить страницу авторизации

- See: https://docs.djangoproject.com/en/1.10/topics/auth/default/  

`urls.py`:
```python
. . .

from django.contrib.auth import views as auth_views

urlpatterns = [
    . . .

    url(r'^admin\/login/$', auth_views.login, {'template_name': 'users/login.html'}),
]
```
Copy template
`.env/lib/python3.5/site-packages/django/contrib/admin/templates/admin/login.html`



## Django Compressor Less.js (`lessc`) Source Map

`settings/common.py`
```python
COMPRESS_ENABLED = True

COMPRESS_PRECOMPILERS = [
    ('text/less', 'node_modules/.bin/lessc --autoprefix {infile} {outfile}'),
]
```

`settings/local.py`
```python
COMPRESS_ENABLED = False

COMPRESS_PRECOMPILERS = [
    ('text/less', 'node_modules/.bin/lessc --autoprefix {infile} {outfile} --source-map-less-inline --source-map-map-inline'),
]
```



## Pluralize

- See: https://github.com/j2a/pytils

```python
{% load pytils_numeral %}

{{ item.answers }} {{ item.answers|choose_plural:"сообщение, сообщения, сообщений" }}
```



## Вывести первые несколько элементов списка

- See: https://docs.djangoproject.com/en/dev/ref/templates/builtins/#slice

```python
{% for item in items|slice:":3" %}
    <a
        href="{% url 'foo:item' item.pk %}"
        {% if item.name|length > 10 %}
        title="{{ item.name }}"
        {% endif %}
        >
        {{ item.name|truncatechars:10 }}
    </a>
{% endfor %}
```



## Copyrights

```python
<div class="copyrights">
    ©&nbsp;2000&nbsp;—&nbsp;{% now "Y" %} «Рога&nbsp;и&nbsp;Копыта».
</div>
```



## Carousel

- See: https://docs.djangoproject.com/en/dev/ref/templates/builtins/#for

```python
<div class="carousel">
    {% for logo in logo_list %}
        {% if forloop.first %}
            <div class="carousel__item">
                <ul class="list">
        {% endif %}

        <li class="list__item">
            <a
                class="link"
                href="{{ logo.url }}"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                    class="logo"
                    src="{{ logo.image.url }}"
                    alt="logo.name"
                    />
            </a>
        </li>

        {% if forloop.last %}
            {% for stub in logo_stubs %}
                <li class="list__item"></li>
            {% endfor %}
        {% endif %}

        {% if forloop.counter|divisibleby:"12" or forloop.last %}
                </ul>
            </div>

            {% if not forloop.last %}
                <div class="carousel__item">
                    <ul class="list">
            {% endif %}
        {% endif %}
    {% endfor %}
</div>
```


## Times

```python
{% for i in '12345' %}
    <li class="list__item">
        <a class="list__link" href="#">
            <img
                class="list__logo"
                src="http://dummyimage.com/200x100/000/fff.png?text={{ i }}"
                alt=""
                />
        </a>
    </li>
{% endfor %}
```

```python
{% for i in 'x'|rjust:"1000" %}
    <li class="list__item">
        <a class="list__link" href="#">
            <img
                class="list__logo"
                src="http://dummyimage.com/200x100/000/fff.png"
                alt=""
                />
        </a>
    </li>
{% endfor %}
```


## Development

### `ENV`

```shell
virtualenv --python=python3.5 .env
source .env/bin/activate
pip install -r requirements.txt --upgrade
```

### База данных

```shell
sudo apt-get install postgresql-9.4
sudo -u postgres psql
create user PROJECTNAME with password 'PROJECTNAME';
create database PROJECTNAME with owner PROJECTNAME;
\q
./manage.py migrate
```

### manage.py

```shell
./manage.py migrate
./manage.py createsuperuser
./manage.py runserver
```

open http://127.0.0.1:8000/
