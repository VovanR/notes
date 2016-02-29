# Backbone

----

- See: http://frontender.info/7-battle-tested-backbonejs-rules-for-amazing-web-apps/
- Plugins: https://github.com/jashkenas/backbone/wiki/Extensions,-Plugins,-Resources

## REST-сервер должен обеспечивать следующий интерфейс
See: page 118

| url              | HTTP Method   | Operation                                                        |
|------------------|---------------|------------------------------------------------------------------|
| `/api/books`     | `GET`         | Считывание массива книг                                          |
| `/api/books/:id` | `GET`         | Считывание книги с идентификатором `:id`                         |
| `/api/books`     | `POST`        | Добавление новой книги и ее возвратс добавленным атрибутом `:id` |
| `/api/books/:id` | `PUT`         | Обновление книги с идентификатором `:id`                         |
| `/api/books/:id` | `DELETE`      | Удаление книги с идентификатором `:id`                           |

```javascript
app.Library = Backbone.Collection.extend({
    model: app.Book,
    url: '/api/books'
});
```



## Model
```javascript
// Только для чтения
console.log(this.model.attributes);
// Копия данных
console.log(this.model.toJSON());
```

Динамические свойства модели по-умолчанию
```javascript
var User = Backbone.Model.extend({
    urlRoot: 'User',

    defaults: function () {
        return {
            screenName: 'You',
            id: Math.uuid(),
            isMe: false
        };
    },

    toJSON: function() {
        return {
            cid: this.cid,
            id: this.id,
            screenName: this.get('screenName'),
            isMe: this.get('isMe')
        };
    }
});
```

Чтобы не посылать лишние вспомогательные поля, можно переопределить `save`
```javascript
Backbone.Model.extend({
    // Overwrite save function
    save: function(attrs, options) {
        options || (options = {});
        attrs || (attrs = _.clone(this.attributes));

        // Filter the data to send to the server
        delete attrs.selected;
        delete attrs.dontSync;

        options.data = JSON.stringify(attrs);

        // Proxy the call to the original save function
        Backbone.Model.prototype.save.call(this, attrs, options);
    }
});
```



## Collection
Вернуть отфильтрованные значения
```javascript
// Filter down the list of all todo items that are finished.
completed: function () {
    return this.where({completed: true});
},

// Filter down the list to only todo items that are still not finished.
remaining: function () {
    return this.where({completed: false});
},
```


Вызвать функцию у всех экземпляров
```javascript
_.invoke(Todos.completed(), 'destroy');
```


## Доступ по айдишнику
Моделе коллекции определить свойство айди
```javascript
var FacilitiePrototypeModel = Backbone.Model.extend({
    defaults: {
        capacity: null,
        type: null
    },
    idAttribute: 'type'
});

var FacilitiesPrototypesCollection = Backbone.Collection.extend({
    model: FacilitiePrototypeModel,
});

var facilitiesPrototypesCollection = new FacilitiesPrototypesCollection([
    {
        capacity: 1,
        type: 'first'
    },
    {
        capacity: 2,
        type: 'second'
    }
]);

console.log(facilitiesPrototypesCollection.get('second'));
// 2
```



## Когда берем данные из инпута — обрезаем конечные пробелы
```javascript
$('#new-todo').val().trim()
```



## LocalStorage
```javascript
backboneLocalstorage: '../bower_components/backbone.localStorage/backbone.localStorage',
```

Используется в коллекции
```javascript
define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
    'models/todo'
], function (
    _,
    Backbone,
    Store,
    Todo
) {
    'use strict';

    var TodosCollection = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: Todo,
        // Save all of the todo items under the `'todos'` namespace.
        localStorage: new Store('todos-backbone'),
    });

    return new TodosCollection();
});
```



## View
Как надо === Как не надо
```javascript
this.$el === $(this.el);
```

```javascript
this.$('.title') === this.$el.find('.title');
```



## Добавление блока вьюхи во вьюху
```javascript
// Add a single todo item to the list by creating a view for it, and
// appending its element to the `<ul>`.
addOne: function (todo) {
    var view = new TodoView({ model: todo });
    this.$todoList.append(view.render().el);
},
```

```javascript
initialize: function () {
    this.listenTo(this.model, 'remove', this.remove);
},
```

See: http://jsfiddle.net/VovanR/w88a30r1/
```javascript
destroy: function () {
    this.off();
    // `stopListening` and `undelegateEvents` fires in `remove`
    this.remove();
}
```

```javascript
editArticle: function (articles, id) {
    require(['models/articles'], function (ArticlesModel) {
        var Articles = new ArticlesModel({id: id});
        Articles.fetch().then(function () {
            require(['views/articles/edit'], function (EditArticle) {
                var editArticle = new EditArticle({model: Articles});
            });
        });
    });
},
```

```javascript
edit: function () {
    this.model.save({
        title: this.$('#container_edit_article #title').val(),
        text: this.$('#container_edit_article #text').val(),
    }, {validate : true});

    // Перенаправляет на другую страницу
    var router = new Router();
    router.navigate('articles', true);
},
```

Render
```javascript
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/TitlebarTemplate.html',
], function (
    $,
    _,
    Backbone,
    TitlebarTemplate
) {
    'use strict';

    var TitlebarView = Backbone.View.extend({
        el: '#titlebar-placeholder',
        template: _.template(TitlebarTemplate),
        render: function () {
            var data = {
                name: 'name',
                _: _
            };

            this.$el.html(this.template(data));
        },
    });

    return TitlebarView;
});
```

```javascript
this.listenTo(this.stateModel, 'change:readMore', this.renderReadMore);
```

```javascript
this.$el.html(this.template(this.model.toJSON()));
```

Выполняет `addOne` во вьюхе `this`
```javascript
global.App.Todos.each(this.addOne, this);
// получается
this.addOne(item);
```


## Взаимодействие между вьюхами с помощью событий
See: http://frontender.info/7-battle-tested-backbonejs-rules-for-amazing-web-apps/
```javascript
var BodyView = Backbone.View.extend({
    initialize: function () {
        this.listenTo(Backbone, 'prevent-scroll', this.preventScroll);
    },

    preventScroll: function (prevent) {
        // класс .prevent-scroll использует CSS свойство: overflow: hidden;
        this.$el.toggleClass('prevent-scroll', prevent);
    }
});

// И далее где-нибудь в нужном месте кода:
// запрет прокрутки
Backbone.trigger('prevent-scroll', true);
// разрешение прокрутки
Backbone.trigger('prevent-scroll', false);
```

```javascript
events: {
    'submit .contact-form': 'onFormSubmit',
    'click .btn-close-form': 'onFormClose',
},
```



## События
Для текущего вью в `events`
Для подписчиков через `listenTo` в `initialize`



## Controller
Такого нет, но можно создать объект для управления
Два представления:
- Управляет коллекцией элементов
- Работает с отдельными элементами



## Связывание двух моделей
```html
<script id="person-view-template" type="text/template">
    <%= name %> — <%= bus_name %>
</script>

<ul id="people">
</ul>

<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js"></script>
```

```javascript
/**
 * Модель автобуса
 */
var BusModel = Backbone.Model.extend({
    defaults: {
        id: null,
        name: null,
        // Список id пассажиров
        passengers: null,
    },

    /**
     * Возвращает `true`, если в автобусе есть пассажир с указанным `id`
     *
     * @param {String|Number} passengerId
     * @return {Boolean}
     */
    containsPassenger: function (passengerId) {
        return _.contains(this.get('passengers'), passengerId);
    },
});

/**
 * Модель человек
 */
var PersonModel = Backbone.Model.extend({
    defaults: {
        id: null,
        name: null,
    },
});

/**
 * Элемент списка
 */
var PersonView = Backbone.View.extend({
    tagName: 'li',
    className: 'person',
    template: _.template($('#person-view-template').html()),

    /**
     * @return {PersonView}
     */
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },
});

/**
 * Список человек — автобус
 */
var PeopleView = Backbone.View.extend({
    el: '#people',

    /**
     * @param {Object} o Опции
     * @param {Backbone.Collection} o.collection Коллекция пассаживор
     * @param {Backbone.Collection} o.busCollection Коллекция автобусов
     */
    initialize: function (o) {
        this.busCollection = o.busCollection;

        this.render();
    },

    /**
     */
    render: function () {
        this.collection.each(function (model) {
            var bus = this.busCollection.containsPassenger(model.get('id'));
            var person = new PersonView({
                model: new Backbone.Model({
                    name: model.get('name'),
                    bus_name: bus.get('name'),
                }),
            });
            this.$el.append(person.render().$el);
        }, this);
    },
});

/**
 * Коллекция владельцев
 */
var PeopleCollection = Backbone.Collection.extend({
    model: PersonModel,
});

/**
 * Коллекция автобусов
 */
var BusCollection = Backbone.Collection.extend({
    model: BusModel,

    /**
     * @param {String|Number} passengerId
     */
    containsPassenger: function (passengerId) {
        var bus = null;
        this.each(function (model) {
            if (model.containsPassenger(passengerId)) {
                bus = model;
                return;
            }
        });
        return bus;
    },
});

var start = function () {
    var peopleCollection = new PeopleCollection([
        { id: 0, name: 'Peter', },
        { id: 1, name: 'Andre', },
        { id: 2, name: 'Lara', },
    ]);

    var busCollection = new BusCollection([
        { id: 0, name: 'b1', passengers: [2], },
        { id: 1, name: 'b2', passengers: [1, 0], },
    ]);

    var peopleView = new PeopleView({
        collection: peopleCollection,
        busCollection: busCollection,
    });
};
start();
```



### Добавдяем эвенты вьюшке после создания экземпляря
```javascript
App.Views.Block = Backbone.View.extend({

    . . .

    events:    {
    },

    . . .

});

var block = new App.Views.Block();

// Вот оно тут
block.events = _.extend({
    'click #base-info, #tabs-base-info': function() {
        this.model.set({ state: 'base' });
    }
}, block.events);

// Делегируем добавленные эвенты
block.delegateEvents();
```
