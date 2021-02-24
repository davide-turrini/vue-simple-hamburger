<h1 align="center">Vue Simple Hamburger</h1>
<p align="center">Vue.js plugin for <a href="https://github.com/jonsuh/hamburgers">Tasty CSS-animated hamburgers</a></p>

## What are we talking about

We are talking about a Vue porting and translation of this (https://jonsuh.com/hamburgers/) component .
This is css based (no sass/scss).
Its possible to change the style variables using directly its props.

## How to install

```
npm install vue-simple-hamburger
```

## How to use

```js
import App from './App.vue';
import VSimpleHamburger from 'vue-simple-hamburger';
import Vue from 'vue';

Vue.use(VSimpleHamburger);

new Vue({
  render: h => h(App),
}).$mount('#app');
```

or <b>without plugin initialization</b>... 
```vue
<template>
  <v-simple-hamburger :active="hamburger" @click="hamburger = !hamburger"/>
</template>

<script>
import VSimpleHamburger from 'vue-simple-hamburger';

export default { 
  component: {
    VSimpleHamburger
  },
  data () {
      return {
          hamburger: false
      }
  }
}
</script>
```

### Props


- ### active
  -  type: `Boolean`, 
  -  default: `false`
- ### fx
  -  type: `String`, 
  -  default: `boring`
- ### px
  -  type: `String`, 
  -  default: `15px`
- ### py
  -  type: `String`, 
  -  default: `15px`
- ### width <h6>(of the single layer)</h6>
  -  type: `String`, 
  -  default: `40px`
- ### height <h6>(of the single layer)</h6>
  -  type: `String`, 
  -  default: `4px`
- ### spacing <h6>(of the single layer)</h6>
  -  type: `String`, 
  -  default: `6px`
- ### color
  -  type: `String`, 
  -  default: `#000`
- ### borderRadius
  -  type: `String`, 
  -  default: `4px`
- ### hoverOpacity
  -  type: `String`, 
  -  default: `0.7`
- ### activeColor
  -  type: `String`, 
  -  default: `#000`
- ### activeHoverOpacity
  -  type: `String`, 
  -  default: `0.7`
  
  
### Effects:
 prop `fx` can be set with one of the following options
 
- 3dx
- 3dx-r
- 3dy
- 3dy-r
- 3dxy
- 3dxy-r
- arrow
- arrow-r
- arrowalt
- arrowalt-r
- arrowturn
- arrowturn-r
- boring
- collapse
- collapse-r
- elastic
- elastic-r
- emphatic
- emphatic-r
- minus
- slider
- slider-r
- spin
- spin-r
- spring
- spring-r
- stand
- stand-r
- squeeze
- vortex
- vortex-r

You can see all the types in actions on official documentation for [Hamburgers](https://jonsuh.com/hamburgers/).

### Events

The component simply emits `click` once mouse in clicked over.
You have to set the active prop by yourself in order to make the hamburger 'reactive'

### IE11 support?

You have to use polyfill because we are using vars in css


### Doubts ?

#### No reaction when clicked!
The component itself doesn't change the active prop. You have to listen the `click` event and then change the `active` prop value!

## License

MIT @ Davide Turrini [(davide-turrini)](https://github.com/davide-turrini)

(Please note: This is my first try to publish something on npm! Any kind of feedback or contribution is more than welcome)