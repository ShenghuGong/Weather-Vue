<template>
  <div>
    <button @click="getData">获取数据</button>
    <div>{{new Date().toString()}}</div>
    <div>{{msgData}}</div>
  </div>
</template>

<style lang="scss"
       rel="stylesheet/scss">
  body {
    background-color: #aaeecc;
  }
</style>

<script>
  import Xhr from '../common/js/NativeXhr';

  export default {
    data() {
      return {
        msg: 'hello vue ' + new Date(),
        msgData: '天气'
      };
    },
    methods: {
      getData() {
        Xhr.doRequest((result) => {
          this.msgData = result;
          console.log('----success----', result);
        }, () => {
          console.log('----failed----');
        }, () => {
          console.log('----final----');
        });
      }
    }
  };
</script>
