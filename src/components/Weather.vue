<template>
  <div>
    <div>this is template body</div>
    <div>{{data}}</div>
  </div>
</template>

<style lang="scss"
       rel="stylesheet/scss">
  body {
    background-color: #aaeecc;
  }
</style>

<script>
  import { NativeXhr as xhr } from '../common/js/NativeXhr';

  export default {
    data() {
      return {
        msg: 'hello vue',
        data: xhr
      };
    }
  };
</script>
