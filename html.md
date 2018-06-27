# HTML

----

- See: [Design Patterns and Widgets](https://www.w3.org/TR/wai-aria-practices/#aria_ex)

## Polyfills
- See: https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills



## HTML5 demos
- See: https://github.com/remy/html5demos



## Accessibility
- See: https://weblind.ru/



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
