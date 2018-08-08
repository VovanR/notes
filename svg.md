# SVG

----

- See: https://github.com/tutsplus/how-to-hand-code-svg https://webdesign.tutsplus.com/tutorials/how-to-hand-code-svg--cms-30368
- See: [A guide to SVG `<use>` elements](http://taye.me/blog/svg/a-guide-to-svg-use-elements/)

## Circle

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="50" fill="rgba(0, 0, 0, 0.72)"/>
</svg>
```


## Вращение относительно центра

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <g id="cross" transform="rotate(45, 128, 128)" fill="#b0bec5">
    <rect width="6" height="244" x="125" y="6"/>
    <rect width="244" height="6" x="6" y="125"/>
  </g>
</svg>
```


## Icon

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="none" d="M0 0h24v24H0z"/>
  <polygon points="7 9 12 15 17 9"/>
</svg>
```


## Оптимизация

- See: https://github.com/svg/svgo

```shell
svgo test.svg
```


## Редактор

- See: https://inkscape.org/
