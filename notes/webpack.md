# webpack

----

- See: https://webpack.js.org/


## Способы включения кода чанки

```js
{
    . . .

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            // RegExp. Включить модули и иконки
            test: /([\\/]node_modules[\\/])|(assets[\\/]img[\\/]svg-icons)/,

            // Function. Включить иконки и модули, но исключая библиотеки `react-virtualized` и `react-json-view`
            test: module => {
              if ([\\/]assets[\\/]img[\\/]svg-icons[\\/].test(module.context)) {
                return true
              } else if (/[\\/]node_modules[\\/]react-virtualized[\\/]/.test(module.context)) {
                return false
              } else if (/[\\/]node_modules[\\/]react-json-view[\\/]/.test(module.context)) {
                return false
              } else if (/[\\/]node_modules[\\/]/.test(module.context)) {
                return true
              }
              return false
            },
            name: 'vendor',
            chunks: 'all',
            minChunks: 2,
          }
        }
      }
    },

    . . .
}
```
