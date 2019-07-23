<template lang="pug">
  #app
    main-area
</template>

<script>
import MainArea from './components/MainArea.vue';

export default {
  name: 'app',
  components: {
    MainArea,
  },
};
</script>

<style lang="scss">
@import '@/styles/reset.scss';
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
</style>
