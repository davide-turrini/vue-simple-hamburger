<script lang="ts">
import Vue from 'vue';
import VueSimpleHamburger from '@/vue-simple-hamburger.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueSimpleHamburger
  }
});
</script>

<template>
  <div id="app">
    <vue-simple-hamburger />
  </div>
</template>
