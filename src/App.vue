<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Weather></Weather>
    <hello></hello>
  </div>
</template>

<script>
  import Hello from './components/Hello.vue';
  import Weather from './components/Weather.vue';

  export default {
    name: 'app',
    components: {
      Hello,
      Weather
    }
  };
</script>

<style lang="scss"
       rel="stylesheet/scss">
  #app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
