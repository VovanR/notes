# jQuery

----

## Submenu show on hover

- See: https://jsfiddle.net/VovanR/bp2w594y/
- See: https://github.com/CWSpear/bootstrap-hover-dropdown
- See: https://github.com/kybarg/bootstrap-dropdown-hover
- See: https://github.com/istvan-ujjmeszaros/bootstrap-dropdown-hover

jQuery and Bootstrap

```html
<ul class="nav navbar-nav">
    <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            Products <span class="caret"></span>
        </a>

        <ul class="dropdown-menu">
            <li><a href="foo.html">Foo</a></li>
            <li><a href="bar.html">Bar</a></li>
            <li><a href="baz.html">Baz</a></li>
        </ul>
    </li>
</ul>
```

```js
$(document).ready(function () {
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(300).fadeOut(500);
    });
});
```



## Вместо `e.stopPropagation()`

- See: https://api.jquery.com/event.isDefaultPrevented/

```javascript
if (e.isDefaultPrevented()) {
    return false;
}
```



## Scroll to anchor

- See: https://gist.github.com/VovanR/e3ff42d530ee747976a5



## Scroll top button

- See: https://gist.github.com/VovanR/921494f803594f34af98
