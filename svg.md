# SVG

----

- See: https://github.com/tutsplus/how-to-hand-code-svg https://webdesign.tutsplus.com/tutorials/how-to-hand-code-svg--cms-30368
- See: [A guide to SVG `<use>` elements](http://taye.me/blog/svg/a-guide-to-svg-use-elements/)
- See: [Convert stroke to path](https://elrumordelaluz.github.io/micro-outline-stroke/)

## Circle

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="50" fill="rgba(0, 0, 0, 0.72)"/>
</svg>
```


## Path

- See: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
- See: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule

Квадрат:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <path
    d="
      M 0 0
        L 0 0 32 0
        L 32 0 32 32
        L 32 32 0 32
        L 0 32 0 0
      M 2 2
        L 2 2 30 2
        L 30 2 30 30
        L 30 30 2 30
        L 2 30 2 2
    "
    stroke="none"
    fill="inherit"
    fill-rule="evenodd"
  />
</svg   >
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


## Маска

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <defs>
    <mask id="hole">
      <rect width="100%" height="100%" fill="#fff"/>
      <circle r="48" cx="128" cy="128" fill="#000"/>
    </mask>
  </defs>

  <g mask="url(#hole)">
    <circle r="100" cx="128" cy="128" fill="hsla(254, 100%, 50%, 1)"/>
  </g>
</svg>
```


## Градиент

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <defs>
    <linearGradient id="gradient">
      <stop offset="0%"  stop-color="hsla(152, 100%, 50%, 1)"/>
      <stop offset="90%" stop-color="hsla(177, 100%, 50%, 1)"/>
    </linearGradient>
  </defs>

  <circle r="94" cx="128" cy="128" fill="url(#gradient)"/>
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
