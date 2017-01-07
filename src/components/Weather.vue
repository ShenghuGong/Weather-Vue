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
  import weatherService from '../service/WeatherService';

  export default {
    data() {
      return {
        msg: `hello vue ${new Date()}`,
        msgData: '天气'
      };
    },
    methods: {
      getData() {
        // TODO 是否可以用 $vm 替换？
        const self = this;
        weatherService.getNowWeather('hangzhou', {
          success(result) {
            self.msgData = result;
            console.log('----success----', result);
          },
          error() {
            console.log('----failed----');
          },
          complete() {
            console.log('----final----');
          }
        });
      }
    }
  };
</script>
