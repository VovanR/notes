# Pug

----

Jade has been renamed to Pug

- See: https://pugjs.org
- See: https://github.com/pugjs/pug

## Разбить массив
```pug
mixin carousel(o)
	.carousel&attributes(attributes)
		.row
			-o = o || {}
			-var n = 0
			while n < (o.count || 7)
				.col-xs-3
					a.carousel__item(href="#")
						img(src="http://dummyimage.com/210x130/000/fff.png" alt="")
						- n++
			-var n = 0
			while n < (o.count || 1)
				.col-xs-3
					span.party-carousel__item
						img(src="http://dummyimage.com/210x130/fff/fff.png" alt="")
						- n++
```



## Вывести рыбный список картинок
```pug
.row
    each val in ['148x17', '61x65', '152x31', '125x33', '118x30', '64x54']
        .col-xs-4
            img.img-responsive(src="http://dummyimage.com/#{val}/000/fff.png" alt="")
```



## Вывести список в два столбца
```pug
mixin discussions
	+b.discussions&attributes(attributes)
		.container
			a(name="anchor-discussions")
			+e('h2').title
				| Дискуссии

			.row
				-var list = getData('discussions')
				-var length = list.length
				-var n = 0
				.col-xs-6
					+e('ul').list
						while n < (length / 2)
							+e('li').list-item
								= list[n].name
								-n++

				.col-xs-6
					+e('ul').list
						while n < length
							+e('li').list-item
								= list[n].name
								-n++
```



```pug
mixin carousel(o)
	+b.carousel&attributes(attributes)
		+e.content
			if block
				block

		+e.controls
			+e.prev
			+e.next

		if o.pages
			+e.pager
				-var n = o.pages
				while n-- > 0
					+e.page(class={'is-active': n === o.pages - 1 ? true : false})
```
