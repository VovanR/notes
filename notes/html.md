# HTML

----

- See: [Html validator](https://validator.w3.org/nu/)
- See: [Design Patterns and Widgets](https://www.w3.org/TR/wai-aria-practices/#aria_ex)
- See: [Nutrition Cards for Accessible Components](https://davatron5000.github.io/a11y-nutrition-cards/)
- See: [The A11Y Project](https://a11yproject.com/)
- See: [Доступность интерфейсов. Лекция Яндекса](https://habr.com/company/yandex/blog/424879/)
- See: [Книга "Form Design Patterns"](https://formdesignpatterns.com/)
- See: [Математические формулы в SVG](https://github.com/mathjax/mathjax)
- See: [Редактор математических формул](http://www.wiris.com/editor/demo/en/developers)
- See: [The Open Graph protocol](http://ogp.me/)
- See: [SRI Hash Generator (Integrity)](https://www.srihash.org/)
- See: [How to Section Your HTML](https://css-tricks.com/how-to-section-your-html/)
- See: [A short note on HTML5 `article`, `section` and `hgroup`](https://www.brucelawson.co.uk/2019/html5-article-section-hgroup/)
- See: [Пять правил использования ARIA](https://www.w3.org/TR/using-aria/)
- See: [What Is ARIA?](https://blog.benmyers.dev/aria/)
- See: [Недоступность в картинках](http://css.yoksel.ru/inaccessibility/)
- See: [HTML vocabulary](http://apps.workflower.fi/vocabs/html/en)


## Light/Dark Theme

- See: https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme

```html
<meta name="color-scheme" content="light dark">
```

- See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color

```html
<meta name="theme-color" content="#4285f4" />
```

```html
<meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
```



## Polyfills

- See: https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills



## HTML5 demos

- See: https://github.com/remy/html5demos



## Accessibility

- See: https://weblind.ru/
- See: [Accessible Breadcrumb Navigation Pattern](https://scottaohara.github.io/a11y_breadcrumbs/)



## Ссылка на e-mail

- See: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Email_links

```html
<a href="mailto:nobody@mozilla.ru">nobody@mozilla.ru</a>
```

```html
mailto:nowhere@mozilla.org,nobody@mozilla.org
mailto:nowhere@mozilla.org?cc=nobody@mozilla.org
mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject
mailto:nowhere@mozilla.org?subject=Newsletter%20subscription%20request&body=Please%20subscribe%20me%20to%20your%20newsletter!%0A%0AFull%20name%3A%0A%0AWhere%20did%20you%20hear%20about%20us%3F
```



## Скачать файл download

```html
<a href="images/xxx.jpg" download>Скачать файл</a>
```



## Form

- See: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/My_first_HTML_form

Атрибут `action` обязателен

```html
<form action="">
	<fieldset>
		<legend>Title</legend>
	</fieldset>
</form>
```

- See: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/How_to_structure_an_HTML_form/Example

```html
<form action="">
	<section>
		<h2>Payment information</h2>

		<p>
			<label for="card">
				<span>Card type:</span>
				<select id="card" name="usercard">
					<option value="visa">Visa</option>
					<option value="mc">Mastercard</option>
					<option value="amex">American Express</option>
				</select>
			</label>
		</p>

		<p>
			<label for="number">
				<span>Card number:</span>
				<input type="text" id="number" name="cardnumber" required />
				<abbr title="required">*</abbr>
			</label>
		</p>

		<p>
			<label for="date">
				<span>Expiration date:</span>
				<input type="text" id="date" name="expiration" required />
				<abbr title="required">*</abbr>
				<em>formated as mm/yy</em>
			</label>
		</p>
	</section>
</form>
```



## Inputs

- See: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/The_native_form_widgets



## Flash link

Надо добавить тэгу `object`:

`style="pointer-events:none;"`

```html
<a id="logo" href="/" title="На главную страницу">
	<object href="/" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="280" height="45" id="logo_anim" align="middle" style="pointer-events:none;">
		<param name="allowScriptAccess" value="sameDomain" />
		<param name="allowFullScreen" value="false" />
		<param name="movie" value="/images/logo_anim.swf?v=3" />
		<param name="quality" value="high" />
		<param name="bgcolor" value="#ffffff" />
		<param name="wmode" value="opaque" />
		<embed src="/images/logo_anim.swf?v=3" quality="high" bgcolor="#ffffff" width="280" height="45" name="logo_anim" align="middle" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" wmode="opaque" />
	</object>
</a>
```



## Figure

```html
<figure>
    <img src=cats.jpg>
    <figcaption>Isabel loves the fluffy felines</figcaption>
</figure>
```



## Picture

- See: https://github.com/seokirill/posthtml-webp

Before:
```html
<img src="image.jpg">
```

After:
```html
<picture>
    <source type="image/webp" srcset="image.jpg.webp">
    <img src="image.jpg">
</picture>
```



## `srcset`

- See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset
- See: [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

```html
<img
    src="box-icon-70x70.png"
    srcset="box-icon-70x70@x2.png 2x, box-icon-70x70@x3.png 3x"
    width="70"
    height="70"
    alt="Box logo"
/>
```



## Aria described by

- See: https://www.smashingmagazine.com/2018/06/placeholder-attribute/

```html
<div class="input-wrapper">
  <label for="employee-id">
    Your employee ID number
  </label>

  <p
    id="employee-id-hint"
    class="input-hint">
    Can be found on your employee intranet profile. Example: <samp>a1234567-89</samp>.
  </p>

  <input
    id="employee-id"
    aria-describedby="employee-id-hint"
    name="id-number"
    type="text" />
</div>
```



## Autofill `autocomplete` attribute

- See: [Create Amazing Password Forms](https://www.chromium.org/developers/design-documents/create-amazing-password-forms)
- See: [Autofill](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill)
- See: [Password Form Styles that Chromium Understands](https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands)

```html
<fieldset>
    <legend>Create your account</legend>

    <p>
        <label>
            Username:
            <input name="username" autocomplete="username" spellcheck="false" autocorrect="off" autocapitalize="off">
        </label>
    </p>
    <p>
        <label>
            Password:
            <input name="password" type="password" autocomplete="new-password" spellcheck="false" autocorrect="off" autocapitalize="off">
        </label>
    </p>
    <p>
        <label>
            Confirm password:
            <input name="confirm-password" type="password" autocomplete="new-password" spellcheck="false" autocorrect="off" autocapitalize="off">
        </label>
    </p>
</fieldset>
```

```html
<fieldset>
    <legend>Log in</legend>

    <p>
        <label>
            Username:
            <input name="username" autocomplete="username" spellcheck="false" autocorrect="off" autocapitalize="off">
        </label>
    </p>
    <p>
        <label>
            Password:
            <input name="password" type="password" autocomplete="current-password" spellcheck="false" autocorrect="off" autocapitalize="off">
        </label>
    </p>
</fieldset>
```


### One-time code field

- See: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete-one-time-code
- See: https://web.dev/web-otp/
- See: https://twitter.com/shinework/status/1298916867730558976

Для полей ввода кода подтверждения, которое приходит в СМС или Пуш-уведомлении.  
iOS умеет заполнять такие поля автоматически.

```html
<input autocomplete="one-time-code"/>
```



## OAuth 2 окно окончания авторизации — search-параметры URL передаются в родительский колбэк

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
  <script>
    window.opener && window.opener.loginCallback && window.opener.loginCallback(window.location.search);
    window.close();
  </script>
</body>
</html>
```



## Элемент `<nav>`

- See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav

Блок навигации по сайту. 

```html
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

Документ может содержать несколько элементов `<nav>`.  
Например один для навигации по сайту, второй для навигации по странице.  
В этом случае надо добавить атрибут `aria-labeledby` или `aria-label` чтобы пометить навигацию для скринридеров

- See: [Labeling section content](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#Labeling_section_content#Labeling_section_content)
- See: https://code.visualstudio.com/docs/nodejs/reactjs-tutorial

```html
<header>
  <nav aria-labeledby="primary-navigation">
    <h2 id="primary-navigation">
      Primary navigation
    </h2>

    <!-- navigation items -->
  </nav>
</header>

<aside>
    <nav id="docs-subnavbar" aria-label="On Page Navigation">
        <h4 tabindex="0">
            <span class="sr-only">In this article there are 6 sections</span>
            <span aria-hidden="true">In this article</span>
        </h4>

        <ul class="nav">
            <li><a href="#_welcome-to-react">Welcome to React</a></li>
            <li><a href="#_hello-world">Hello World!</a></li>
            <li><a href="#_debugging-react">Debugging React</a></li>
            <li><a href="#_linting">Linting</a></li>
            <li><a href="#_popular-starter-kits">Popular Starter Kits</a></li>
            <li class="active"><a href="#_common-questions">Common Questions</a></li>
        </ul>
    </nav>
</aside>
```



## Элемент `<article>`

- See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article



## Элемент `<time>`

- See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time

Например для элемента "дата публикации"

```html
<footer>
  <p>
    Posted on
    <time datetime="2015-05-15 19:00">May 15</time>
    by Staff.
  </p>
</footer>
```



## Элементы, которые могут быть `focused`

- See: https://www.w3.org/TR/html5/editing.html#can-be-focused



## Элементы, которые могут быть `disabled`

- See: https://www.w3.org/TR/html5/disabled-elements.html#disabled-elements



## `<fieldset disabled>` отключает дочерние элементы

- See: https://www.w3.org/TR/html5/sec-forms.html#disabled-fieldset
- See: https://codepen.io/VovanR/pen/VVoLjj

```html
<form action="">
  <fieldset name="clubfields" disabled>
    <legend>
      <label>
        <input type=checkbox name=club onchange="form.clubfields.disabled = !checked">
        Use Club Card
      </label>
    </legend>
    <p><label>Name on card: <input name=clubname required></label></p>
    <p><label>Card number: <input name=clubnum required pattern="[-0-9]+"></label></p>
    <p><label>Expiry date: <input name=clubexp type=month></label></p>
  </fieldset>
</form>
```
