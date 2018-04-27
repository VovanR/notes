# CSS

----

- See: http://philipwalton.github.io/solved-by-flexbox/
- See: https://github.com/AllThingsSmitty/css-protips
- See: http://codeguide.co

## Clear Fix

```css
/*
 * Clear Fix
 */

.group:before, .group:after { content: " "; display: table; }
.group:after { clear: both; }
.group { zoom: 1; } /* IE 6/7 (trigger hasLayout) */
```


*LESS mixin*

```less
/*
 * Clearfix
 * See: http://nicolasgallagher.com/micro-clearfix-hack/
 */

.mixin-group() {
    /* IE 6/7 (trigger hasLayout) */
    *zoom: 1;

    &:before,
    &:after {
        display: table;
        content: " ";
    }
    &:after {
        clear: both;
    }
}
```

LESS use:

```less
/*
 * Clearfix
 * http://nicolasgallagher.com/micro-clearfix-hack/
 */

.group { .mixin-group(); }
```



## Hide text

```css
/*
 * Hide text
 */

.hide-text {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
}
```


*LESS mixin*

```less
/*
 * CSS image replacement
 * See: http://nicolasgallagher.com/another-css-image-replacement-technique/
 */

.mixin-hide-text() {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
}
```

LESS use:

```less
/* Hide text */
.hide-text { .mixin-hide-text(); }
```



## A Collection of Handy CSS Snippets

```css
/** A Collection of Handy CSS Snippets */

.float-left {
    float: left;
}
.float-right {
    float: right;
}

.hide {
    display: none;
}
.show {
    display: block;
}

.disabled {
    pointer-events: none;
    opacity: 0.5;
}

table tr:nth-child(even) {
    background: rgba(0,0,0,0.1);
}

a {
    padding: 0 .5em;
    margin: 0 -.5em;
}

*, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.break {
    -ms-word-break: break-all;
    word-break: break-all;

    word-break: break-word;

    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
}

.ellipsis {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    -ms-text-overflow: ellipsis; /* Required for IE8 */
    -o-text-overflow: ellipsis; /* Required for Opera */
    text-overflow: ellipsis;
}

pre {
    white-space: pre-wrap;       /* Chrome & Safari */
    white-space: -moz-pre-wrap;  /* Mozilla since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
```



```css
@media print {
    * {
        background: none !important;
        color: black !important;
        box-shadow: none !important;
        text-shadow: none !important;

        /* Images, vectors and such */
        filter: Gray();                          /* IE4-8: depreciated */
        filter: url('desaturate.svg#grayscale'); /* SVG version for IE10, Firefox, Safari 5 and Opera */
        -webkit-filter: grayscale(100%);         /* Chrome + Safari 6 */
        -moz-filter: grayscale(100%);            /* Future proof */
        -ms-filter: grayscale(100%);             /* Future proof */
        -o-filter: grayscale(100%);              /* Future proof */
        filter: grayscale(100%);                 /* Future proof or polyfilled */
    }

    a {
        text-decoration: underline;
    }

    a[href]:after {
        content: " (" attr(href) ")";
    }

    a[href="#"],
    a[href="javascript:"] {
        content: "";
    }
}
```



## SVG version of grayscale filter: `desaturate.svg`

```html
<!-- SVG version of grayscale filter: desaturate.svg -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <filter id="grayscale">
        <feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0
            0.3333 0.3333 0.3333 0 0
            0.3333 0.3333 0.3333 0 0
            0  0  0  1 0"/>
    </filter>
</svg>
```



# Retina display media query
- See: http://css-tricks.com/snippets/css/retina-display-media-query/

```css
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2), /* Looks like a bug, so may want to add: */
only screen and (   -moz-min-device-pixel-ratio: 2),
only screen and (     -o-min-device-pixel-ratio: 2/1),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {
    /* Your retina specific stuff here */
}
```



Есть еще CSS3 метод в три строки:
```css
.v-align {
    position: absolute;
    top: 50%;
    transfrom: translateY(-50%);
}
```

Устанавливаем позиционирование относительно родительского элемента, устанавливаем положение посередине (50%)
и затем `translateY` (2D-преобразование) поднимает элемент на 50% от высоты оного вверх.

И, чтобы избежать размытия из-за расположения на "half-pixel",
родительскому элементу устанавливаем параметр сохранения размеров:
```css
.parent {
    transform-style: preserve-3d;
}
```



## Маска прозрачности строки текста

```html
<style>
    .clip-player._subtitles_inline .clip-player__content-frame-text-scroller {
        /* Для вэбкитов применяем маску линейным градиентом */
        -webkit-mask-image: -webkit-linear-gradient(
            top, transparent, white 20%, white 80%, transparent 100%
        );
        /* Для поддерживающих SVG, применяем SVG маску */
        mask: url(#m1);
    }
    .clip-player._subtitles_inline .clip-player__content-frame-text {
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>
<div style="position: absolute;">
    <svg height="0">
        <mask maskContentUnits="objectBoundingBox" maskUnits="objectBoundingBox" id="m1">
            <linearGradient y2="1" x2="0" gradientUnits="objectBoundingBox" id="g">
                <stop offset="0" stop-color="black"/>
                <stop offset="0.2" stop-color="white"/>
                <stop offset="0.8" stop-color="white"/>
                <stop offset="1" stop-color="black"/>
            </linearGradient>
            <rect fill="url(#g)" height="1" width="1" y="0" x="0"/>
        </mask>
    </svg>
</div>
```



The equivalent of `appearance: none;` for IE 10/11 is:
- See: https://github.com/LeaVerou/stretchy/issues/7#issuecomment-125593467

```css
select::-ms-expand {
   display: none;
}
```



## Диапазон элементов
Раскрасить элементы 7-14
```css
ol li:nth-child(-n+14):nth-child(n+7) {
  background-color: lightpink;
}
```


```css
.users {
  table-layout: fixed;
  width: 100%;
  white-space: nowrap;
}
```



## Language
- See: [`:lang()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang)

```styl
.block
    color: blue

        &__title
            font-weight: bold

    :lang(zh-CN) &
        color: red

        &__title
            font-weight: normal
```



## 12 column width
```
100%
91.66666666666666%
83.33333333333334%
75%
66.66666666666666%
58.333333333333336%
50%
41.66666666666667%
33.33333333333333%
25%
16.666666666666664%
8.333333333333332%
```



## Штриховка
```css
.striped {
    background-color: green;
    background-image: linear-gradient(
        -45deg,
        transparent 50%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0.5) 60%,
        transparent 60%,
        transparent
    );
    background-size: 10px 10px;
}
```



## `calc` сделать значение переменной отрицательным. Negative variable
```css
.a {
  --width: 1.25em;
  --margin-left: 0.325em;

  width: var(--width);
  margin-right: calc(-1 * (var(--width) + var(--margin-left)));
  margin-left: var(--margin-left);
}
```
