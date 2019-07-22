# AngularJS v. 1

----

## Articles
- See: [Понимание областей видимости или Scope в AngularJS](http://habrahabr.ru/post/182670/)
- See: [Шпаргалка по AngularJS](http://ts-soft.ru/blog/angular-cheatsheet)
- See: [AngularJS and scope.$apply](http://jimhoskins.com/2012/12/17/angularjs-and-apply.html)
- See: [AngularJS Sticky Notes Part 2 – Isolated Scope](http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope/)
- See: [`scope: { biTitle: '=', title: '@', bar: '=' },`](http://stackoverflow.com/questions/14050195/what-is-the-difference-between-and-in-directive-scope)
- See: [Директивы в AngularJS для начинающих. Часть 1](http://habrahabr.ru/post/179755/)



## Принципы
- See: http://loftblog.ru/material/angularjs-podxod-angular/
- See: http://www.fse.guru/angularjs-angular-way


1. Никаких манипуляций с DOM внутри контроллеров! Делайте что угодно с DOM внутри директив и в очень редких случаях внутри сервисов. Но не в контроллерах.
1. Все действия не-из-Angular должны быть переведены в «мир Angular» с помощью `$scope.$apply` (а не `$digest`)!
1. Минимум логики внутри контроллеров — они для того, чтобы «склеивать» части приложения вместе.
1. Бизнес логику приложения размещайте в сервисах.
1. Минимизируйте вложенность `$scope`.
1. Старайтесь не использовать `$parent.$scope`.
1. Лучше не используйте напрямую $scope контроллеров внутри директив.
1. Компоненты должны знать о всех других `$scope`. Используйте атрибуты и биндинги для связи различных частей приложения.
1. Минимизируйте применение `$scope.on`, `$scope.emit`, `$scope.broadcast`. Вместо этого на поля и геттеры лучше ставьте `$watch`.
1. Создавайте функционально-минимальные компоненты.
1. Используйте внедрение зависимостей для связи между компонентами.

**Проектирование архитектуры**
- Следуйте функциональному разделению в структуре проекта:
  - Angular.module на каждый функциональный модуль
  - Отдельная директория для каждого функционального модуля
  - Все компоненты внутри директории расположены друг за другом. Смотри как пример такой организации кода [`NGBP`](https://github.com/ngbp/ngbp)
- Структура проекта должна соответствовать его архитектуре.
- Один компонент на файл.
- Связные компоненты старайся делать с максимальной инкапсуляцией.
- Максимальная гранулярность компонентов (что-то вроде Unix-way).
- Разделяй поведение от состояния (бездумные представления и анемичные модели это хороший тон).


Тэги и атрибуты — это директивы



## `$apply`
без него сообщение не обновится
на самом деле в этом случае надо использовать `$timeout`
```html
<div ng:app ng-controller="Ctrl">
    {{message}}
</div>
```

```js
function Ctrl($scope) {
    $scope.message = 'Waiting 2000ms for update';

    setTimeout(function () {
        $scope.$apply(function () {
            $scope.message = 'Timeout called!';
        });
    }, 2000);
}
```



## `$digest`
Usually, you don't call `$digest()` directly in controllers or in directives.

Instead, you should call `$apply()` (typically from within a directive), which will force a `$digest()`.



## `$interpolateProvider`
Для изменения шаблона включений в шаблоны. Например вместо `{{}}` используем `{()}`
```js
angular.module('myApp', ['angularSoundManager'])
    .config([
        '$interpolateProvider', function ($interpolateProvider) {
            return $interpolateProvider.startSymbol('{(').endSymbol(')}');
        }
    ]);
```



## Рыбные данные в контроллере
```js
angular.module('myApp', ['angularSoundManager'])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.songs = [
            {
                id: 'one',
                title: 'Rain',
                artist: 'Drake',
                url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3'
            },
            {
                id: 'two',
                title: 'Walking',
                artist: 'Nicki Minaj',
                url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/walking.mp3'
            },
            {
                id: 'three',
                title: 'Barrlping with Carl (featureblend.com)',
                artist: 'Akon',
                url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
            },
            {
                id: 'four',
                title: 'Angry cow sound?',
                artist: 'A Cow',
                url: 'http://www.freshly-ground.com/data/audio/binaural/Mak.mp3'
            },
            {
                id: 'five',
                title: 'Things that open, close and roll',
                artist: 'Someone',
                url: 'http://www.freshly-ground.com/data/audio/binaural/Things%20that%20open,%20close%20and%20roll.mp3'
            }
        ];
    }]);
```



## Class name
```html
<div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">
```



## Событие на кнопку
```html
<button ng-click="editProject.save()" ng-disabled="myForm.$invalid" class="btn btn-primary">Save</button>
```



## Фильтры
```html
<tr ng-repeat="project in projectList.projects | filter:projectList.search | orderBy:'name'">
```
