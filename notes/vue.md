# Vue.js

----

- See: https://vuejs.org/
- See: https://vueuse.org/

## Shorthand

- `<div :id="dynamicId">` === `<div v-bind:id="dynamicId">`
- `<a @click="doSomething">` === `<a v-on:click="doSomething">`
- `<template #footer>` === `<template v-slot:footer>`

**Dynamic Arguments**
- `<a :[attributeName]="url">` === `<a v-bind:[attributeName]="url">`
- `<a @[eventName]="doSomething">` === `<a v-on:[eventName]="doSomething">`
- `<template #[dynamicSlotName]>` === `<template v-slot:[dynamicSlotName]>`


## Base

```vue
<span>Message: {{ msg }}</span>
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
<button :disabled="isButtonDisabled">Button</button>

{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div :id="`list-${id}`"></div>

<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>

<p v-if="seen">Now you see me</p>
<form @submit.prevent="onSubmit">...</form>
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
<div :class="classObject"></div>
<p :class="$attrs.class">Hi!</p>
```


## Object

```js
data() {
  return {
    objectOfAttrs: {
      id: 'container',
      class: 'wrapper'
    }
  }
}
```
```vue
<div v-bind="objectOfAttrs"></div>
```

## Classes
```js
data() {
  return {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
}
```
```vue
<div :class="classObject"></div>
```

### Computed
```js
data() {
  return {
    isActive: true,
    error: null
  }
},
computed: {
  classObject() {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```
```vue
<div :class="classObject"></div>
```

### Arrays
```js
data() {
  return {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}
```
```vue
<div :class="[activeClass, errorClass]"></div>
<div :class="[isActive ? activeClass : '', errorClass]"></div>
<div :class="[{ active: isActive }, errorClass]"></div>
```

## Inline Styles
```js
data() {
  return {
    activeColor: 'red',
    fontSize: 30
  }
}
```
```vue
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
<div :style="{ 'font-size': fontSize + 'px' }"></div>
<div :style="styleObject"></div>
<div :style="[baseStyles, overridingStyles]"></div>
```
